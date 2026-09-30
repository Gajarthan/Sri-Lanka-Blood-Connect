/* Public, READ-ONLY dashboard. All records are fictional. Never store real donor data here. */
const WORDS = {
  en: {
    hero: 'A connected future for voluntary blood donation',
    subtitle: 'Explore a fictional network of hospitals, volunteer clubs and donor outreach campaigns. This demonstration does not collect personal data.',
    explore: 'EXPLORE THE NETWORK', workspace: 'Research workspace', demo: 'Read-only demo',
    hospital: 'Research centre', district: 'District', blood: 'Blood group',
    allHospitals: 'All demonstration centres', allDistricts: 'All districts', allGroups: 'All groups',
    donors: 'Volunteer aliases', hospitals: 'Research centres', campaigns: 'Campaigns', clubs: 'Donor clubs', requests: 'Outreach requests',
    centre: 'Centre', volunteer: 'Alias', group: 'Group', location: 'District', language: 'Language',
    available: 'Open to contact', campaign: 'Campaign', date: 'Date', status: 'Status',
    priority: 'Priority', note: 'Illustrative context', membership: 'Illustrative members',
    capacity: 'Planned capacity', none: 'No fictional records match these filters.',
    yes: 'Yes', no: 'No', loading: 'Loading fictional research records…',
    error: 'Could not load the demo. Check that D1 is migrated and seeded.',
    safety: 'Research-only system',
    safetyCopy: 'No real donors, patient cases, hospital approvals or medical eligibility determinations. A hospital selection is a display filter, not an authenticated account.'
  },
  ta: {
    hero: 'தன்னார்வ இரத்த தானத்திற்கான ஒருங்கிணைந்த எதிர்காலம்',
    subtitle: 'மருத்துவ மையங்கள், தன்னார்வ அமைப்புகள் மற்றும் இரத்த தான முகாம்களின் கற்பனைத் தரவுகளை ஆராயுங்கள். தனிப்பட்ட தகவல்கள் சேகரிக்கப்படுவதில்லை.',
    explore: 'வலையமைப்பை ஆராயுங்கள்', workspace: 'ஆராய்ச்சி செயல்தளம்', demo: 'வாசிக்க மட்டும்',
    hospital: 'ஆராய்ச்சி மையம்', district: 'மாவட்டம்', blood: 'இரத்த வகை',
    allHospitals: 'அனைத்து மாதிரி மையங்களும்', allDistricts: 'அனைத்து மாவட்டங்களும்', allGroups: 'அனைத்து வகைகளும்',
    donors: 'தன்னார்வப் பெயர்கள்', hospitals: 'ஆராய்ச்சி மையங்கள்', campaigns: 'முகாம்கள்', clubs: 'தான அமைப்புகள்', requests: 'தொடர்பு கோரிக்கைகள்',
    centre: 'மையம்', volunteer: 'குறியீட்டுப் பெயர்', group: 'வகை', location: 'மாவட்டம்', language: 'மொழி',
    available: 'தொடர்பு கொள்ளலாம்', campaign: 'முகாம்', date: 'தேதி', status: 'நிலை',
    priority: 'முன்னுரிமை', note: 'கற்பனைச் சூழல்', membership: 'மாதிரி உறுப்பினர்கள்',
    capacity: 'திட்டமிடப்பட்ட எண்ணிக்கை', none: 'இந்த வடிகட்டலுக்கு மாதிரிப் பதிவுகள் இல்லை.',
    yes: 'ஆம்', no: 'இல்லை', loading: 'கற்பனைத் தரவுகள் ஏற்றப்படுகின்றன…',
    error: 'மாதிரித் தரவுகளை ஏற்ற முடியவில்லை. D1 அமைப்பைச் சரிபார்க்கவும்.',
    safety: 'ஆராய்ச்சிக்கான மாதிரி மட்டும்',
    safetyCopy: 'உண்மையான தானதாரர்கள், நோயாளிகள், மருத்துவமனை அனுமதி அல்லது மருத்துவத் தகுதி முடிவுகள் இல்லை. மையத் தேர்வு உள்நுழைவு அல்ல.'
  },
  si: {
    hero: 'ස්වේච්ඡා රුධිර පරිත්‍යාගය සඳහා සම්බන්ධිත අනාගතයක්',
    subtitle: 'රෝහල්, ස්වේච්ඡා කණ්ඩායම් සහ ප්‍රචාරණ වැඩසටහන්වල කල්පිත දත්ත පිරික්සන්න. පුද්ගලික තොරතුරු රැස් නොකෙරේ.',
    explore: 'ජාලය ගවේෂණය කරන්න', workspace: 'පර්යේෂණ පුවරුව', demo: 'කියවීමට පමණයි',
    hospital: 'පර්යේෂණ මධ්‍යස්ථානය', district: 'දිස්ත්‍රික්කය', blood: 'රුධිර වර්ගය',
    allHospitals: 'සියලු ආදර්ශ මධ්‍යස්ථාන', allDistricts: 'සියලු දිස්ත්‍රික්ක', allGroups: 'සියලු වර්ග',
    donors: 'ස්වේච්ඡා නාම', hospitals: 'පර්යේෂණ මධ්‍යස්ථාන', campaigns: 'වැඩසටහන්', clubs: 'දායක කණ්ඩායම්', requests: 'සම්බන්ධතා ඉල්ලීම්',
    centre: 'මධ්‍යස්ථානය', volunteer: 'නාමය', group: 'වර්ගය', location: 'දිස්ත්‍රික්කය', language: 'භාෂාව',
    available: 'සම්බන්ධ විය හැක', campaign: 'වැඩසටහන', date: 'දිනය', status: 'තත්ත්වය',
    priority: 'ප්‍රමුඛතාව', note: 'කල්පිත සටහන', membership: 'ආදර්ශ සාමාජිකයන්',
    capacity: 'සැලසුම් කළ ධාරිතාව', none: 'මෙම පෙරහන් සඳහා දත්ත නොමැත.',
    yes: 'ඔව්', no: 'නැත', loading: 'කල්පිත දත්ත පූරණය වෙමින්…',
    error: 'දත්ත පූරණය කළ නොහැක. D1 දත්ත ගබඩාව පරීක්ෂා කරන්න.',
    safety: 'පර්යේෂණ ආදර්ශය පමණි',
    safetyCopy: 'සැබෑ දායකයන්, රෝගීන්, රෝහල් අනුමැතිය හෝ වෛද්‍ය තීරණ මෙහි නොමැත. මධ්‍යස්ථාන තේරීම පිවිසුමක් නොවේ.'
  }
};

