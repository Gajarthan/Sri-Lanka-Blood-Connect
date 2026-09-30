# Technical architecture — demonstration only

Browser (static HTML, CSS, JavaScript)
  -> Cloudflare Workers Static Assets
  -> Hono GET /api/*
  -> Cloudflare D1 database (fictional records only)

The Worker exposes only GET endpoints. SQL queries use D1 prepared statements with bound user filters. Input values and result limits are validated. All shown donors are aliases and no sensitive clinical fields are present.

## Hypothetical production design — not implemented
A real system would require centrally approved organization registration, verified clinician/organizer identities, formal multi-tenant access controls, donor consent, notification opt-in/out, consent revocation, audit logging, deletion/retention governance, abuse prevention and separately governed integration to any clinical system.

A hospital filter is **not** access control. Sharing donor contact information is not part of this prototype. Cloudflare-hosted storage does not by itself prove compliance with Sri Lankan data residency, healthcare or personal-data requirements.

## API
- `GET /api/health`: D1 connectivity.
- `GET /api/hospitals`: fictional centre directory.
- `GET /api/clubs?hospital_id=h_jaffna`: fictional centre-club associations.
- `GET /api/donors?hospital_id=h_jaffna&blood_group=O%2B`: aliases only, no contact data.
- `GET /api/campaigns?hospital_id=h_jaffna`: fictional campaigns.
- `GET /api/requests?hospital_id=h_jaffna`: fictional outreach review queue.

Public README includes local setup and manual deployment. Do not enable an automated GitHub Actions workflow.
