import test from 'node:test';
import assert from 'node:assert/strict';
import { hospitalId, bloodGroup, district, boundedLimit, researchScopeMessage } from '../src/validation.js';

test('valid hospital identifiers', () => {
  assert.equal(hospitalId('h_jaffna'), 'h_jaffna');
  assert.equal(hospitalId('all'), null);
  assert.throws(() => hospitalId("h_jaffna' OR 1=1 --"), RangeError);
});

test('blood group restricts to eight standard labels', () => {
  assert.equal(bloodGroup('AB-'), 'AB-');
  assert.equal(bloodGroup('all'), null);
  assert.throws(() => bloodGroup('INVALID'), RangeError);
});

test('district rejects injected markup', () => {
  assert.equal(district('Point Pedro'), 'Point Pedro');
  assert.throws(() => district('<script>'), RangeError);
});

test('result limit is bounded', () => {
  assert.equal(boundedLimit('25'), 25);
  assert.equal(boundedLimit(), 60);
  assert.throws(() => boundedLimit('9999'), RangeError);
});

test('scope warning prevents clinical misrepresentation', () => {
  assert.match(researchScopeMessage(), /synthetic data/i);
  assert.match(researchScopeMessage(), /no clinical decisions/i);
});
