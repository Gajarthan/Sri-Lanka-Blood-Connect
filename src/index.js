import { Hono } from 'hono';
import { hospitalId, bloodGroup, district, boundedLimit, researchScopeMessage } from './validation.js';

/**
 * Read-only research demonstration. All D1 data must remain fictional.
 * hospital_id is a public display filter, NOT proof of hospital identity.
 */
const app = new Hono();

app.use('*', async (c, next) => {
  await next();
  c.header('X-Content-Type-Options', 'nosniff');
  c.header('X-Frame-Options', 'DENY');
  c.header('Referrer-Policy', 'strict-origin-when-cross-origin');
  c.header('Cache-Control', 'no-store');
  c.header('Content-Security-Policy', "default-src 'self'; script-src 'self'; style-src 'self'; connect-src 'self'; img-src 'self' data:; object-src 'none'; base-uri 'none'; frame-ancestors 'none'");
});

app.onError((err, c) => {
  console.error('Research demo request failed:', err.name);
  if (err instanceof RangeError) return c.json({ error: err.message }, 400);
  return c.json({ error: 'Unable to load demonstration data.' }, 500);
});

async function resolveHospital(c) {
  const id = hospitalId(c.req.query('hospital_id'));
  if (!id) return null;
  const record = await c.env.DB.prepare(
    'SELECT id, name, district, province FROM demo_hospitals WHERE id = ? AND active = 1'
  ).bind(id).first();
  if (!record) throw new RangeError('Unknown hospital identifier');
  return record;
}

function respond(c, records, scope = null) {
  return c.json({ demo: true, notice: researchScopeMessage(), scope, count: records.length, data: records });
}

app.get('/api/health', async (c) => {
  const db = await c.env.DB.prepare('SELECT 1 AS ready').first();
  return c.json({ status: db?.ready === 1 ? 'ok' : 'error', mode: 'fictional-research-prototype', readOnly: true });
});

app.get('/api/hospitals', async (c) => {
  const data = await c.env.DB.prepare(
    'SELECT id, name, district, province, category FROM demo_hospitals WHERE active = 1 ORDER BY province, district, name'
  ).all();
  return respond(c, data.results);
});

app.get('/api/clubs', async (c) => {
  const h = await resolveHospital(c);
  const statement = h
    ? c.env.DB.prepare('SELECT c.id, c.name, c.district, c.member_count FROM demo_clubs c JOIN demo_club_hospitals ch ON ch.club_id = c.id WHERE ch.hospital_id = ? ORDER BY c.name').bind(h.id)
    : c.env.DB.prepare('SELECT id, name, district, member_count FROM demo_clubs ORDER BY district, name');
  const data = await statement.all();
  return respond(c, data.results, h?.id ?? null);
});

app.get('/api/donors', async (c) => {
  const h = await resolveHospital(c);
  const group = bloodGroup(c.req.query('blood_group'));
  const area = district(c.req.query('district'));
  const limit = boundedLimit(c.req.query('limit'));
  const where = ['consented = 1'];
  const args = [];
  if (h) { where.push('district = ?'); args.push(h.district); }
  if (area) { where.push('district = ?'); args.push(area); }
  if (group) { where.push('blood_group = ?'); args.push(group); }
  const query = 'SELECT id, display_alias, blood_group, district, province, open_to_contact, preferred_language FROM demo_donors WHERE ' +
    where.join(' AND ') + ' ORDER BY district, display_alias LIMIT ?';
  const data = await c.env.DB.prepare(query).bind(...args, limit).all();
  return respond(c, data.results, h?.id ?? null);
});

app.get('/api/campaigns', async (c) => {
  const h = await resolveHospital(c);
  const base = 'SELECT c.id, c.title, c.hospital_id, h.name AS hospital_name, h.district, c.campaign_date, c.blood_group, c.status, c.capacity FROM demo_campaigns c JOIN demo_hospitals h ON c.hospital_id = h.id';
  const statement = h
    ? c.env.DB.prepare(base + ' WHERE c.hospital_id = ? ORDER BY c.campaign_date').bind(h.id)
    : c.env.DB.prepare(base + ' ORDER BY c.campaign_date');
  const data = await statement.all();
  return respond(c, data.results, h?.id ?? null);
});

app.get('/api/requests', async (c) => {
  const h = await resolveHospital(c);
  const base = 'SELECT r.id, r.hospital_id, h.name AS hospital_name, h.district, r.blood_group, r.priority, r.status, r.created_on, r.context_note FROM demo_outreach_requests r JOIN demo_hospitals h ON r.hospital_id = h.id';
  const statement = h
    ? c.env.DB.prepare(base + ' WHERE r.hospital_id = ? ORDER BY r.created_on DESC').bind(h.id)
    : c.env.DB.prepare(base + ' ORDER BY r.created_on DESC');
  const data = await statement.all();
  return respond(c, data.results, h?.id ?? null);
});

app.all('/api/*', (c) => c.json({ error: 'Not available in the read-only research demo.' }, 404));
app.get('/', (c) => c.env.ASSETS.fetch(c.req.raw));
export default app;
