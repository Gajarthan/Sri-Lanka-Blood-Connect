# Privacy, research ethics and safety

**No real donor or patient data may be entered in this demo.** All preloaded organizations are explicitly fictional and every donor is represented only by a fictional alias.

## Before any human-subject research
- Determine which hospital, NBTS and university or independent ethics approvals apply.
- Obtain written permission to approach staff and other human participants.
- Explain voluntary participation, the ability to withdraw where applicable, and whether interviews or notes will be retained.
- Do not photograph actual records, extract internal hospital data, solicit diagnoses, collect contact details or record patients in this public repository.
- Use approved consent forms, storage locations, access rules and retention/deletion schedules.

## Before any operational or live-data deployment
The architecture and threat model must be re-evaluated. Implement verified hospital identities, staff authentication, least-privilege authorization and actual tenant isolation. Require donor informed consent, access logs, encryption, retention policy, backups, response plans, hosting/data-residency review, national and institutional approvals, and a patient-safety review.

A URL query parameter such as hospital_id **never** authenticates a hospital. Public endpoints must not disclose personally identifying contact details. Donor medical eligibility, grouping/crossmatching, blood collection, storage, issue and clinical decisions remain exclusively with authorized professionals.

## Public contributions
Never submit credentials, names, telephone numbers, medical histories, private messages, patient requests or internal documents to source control, discussion issues or screenshots. Treat public Git history as permanent. Disclose conflicts of interest and distinguish fictional examples from observed fieldwork.

## Independent status
Neither NBTS nor any Sri Lankan hospital has been verified as a partner in this prototype. Do not advertise it as officially approved.
