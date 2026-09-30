# Sri Lanka Blood Connect 🩸

**Research prototype — fictional data only. Not an approved clinical system.**

An open-source research project exploring a cloud-based, multi-hospital **voluntary blood donor coordination** platform, beginning with a Jaffna case study and considering all-island use.

This project studies whether digital volunteer and campaign coordination can complement — not replace — the systems already operated by Sri Lanka's National Blood Transfusion Service (NBTS).

## Research demonstration

- Multiple fictional hospital/centre accounts, searchable by district
- Fictional consenting volunteer aliases, selectable by blood group and district
- Donation campaign and donor-club coordination examples
- Hospital-associated request queue (non-clinical, fictional)
- English, Tamil and Sinhala interface labels
- Cloudflare Workers + Hono + D1, static assets, no VPS

**No hospital has authorized or endorsed this project.** No live registration, patient data, medical donor screening, blood inventory, SMS delivery or actual hospital credentials are included.

## Quick start

Install Node.js 20+, then:

```bash
npm install
npm run db:migrate:local
npm run db:seed:local
npm run dev
```

Open the Wrangler local URL (normally `http://localhost:8787`).

```bash
npm run check
```

## Cloudflare deployment

```bash
npx wrangler login
npm run deploy
npm run db:migrate:remote
npm run db:seed:remote
```

Apply the *synthetic-data seed only in a dedicated demonstration database*. For live deployments, a separate design with authorization, verified staff identity, tenant isolation, consent, and a formal privacy and clinical review is required.

## Research governance

Before interviewing hospital personnel/donors or processing actual records, request the necessary institutional permission and ethics review or exemption. See the [NBTS Research Review Committee](https://nbts.health.gov.lk/research-review-committee-national-blood-transfusion-service/).

The research question is: **Which volunteer recruitment or donation-campaign coordination needs, if any, are not adequately addressed by existing processes and systems?**

## Disclaimer

Not affiliated with or endorsed by NBTS, Sri Lanka's Ministry of Health or any hospital. Never enter real donor/patient data in this public research demonstration.

## Research concept note

Read the [two-page research concept note](docs/RESEARCH_CONCEPT_NOTE.md) for the problem statement, objectives, proposed methodology, expected outputs and ethical safeguards. This is a preliminary research document, not an approved protocol.
