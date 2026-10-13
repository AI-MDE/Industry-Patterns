# Physical Therapy Clinic Model Pattern

## Classification

**Applied industry extension — outside the original industry subject list.**

This pattern specializes the [Health Care model pattern](health-care.md) for outpatient, hospital-based, home-based, and virtual physical therapy clinics. It reuses cross-industry Party, Role, Organization, Location, Scheduling, Agreement, Charge, Payment, Document, Status, and Event concepts.

## Intent

Model a physical therapy clinic that receives referrals or direct-access patients; verifies eligibility and authorization; schedules care; evaluates impairments and functional limitations; establishes a plan of care and measurable goals; delivers and documents therapeutic interventions; assigns home programs; measures outcomes; bills responsible parties; and discharges or transitions the patient safely.

This is a logical business and clinical operations pattern. It is not a clinical-practice guideline, coding standard, interoperability profile, privacy rule, or jurisdiction-specific regulatory model. Implementations must adapt professional scope, supervision, documentation, billing, consent, and retention rules to the applicable jurisdiction.

## Business overview

**Need/Referral → Intake → Eligibility/Authorization → Initial Evaluation → Plan of Care → Goals → Scheduled Visits → Treatment/Exercise → Progress Measurement → Reassessment → Billing → Discharge/Follow-up**

A Patient enters through a Referral or direct access. Clinic staff register the Patient, collect intake information, identify the referring and treating Providers, verify coverage and financial responsibility, and determine whether authorization is required. A Physical Therapist performs an Initial Evaluation, records the presenting condition, functional history, precautions, observations, tests, measures, assessment, and prognosis, then establishes a Plan of Care with measurable Therapy Goals, planned Interventions, frequency, and duration.

Appointments organize availability, but each attended treatment interaction becomes a Therapy Visit. During a Visit, the treating Provider records interventions actually delivered, time or units, Patient response, education, progress, and any adverse event. The clinic may issue a Home Exercise Program and track adherence. Periodic Progress Evaluations compare results with baselines and goals, support plan changes and authorization requests, and determine whether the Patient should continue, be referred, placed on hold, or discharged. Delivered services generate Charges, Claims, invoices, and Payments according to the applicable payer and contract.

## Pattern variants

### Simple

Use for a single-location cash-pay clinic or prototype.

Core concepts: Patient; Therapist; Appointment; Initial Evaluation; Plan of Care; Therapy Goal; Therapy Visit; Intervention; Home Exercise Program; Invoice; Payment; Discharge Summary.

### Standard

Use as the default for an operational clinic.

Adds: Clinic; Location; Referral; Referring Provider; Intake; Episode of Care; Coverage; Eligibility Verification; Authorization; Precaution; Functional Limitation; Clinical Finding; Outcome Measure; Treatment Plan Item; Visit Note; Intervention Delivery; Exercise Prescription; Progress Evaluation; Attendance Event; Charge; Claim; Claim Line; Patient Responsibility; Document; Consent; Audit Event.

### Enterprise

Use for multi-location groups, hospital departments, home health, occupational health, payer contracts, specialized programs, or integrated care networks.

Adds: Organization Network; Department; Provider Credential; Supervision Arrangement; Resource and Equipment Schedule; Waitlist; Care Pathway; Program Enrollment; Multidisciplinary Care Team; Referral Network; Contract; Fee Schedule; Authorization Utilization; Utilization Review; Quality Measure; Patient-Reported Outcome; Clinical Registry; Remote Monitoring; Work Injury Case; Legal Case; Data Sharing Agreement; Terminology Mapping.

## Actors and roles