const state = { lang: 'en', hospital: 'all', district: 'all', group: 'all', tab: 'donors',
  data: { hospitals: [], donors: [], clubs: [], campaigns: [], requests: [] } };
const $ = (id) => document.getElementById(id);
const w = (key) => WORDS[state.lang][key] || WORDS.en[key] || key;
function el(tag, cls, text) {
  const x = document.createElement(tag);
  if (cls) x.className = cls;
  if (text !== undefined && text !== null) x.textContent = String(text);
  return x;
}
function replace(id, children) { $(id).replaceChildren(...children); }
function setLabel(id, content) { $(id).textContent = content; }
function opt(value, name) { const o=el('option', '', name); o.value = value; return o; }
function fillSelect(id, entries, value) {
  replace(id, entries.map((item) => opt(item[0], item[1])));
  $(id).value = value;
}
function query() {
  const q = new URLSearchParams();
  if (state.hospital !== 'all') q.set('hospital_id', state.hospital);
  if (state.district !== 'all') q.set('district', state.district);
  if (state.group !== 'all') q.set('blood_group', state.group);
  return q;
}
async function get(route, search = '') {
  const res = await fetch('/api/' + route + (search ? '?' + search : ''), { cache: 'no-store' });
  if (!res.ok) throw new Error('HTTP ' + res.status);
  const body = await res.json();
  if (!body.demo || !Array.isArray(body.data)) throw new Error('Unexpected response');
  return body.data;
}
function translations() {
  document.documentElement.lang = state.lang;
  setLabel('hero-title', w('hero')); setLabel('hero-description', w('subtitle'));
  setLabel('explore-label', w('explore')); setLabel('section-title', w('workspace'));
  setLabel('hospital-label', w('hospital')); setLabel('district-label', w('district'));
  setLabel('group-label', w('blood')); setLabel('mode-label', w('demo'));
  setLabel('safety-title', w('safety')); setLabel('safety-copy', w('safetyCopy'));
}
function filters() {
  const centres = [['all', w('allHospitals')], ...state.data.hospitals.map(h => [h.id, h.name])];
  const districts = ['Jaffna','Vavuniya','Kandy','Colombo'];
  fillSelect('hospital', centres, state.hospital);
  fillSelect('district', [['all', w('allDistricts')], ...districts.map(d => [d,d])], state.district);
  fillSelect('blood_group', [['all', w('allGroups')], ...['A+','A-','B+','B-','AB+','AB-','O+','O-'].map(g => [g,g])], state.group);
  $('district').disabled = state.hospital !== 'all';
}
function metrics() {
  const defs = [
    ['hospitals','hospitals'],['donors','donors'],['campaigns','campaigns'],['clubs','clubs']
  ];
  replace('metrics', defs.map(([key,lab]) => {
    const card = el('div','metric');
    card.append(el('span','metric-number',state.data[key].length),el('span','metric-label',w(lab)));
    return card;
  }));
}
function tabs() {
  const names=['donors','campaigns','clubs','requests','hospitals'];
  replace('tabs', names.map(key => {
    const b=el('button','tab'+(state.tab === key ? ' is-active' : ''),w(key));
    b.type='button'; b.setAttribute('aria-pressed',state.tab===key ? 'true' : 'false');
    b.addEventListener('click',() => { state.tab=key; tabs(); table(); });
    return b;
  }));
}
function renderCell(row,value,badge=false) {
  const c=el('td');
  if (badge) c.append(el('span','pill',value));
  else c.textContent=String(value ?? '—');
  row.append(c);
}
function table() {
  const model = {
    donors: {
      headings:['volunteer','group','location','language','available'],
      keys:[d=>d.display_alias,d=>d.blood_group,d=>d.district,d=>d.preferred_language,d=>d.open_to_contact ? w('yes') : w('no')],
      badges:[1]
    },
    hospitals: {
      headings:['centre','location','status'],
      keys:[d=>d.name,d=>d.district,d=>d.province],
      badges:[]
    },
    clubs: {
      headings:['centre','location','membership'],
      keys:[d=>d.name,d=>d.district,d=>d.member_count],
      badges:[]
    },
    campaigns: {
      headings:['campaign','centre','date','group','status','capacity'],
      keys:[d=>d.title,d=>d.hospital_name,d=>d.campaign_date,d=>d.blood_group,d=>d.status,d=>d.capacity],
      badges:[4]
    },
    requests: {
      headings:['centre','group','priority','status','date','note'],
      keys:[d=>d.hospital_name,d=>d.blood_group,d=>d.priority,d=>d.status,d=>d.created_on,d=>d.context_note],
      badges:[2,3]
    }
  };
  const rows=state.data[state.tab];
  if (!rows.length) { replace('results',[el('p','empty',w('none'))]); return; }
  const spec=model[state.tab]; const wrap=el('div','table-scroll'); const tab=el('table');
  const head=el('thead'); const hrow=el('tr');
  spec.headings.forEach(k=>hrow.append(el('th','',w(k))));
  head.append(hrow); tab.append(head);
  const body=el('tbody');
  rows.forEach(data=>{
    const tr=el('tr');
    spec.keys.forEach((fn,i)=>renderCell(tr,fn(data),spec.badges.includes(i)));
    body.append(tr);
  });
  tab.append(body); wrap.append(tab); replace('results',[wrap]);
}
async function refresh() {
  replace('results',[el('p','loading',w('loading'))]);
  try {
    const q=query();
    // Group and district affect only the volunteer directory.
    const h = new URLSearchParams();
    if (state.hospital !== 'all') h.set('hospital_id', state.hospital);
    const [donors,clubs,campaigns,requests] = await Promise.all([
      get('donors',q.toString()),get('clubs',h.toString()),
      get('campaigns',h.toString()),get('requests',h.toString())
    ]);
    Object.assign(state.data,{ donors,clubs,campaigns,requests });
    const matching = state.hospital === 'all'
      ? state.data.allHospitals || state.data.hospitals
      : state.data.hospitals.filter(x=>x.id===state.hospital);
    state.data.hospitals=matching;
    metrics(); table();
  } catch (err) {
    replace('results',[el('p','error',w('error'))]);
    console.error('Research-demo data load:',err.message);
  }
}
async function start() {
  $('language').addEventListener('change', async e=>{
    state.lang=e.target.value; translations(); filters(); tabs(); metrics(); table();
  });
  $('hospital').addEventListener('change', async e=>{
    state.hospital=e.target.value; state.district='all';
    state.data.hospitals=state.data.allHospitals;
    filters(); await refresh();
  });
  $('district').addEventListener('change',async e=>{
    state.district=e.target.value; await refresh();
  });
  $('blood_group').addEventListener('change',async e=>{
    state.group=e.target.value; await refresh();
  });
  translations();
  try {
    state.data.hospitals=await get('hospitals');
    state.data.allHospitals=state.data.hospitals.slice();
    filters(); tabs(); await refresh();
  } catch (err) {
    replace('results',[el('p','error',w('error'))]);
    console.error('Research-demo initialization:',err.message);
  }
}
start();
