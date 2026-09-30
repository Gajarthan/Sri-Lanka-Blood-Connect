# Sri Lanka Blood Connect — research concept note

**Working title:** Design and Feasibility Evaluation of a Cloud-Based Multi-Hospital Voluntary Blood Donor Coordination Platform for Sri Lanka  
**Proposed researcher:** Gajarthan Thevarajah  
**Project/affiliation:** Sri Lanka Blood Connect · Bohar Solutions (Pvt) Ltd  
**Setting:** Jaffna District, with potential wider applicability  
**Status:** Preliminary concept; ethics/institutional approvals not obtained

> Research only; the current public synthetic-data prototype has no authentication and must not be used with real donor or patient records.

## 1  Background and problem statement

Sri Lanka’s National Blood Transfusion Service (NBTS) already operates a Blood Bank Management System (BBMS), daily stock reporting, and the Raktha donor-appointment service [1]. The presence of these services means a new hospital platform cannot be justified by assuming that no digital infrastructure exists. This study will investigate a narrower, presently unverified question: whether voluntary donor clubs, hospitals and campaign organizers encounter unmet needs in consent-based outreach, cross-organization coordination, and follow-up. Current workflows, actual pain points and any duplication risks will be established through documentary review and approved stakeholder engagement—not assumed in advance.

## 2  Aim and research questions

Aim: To determine whether a supplementary, hospital-authorized digital platform is useful, usable and technically feasible for coordinating voluntary blood donor engagement in Jaffna, with potential applicability elsewhere in Sri Lanka.

- RQ1: Which donor-outreach tasks are already supported by NBTS systems, and where—if anywhere—are unmet coordination needs observed?
- RQ2: Can a privacy-conscious, multi-hospital prototype meet validated volunteer-coordination tasks without performing clinical blood-bank functions?
- RQ3: What governance, infrastructure and operational conditions would be required for any wider deployment?

## 3  Specific objectives

1. Map existing NBTS services and locally authorized donor-campaign processes.
2. Identify user needs and define prioritized, testable system requirements.
3. Design and implement a synthetic-data prototype on Cloudflare Workers and D1.
4. Evaluate representative coordination tasks, access-control requirements, usability and limitations.
5. Produce an evidence-based feasibility decision, including the option not to deploy a separate platform.

## 4  Scope and boundaries

The prototype may illustrate hospital/club roles, approved campaigns, regional searches and aggregate reporting using entirely fictional records. It will not manage patient records, assess donor medical eligibility, match blood for transfusion, allocate clinical blood stock, issue emergency clinical instructions, send live donor notifications or connect to NBTS systems. The current read-only demonstration has no authentication: selecting a hospital is not an access-control boundary. A public repository does not imply hospital sponsorship, clinical safety or permission to process personal data.

## 5  Proposed methodology

1. **Desk review (weeks 1–3):** Review NBTS documentation, related international models, existing project code and Sri Lankan privacy/ethics guidance. Build a function-by-function baseline against BBMS and Raktha [1].
2. **Approvals and needs assessment (timing subject to review):** Seek NBTS Research Review Committee guidance, relevant institutional permissions and ethics review or a written exemption decision before recruiting participants [2, 3]. If approved, purposively recruit approximately 8–12 blood-bank/hospital professionals and 5–8 donor-club organizers for voluntary semi-structured interviews. Proposed numbers are planning estimates, not recruited samples.
3. **Requirements and prototype:** Analyze interview notes thematically; document role boundaries, proposed consent flows, organizational separation and data flows. Implement a non-clinical Workers/D1 prototype using synthetic donors and organizations.
4. **Controlled evaluation:** With any required participant approvals, invite about 8–12 adult representatives to complete fictional tasks such as finding a fictional campaign or filtering fictional donor records. Record task-completion rate, time, errors, perceived ease and brief qualitative feedback. Review hospital access requirements with threat-model scenarios; the current demonstration does not implement authentication.
5. **Feasibility synthesis (illustrative weeks 12–16, subject to permissions):** Triangulate needs, comparative functionality, security constraints, estimated operating costs and usability observations. Report conflicting evidence and limits; a small Jaffna study cannot establish national effectiveness.

## 6  Expected outputs

- A documented map of existing services, stakeholder requirements and verified gaps (or absence of gaps).
- An open-source, non-clinical multi-hospital demonstration and reproducible synthetic dataset.
- A usability/technical feasibility report, threat-and-risk register, and staged decision framework for any future pilot.

## 7  Ethical, clinical and data-protection safeguards

No interviews, identifiable donor data collection, hospital records, live messaging or integration will begin without appropriate written approvals and ethics review/exemption determination [2, 3]. Participation will be voluntary, with understandable information sheets, informed consent, ability to stop without penalty, and language-accessible materials. Collect the minimum necessary research information; replace names with codes in analysis, restrict researcher access, use encryption, define retention/deletion periods and report only aggregated results. No personal or hospital-confidential information will enter the public GitHub repository or synthetic demonstration. Disclose Bohar Solutions’ involvement and any future commercial interest. Healthcare staff alone retain all screening, compatibility, collection, inventory and transfusion decisions. Sri Lankan data-protection requirements and cross-border processing must be assessed before real-data hosting [4]. Cloudflare D1 does not provide a Sri Lanka-specific jurisdiction guarantee [5].

## 8  References and next step

[1] NBTS Health Information Unit — https://nbts.health.gov.lk/health-information-unit/

[2] NBTS Research Review Committee — https://nbts.health.gov.lk/research-review-committee-national-blood-transfusion-service/

[3] University of Jaffna, Faculty of Medicine Ethics Review Committee — https://med.jfn.ac.lk/ethics-review-committee/

[4] Sri Lanka Data Protection Authority — https://www.dpa.gov.lk/guidelines.php

[5] Cloudflare D1 data location — https://developers.cloudflare.com/d1/configuration/data-location/

Next step: Seek NBTS RRC guidance and identify the appropriate ethics review process before participant recruitment.

**Source repository:** https://github.com/Gajarthan/Sri-Lanka-Blood-Connect
