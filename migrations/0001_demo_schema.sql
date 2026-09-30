-- Research-only schema: do NOT populate with real donor, patient or hospital records.
PRAGMA foreign_keys = ON;
CREATE TABLE IF NOT EXISTS demo_hospitals (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  district TEXT NOT NULL,
  province TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'Fictional research centre',
  active INTEGER NOT NULL DEFAULT 1 CHECK(active IN (0,1))
);
CREATE TABLE IF NOT EXISTS demo_clubs (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  district TEXT NOT NULL,
  member_count INTEGER NOT NULL DEFAULT 0 CHECK(member_count >= 0)
);
CREATE TABLE IF NOT EXISTS demo_club_hospitals (
  club_id TEXT NOT NULL REFERENCES demo_clubs(id),
  hospital_id TEXT NOT NULL REFERENCES demo_hospitals(id),
  PRIMARY KEY (club_id, hospital_id)
);
CREATE TABLE IF NOT EXISTS demo_donors (
  id TEXT PRIMARY KEY,
  display_alias TEXT NOT NULL UNIQUE,
  blood_group TEXT NOT NULL CHECK(blood_group IN ('A+','A-','B+','B-','AB+','AB-','O+','O-')),
  district TEXT NOT NULL,
  province TEXT NOT NULL,
  consented INTEGER NOT NULL DEFAULT 1 CHECK(consented IN (0,1)),
  open_to_contact INTEGER NOT NULL DEFAULT 1 CHECK(open_to_contact IN (0,1)),
  preferred_language TEXT NOT NULL DEFAULT 'en' CHECK(preferred_language IN ('en','ta','si'))
);
CREATE TABLE IF NOT EXISTS demo_campaigns (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  hospital_id TEXT NOT NULL REFERENCES demo_hospitals(id),
  campaign_date TEXT NOT NULL,
  blood_group TEXT NOT NULL DEFAULT 'All groups',
  status TEXT NOT NULL CHECK(status IN ('planned','recruiting','completed')),
  capacity INTEGER NOT NULL CHECK(capacity >= 0)
);
CREATE TABLE IF NOT EXISTS demo_outreach_requests (
  id TEXT PRIMARY KEY,
  hospital_id TEXT NOT NULL REFERENCES demo_hospitals(id),
  blood_group TEXT NOT NULL,
  priority TEXT NOT NULL CHECK(priority IN ('routine','priority')),
  status TEXT NOT NULL CHECK(status IN ('draft','review','approved','closed')),
  created_on TEXT NOT NULL,
  context_note TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_demo_donors_district_group ON demo_donors(district,blood_group);
CREATE INDEX IF NOT EXISTS idx_demo_campaigns_hospital ON demo_campaigns(hospital_id,campaign_date);
CREATE INDEX IF NOT EXISTS idx_demo_requests_hospital ON demo_outreach_requests(hospital_id,created_on);
