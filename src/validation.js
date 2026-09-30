/** Input validation for publicly accessible, fictional research endpoints only. */
export const BLOOD_GROUPS = Object.freeze(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']);

export function hospitalId(value) {
  if (value == null || value === '' || value === 'all') return null;
  if (!/^h_[a-z0-9-]{2,32}$/.test(value)) throw new RangeError('Invalid hospital identifier');
  return value;
}

export function bloodGroup(value) {
  if (value == null || value === '' || value === 'all') return null;
  if (!BLOOD_GROUPS.includes(value)) throw new RangeError('Invalid blood group');
  return value;
}

export function district(value) {
  if (value == null || value === '' || value === 'all') return null;
  if (!/^[a-zA-Z ]{2,50}$/.test(value)) throw new RangeError('Invalid district');
  return value;
}

export function boundedLimit(value, fallback = 60, max = 100) {
  if (value == null || value === '') return fallback;
  if (!/^[0-9]+$/.test(value)) throw new RangeError('Invalid limit');
  const n = Number(value);
  if (n < 1 || n > max) throw new RangeError('Limit must be between 1 and ' + max);
  return n;
}

export function researchScopeMessage() {
  return 'PUBLIC RESEARCH DEMO ONLY: synthetic data; no clinical decisions, live donor registration, or hospital authorization.';
}