See [canonical actors and roles](behavior/physical-therapy.md#actors-and-roles).

## Organization, provider, and resource concepts

### Physical Therapy Clinic

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Clinic Location

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Therapy Provider

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Provider Assignment

Canonical concept: [Assignment](../model/subjects/work/work-effort/assignment.md) (as Provider Assignment).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Therapy Resource

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Access, referral, and intake

### Referral

Canonical concept: [Referral](../model/subjects/care/care-plan/referral.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Patient Intake

Canonical concept: [Application](../model/subjects/request/request/application.md) (as Patient Intake).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Intake Response

Canonical concept: [Application Answer](../model/subjects/request/request/application-answer.md) (as Intake Response).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Eligibility Verification

Canonical concept: [Eligibility Verification](../model/subjects/coverage/coverage/eligibility-verification.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Therapy Authorization

Canonical concept: [Authorization](../model/subjects/case/decision/authorization.md) (as Therapy Authorization).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Attendance Event

Canonical concept: [Attendance Event](../model/subjects/scheduling/appointment/attendance-event.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Episode and care context

### Therapy Episode

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Presenting Concern

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Precaution or Contraindication

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Functional Limitation

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Evaluation and clinical evidence

### Therapy Evaluation

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Subjective History

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Clinical Finding

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Outcome Measure Definition

Canonical concept: [Measure](../model/subjects/measurement/measure/measure.md) (as Outcome Measure Definition).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Outcome Measure Result

Canonical concept: [Measurement](../model/subjects/measurement/measure/measurement.md) (as Outcome Measure Result).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Therapy Assessment

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Plan of care and goals

### Plan of Care

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Therapy Goal

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Goal Progress

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Treatment Plan Item

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Plan Approval or Certification

Canonical concept: [Approval](../model/subjects/case/decision/approval.md) (as Plan Approval or Certification).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Scheduling and visit concepts

### Provider Schedule

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Therapy Appointment

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Therapy Visit

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Visit Note

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Intervention and exercise concepts

### Intervention Definition

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Intervention Delivery

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Exercise Definition

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Exercise Prescription

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Home Exercise Program

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Home Program Activity

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Patient Education

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Progress, safety, and discharge

### Progress Evaluation

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Adverse Event

Canonical concept: [Incident](../model/subjects/case/case/incident.md) (as Adverse Event).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Clinical Communication

Canonical concept: [Communication](../model/subjects/document/evidence/communication.md) (as Clinical Communication).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Discharge

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Discharge Summary

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Billing and payment

### Coverage

Canonical concept: [Coverage](../model/subjects/coverage/coverage/coverage.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Therapy Charge

Canonical concept: [Charge](../model/subjects/finance/invoice/charge.md) (as Therapy Charge).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Claim

Canonical concept: [Claim](../model/subjects/coverage/coverage/claim.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Claim Line

Canonical concept: [Claim Line](../model/subjects/coverage/coverage/claim-line.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Adjudication

Canonical concept: [Claim Assessment](../model/subjects/coverage/coverage/claim-assessment.md) (as Adjudication).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Patient Invoice

Canonical concept: [Invoice](../model/subjects/finance/invoice/invoice.md) (as Patient Invoice).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Payment

Canonical concept: [Payment](../model/subjects/finance/payment/payment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Relationship model

See [canonical relationship model](behavior/physical-therapy.md#relationship-model).

## Lifecycle models

See [canonical lifecycle models](behavior/physical-therapy.md#lifecycle-models).

## Business events

See [canonical business events](behavior/physical-therapy.md#business-events).

## Baseline business and integrity rules

See [canonical baseline business and integrity rules](behavior/physical-therapy.md#baseline-business-and-integrity-rules).

## AI modeling questions

1. Is the clinic outpatient, hospital-based, home health, sports, pediatric, geriatric, neurological, orthopedic, pelvic health, occupational health, virtual, or multidisciplinary?
2. Which jurisdictions govern direct access, referral, scope, delegation, supervision, documentation, privacy, and retention?
3. Which Provider types and credentials may evaluate, treat, supervise, sign, or bill?
4. How are Referrals received, validated, accepted, expired, renewed, and linked to Episodes?
5. What intake forms, consent, medical history, red-flag screening, and accessibility information are required?
6. Which payer, employer, case-management, public-funding, or cash-pay arrangements are supported?
7. How are eligibility, visit limits, prior authorization, unit authorization, certification, and utilization tracked?
8. Which evaluation templates, body regions, tests, measures, and clinical classifications are required?
9. Which standardized outcome measures are used, and how are instrument versions and licenses governed?
10. How are Plans of Care authored, approved, certified, revised, and related to effective Visits?
11. How are Therapy Goals measured, reviewed, met, deferred, or discontinued?
12. Which intervention categories, service codes, timed-unit rules, modalities, supplies, and supervision rules apply?
13. How are Home Exercise Programs created, delivered, translated, acknowledged, and monitored?
14. Which attendance, cancellation, lateness, and no-show policies apply?
15. What conditions cause treatment to pause, require Provider contact, trigger emergency action, or cause referral elsewhere?
16. How are progress reports, recertification, requests for additional visits, and discharge decisions handled?
17. Which claims, invoices, remittances, denials, appeals, Patient balances, and payment workflows are needed?
18. Which clinical, functional, operational, financial, safety, satisfaction, and quality outcomes must be measured?
19. Which external systems are authoritative for identity, referrals, schedules, coverage, documentation, exercise content, claims, and payment?
20. What evidence must remain immutable for clinical, legal, payer, professional, and audit purposes?

## Candidate capabilities and use cases

| Capability | Candidate actor-goal use cases |
|---|---|
| Patient Access | Register Patient; Complete Intake; Capture Consent; Verify Coverage; Record Financial Responsibility |
| Referral Management | Receive Referral; Review Referral; Request Missing Information; Accept or Decline Referral |
| Scheduling | Find Availability; Book Appointment; Confirm Appointment; Check In Patient; Reschedule or Cancel |
| Evaluation | Conduct Initial Evaluation; Record Findings; Score Outcome Measure; Identify Precautions; Establish Prognosis |
| Plan of Care | Create Plan of Care; Define Therapy Goals; Obtain Certification; Revise Plan of Care |
| Treatment | Start Therapy Visit; Deliver Intervention; Record Patient Response; Provide Education; Complete Visit Note |
| Home Program | Create Home Exercise Program; Issue Program; Revise Prescription; Record Patient Adherence |
| Progress Management | Conduct Progress Evaluation; Assess Goal Progress; Request Additional Authorization; Place Episode on Hold |
| Safety | Record Adverse Event; Escalate Red Flag; Communicate with Referring Provider |
| Discharge | Evaluate for Discharge; Complete Discharge Summary; Issue Follow-up Plan; Reopen Episode |
| Revenue Cycle | Create Charges; Validate Units; Submit Claim; Resolve Denial; Invoice Patient; Allocate Payment |
| Governance | Amend Signed Note; Audit Record Access; Review Provider Credentials; Publish Quality Measures |

## MDE modeling guidance

- Specialize the Health Care pattern; do not fork duplicate definitions of Patient, Provider, Organization, Encounter, Consent, Coverage, Claim, or Payment without a material therapy-specific difference.
- Keep Referral, Appointment, Therapy Visit, Episode, Evaluation, Plan of Care, and Authorization distinct.
- Keep planned Treatment Plan Items separate from Intervention Deliveries actually performed.
- Keep reusable Exercise Definitions separate from Patient-specific Exercise Prescriptions and versioned Home Exercise Programs.
- Keep Clinical Findings, Outcome Measure Results, Therapy Assessments, and Goal Progress separate so their provenance and meaning remain clear.
- Attach business rules to authoritative entity operations such as activate plan, start visit, deliver intervention, sign note, calculate units, submit claim, and discharge episode.
- Let use cases orchestrate actor goals and branching; do not hide clinical or billing rules inside use-case prose.
- Model jurisdiction, payer, contract, credential, coding, and terminology differences as governed configurations or effective-dated rules.
- Treat imported referrals, histories, coverage responses, and external clinical documents as sourced assertions until verified.
- Apply data minimization and do not collect sensitive information merely because a generic health record can store it.

## Anti-patterns

### Appointment Equals Treatment

An Appointment reserves time. A Therapy Visit records actual care, and Intervention Delivery records what occurred.

### Evaluation Equals Plan of Care

The Evaluation supplies evidence and clinical reasoning. The Plan of Care is the governed, effective-dated plan that follows from it.

### Treatment Plan Equals Billing Codes

A Plan describes clinical intent and goals. Billing codes classify documented services after delivery under payer rules.

### One Free-Text Visit Note

A narrative alone cannot reliably support provenance, goal tracking, outcome comparison, intervention dosage, unit calculation, authorization consumption, or analytics.

### Current Plan Reconstructs Historical Care

Plan revisions change goals and interventions. Each Visit must retain the Plan version and rules effective when care occurred.

### Exercise Equals Home Program

An Exercise is reusable content. A Prescription is Patient-specific, and a Home Exercise Program is a versioned collection with instructions and effective dates.

### Goal Status Without Evidence

“Met” or “not met” must link to measurements, observations, Patient reports, clinical reasoning, and assessment date.

### Authorization Equals Clinical Approval

Payer permission does not establish clinical appropriateness, Patient consent, valid referral, or Provider scope.

### Scheduled Minutes Equal Billable Units

Scheduled duration, attended time, treatment time, timed minutes, untimed services, and billable units are different measures.

### Patient Equals Portal User

A Patient may have no account, and a caregiver or representative may use the portal under scoped authority.

## Physical mapping examples

| Logical name | Example physical name |
|---|---|
| Therapy Episode | `therapy_episode` |
| Patient Intake | `patient_intake` |
| Eligibility Verification | `eligibility_verification` |
| Therapy Authorization | `therapy_authorization` |
| Therapy Evaluation | `therapy_evaluation` |
| Clinical Finding | `clinical_finding` |
| Outcome Measure Result | `outcome_measure_result` |
| Plan of Care | `plan_of_care` |
| Therapy Goal | `therapy_goal` |
| Therapy Visit | `therapy_visit` |
| Intervention Delivery | `intervention_delivery` |
| Home Exercise Program | `home_exercise_program` |
| Exercise Prescription | `exercise_prescription` |
| Progress Evaluation | `progress_evaluation` |
| Discharge Summary | `discharge_summary` |

Logical names remain authoritative. Stack, jurisdiction, payer, coding, and clinic rules generate physical names only after the logical model is accepted.

## Future behavioral expansion

Future behavior belongs in the canonical domain and references existing entities. Application-specific UI, architecture, and executable tests belong in the consuming application.

Expand the existing canonical domain with reusable capabilities, roles, rules, use cases, and workflows; reference its existing entities. The first end-to-end vertical slice should be:

**Receive Referral → Complete Intake → Conduct Initial Evaluation → Activate Plan of Care → Book and Complete Therapy Visit → Record Intervention Delivery → Assess Goal Progress → Create Charge → Discharge Episode**

Recommended verification scenarios include direct access without referral, authorization required before treatment, authorization exhausted, Patient no-show, Therapist unavailable, red flag identified, Plan revision after reassessment, delegated treatment under supervision, timed-unit validation, signed-note amendment, claim denial, goals met discharge, and administrative discharge for non-attendance.

## Canonical model bindings

This pattern selects and connects concepts in the [coherent model](../model/README.md). The sections below are views of those definitions. Follow the canonical business definitions for relationships, roles, lifecycles, events, and rules; use the variant guidance here to select the relevant detail.

| Source term | Canonical concept | ABE |
|---|---|---|
| Physical Therapy Clinic | [Physical Therapy Clinic](#concepts-applications-typically-add) | [Physical Therapy Clinic](#) |
| Clinic Location | [Clinic Location](#concepts-applications-typically-add) | [Physical Therapy Clinic](#) |
| Therapy Provider | [Therapy Provider](#concepts-applications-typically-add) | [Physical Therapy Clinic](#) |
| Provider Assignment | [Provider Assignment](../model/subjects/work/work-effort/assignment.md) | [Physical Therapy Clinic](#) |
| Therapy Resource | [Therapy Resource](#concepts-applications-typically-add) | [Physical Therapy Clinic](#) |
| Referral | [Referral](../model/subjects/care/care-plan/referral.md) | [Schedule](../model/subjects/scheduling/appointment/README.md) |
| Patient Intake | [Patient Intake](../model/subjects/request/request/application.md) | [Patient Intake](../model/subjects/request/request/README.md) |
| Intake Response | [Intake Response](../model/subjects/request/request/application-answer.md) | [Patient Intake](../model/subjects/request/request/README.md) |
| Eligibility Verification | [Eligibility Verification](../model/subjects/coverage/coverage/eligibility-verification.md) | [Patient Intake](../model/subjects/request/request/README.md) |
| Therapy Authorization | [Therapy Authorization](../model/subjects/case/decision/authorization.md) | [Patient Intake](../model/subjects/request/request/README.md) |
| Attendance Event | [Attendance Event](../model/subjects/scheduling/appointment/attendance-event.md) | [Patient Intake](../model/subjects/request/request/README.md) |
| Therapy Episode | [Therapy Episode](#concepts-applications-typically-add) | [Therapy Episode](#) |
| Presenting Concern | [Presenting Concern](#concepts-applications-typically-add) | [Therapy Episode](#) |
| Precaution or Contraindication | [Precaution or Contraindication](#concepts-applications-typically-add) | [Therapy Episode](#) |
| Functional Limitation | [Functional Limitation](#concepts-applications-typically-add) | [Therapy Episode](#) |
| Therapy Evaluation | [Therapy Evaluation](#concepts-applications-typically-add) | [Therapy Evaluation](#) |
| Subjective History | [Subjective History](#concepts-applications-typically-add) | [Therapy Evaluation](#) |
| Clinical Finding | [Clinical Finding](#concepts-applications-typically-add) | [Therapy Evaluation](#) |
| Outcome Measure Definition | [Outcome Measure Definition](../model/subjects/measurement/measure/measure.md) | [Therapy Evaluation](#) |
| Outcome Measure Result | [Outcome Measure Result](../model/subjects/measurement/measure/measurement.md) | [Therapy Evaluation](#) |
| Therapy Assessment | [Therapy Assessment](#concepts-applications-typically-add) | [Therapy Evaluation](#) |
| Plan of Care | [Plan of Care](#concepts-applications-typically-add) | [Plan of Care](#) |
| Therapy Goal | [Therapy Goal](#concepts-applications-typically-add) | [Plan of Care](#) |
| Goal Progress | [Goal Progress](#concepts-applications-typically-add) | [Plan of Care](#) |
| Treatment Plan Item | [Treatment Plan Item](#concepts-applications-typically-add) | [Plan of Care](#) |
| Plan Approval or Certification | [Plan Approval or Certification](../model/subjects/case/decision/approval.md) | [Plan of Care](#) |
| Provider Schedule | [Provider Schedule](#concepts-applications-typically-add) | [Provider Schedule](#) |
| Therapy Appointment | [Therapy Appointment](#concepts-applications-typically-add) | [Provider Schedule](#) |
| Therapy Visit | [Therapy Visit](#concepts-applications-typically-add) | [Provider Schedule](#) |
| Visit Note | [Visit Note](#concepts-applications-typically-add) | [Provider Schedule](#) |
| Intervention Definition | [Intervention Definition](#concepts-applications-typically-add) | [Intervention Definition](#) |
| Intervention Delivery | [Intervention Delivery](#concepts-applications-typically-add) | [Intervention Definition](#) |
| Exercise Definition | [Exercise Definition](#concepts-applications-typically-add) | [Intervention Definition](#) |
| Exercise Prescription | [Exercise Prescription](#concepts-applications-typically-add) | [Intervention Definition](#) |
| Home Exercise Program | [Home Exercise Program](#concepts-applications-typically-add) | [Intervention Definition](#) |
| Home Program Activity | [Home Program Activity](#concepts-applications-typically-add) | [Intervention Definition](#) |
| Patient Education | [Patient Education](#concepts-applications-typically-add) | [Intervention Definition](#) |
| Progress Evaluation | [Progress Evaluation](#concepts-applications-typically-add) | [Progress Evaluation](#) |
| Adverse Event | [Adverse Event](../model/subjects/case/case/incident.md) | [Progress Evaluation](#) |
| Clinical Communication | [Clinical Communication](../model/subjects/document/evidence/communication.md) | [Progress Evaluation](#) |
| Discharge | [Discharge](#concepts-applications-typically-add) | [Progress Evaluation](#) |
| Discharge Summary | [Discharge Summary](#concepts-applications-typically-add) | [Progress Evaluation](#) |
| Coverage | [Coverage](../model/subjects/coverage/coverage/coverage.md) | [Coverage](../model/subjects/coverage/coverage/README.md) |
| Therapy Charge | [Therapy Charge](../model/subjects/finance/invoice/charge.md) | [Therapy Charge](../model/subjects/finance/invoice/README.md) |
| Claim | [Claim](../model/subjects/coverage/coverage/claim.md) | [Coverage](../model/subjects/coverage/coverage/README.md) |
| Claim Line | [Claim Line](../model/subjects/coverage/coverage/claim-line.md) | [Coverage](../model/subjects/coverage/coverage/README.md) |
| Adjudication | [Adjudication](../model/subjects/coverage/coverage/claim-assessment.md) | [Coverage](../model/subjects/coverage/coverage/README.md) |
| Patient Invoice | [Patient Invoice](../model/subjects/finance/invoice/invoice.md) | [Therapy Charge](../model/subjects/finance/invoice/README.md) |
| Payment | [Payment](../model/subjects/finance/payment/payment.md) | [Invoice](../model/subjects/finance/invoice/README.md) |

## Concepts applications typically add

Not in the canonical model: specific to this kind of business, or nothing an application could not define itself. An application adds them in its own Specs, usually specializing the canonical concept named.

- **Physical Therapy Clinic**: A Health Care Organization or organizational unit responsible for providing physical therapy services.
- **Clinic Location**: A physical, mobile, home-care, or virtual setting in which clinic services are organized or delivered.
- **Therapy Provider**: A Practitioner acting as a Physical Therapist, Physical Therapist Assistant, aide, or other permitted care role.
- **Therapy Resource**: A room, treatment area, device, equipment item, pool, exercise station, or other schedulable resource.
- **Therapy Episode**: An Episode of Care grouping related physical therapy evaluation, plans, visits, outcomes, and discharge activity for a Patient concern.
- **Presenting Concern**: The Patient's reported reason for seeking therapy and its effect on function and participation.
- **Precaution or Contraindication**: A condition or risk affecting evaluation, treatment choice, intensity, supervision, or need for referral.
- **Functional Limitation**: A limitation in activity or participation relevant to the Patient's daily life and therapy goals.
- **Therapy Evaluation**: A structured clinical assessment performed to determine therapy needs, diagnosis or classification, prognosis, goals, and Plan of Care.
- **Subjective History**: Patient- or representative-reported symptoms, function, history, goals, and contextual factors.
- **Clinical Finding**: A measured, observed, tested, or asserted fact recorded during evaluation or treatment.
- **Therapy Assessment**: The Therapist's reasoned synthesis of history, findings, function, response, prognosis, and need for skilled care.
- **Plan of Care**: An effective-dated clinical plan governing the intended physical therapy services for an Episode.
- **Therapy Goal**: A measurable desired improvement in impairment, activity, participation, self-management, or risk.
- **Goal Progress**: An evidence-based assessment of progress toward a Therapy Goal.
- **Treatment Plan Item**: A planned category of intervention, education, monitoring, or coordination within a Plan of Care.
- **Provider Schedule**: Planned availability of a Provider, Location, or Therapy Resource.
- **Therapy Appointment**: A planned allocation of time, Provider, Patient, Location, and resources.
- **Therapy Visit**: The actual bounded care interaction during which physical therapy is evaluated, delivered, discussed, or documented.
- **Visit Note**: A versioned clinical document describing the Visit.
- **Intervention Definition**: A governed type of therapeutic service or activity.
- **Intervention Delivery**: Evidence that an Intervention was actually performed during a Visit.
- **Exercise Definition**: A reusable definition of a movement or activity that may be prescribed or performed.
- **Exercise Prescription**: A Patient-specific exercise instruction within a clinic or Home Exercise Program.
- **Home Exercise Program**: A versioned set of Patient instructions, exercises, education, precautions, and progression guidance intended outside supervised Visits.
- **Home Program Activity**: A record of Patient-reported or remotely observed home-program performance.
- **Patient Education**: Education delivered to the Patient or caregiver concerning condition, safety, exercises, self-management, equipment, or prevention.
- **Progress Evaluation**: A periodic comparison of Patient status with baseline, prior results, Plan of Care, and Therapy Goals.
- **Discharge**: The clinical and administrative conclusion or transition of a Therapy Episode.
- **Discharge Summary**: A finalized clinical document summarizing the Episode, services, outcomes, remaining limitations, home plan, precautions, and follow-up.
