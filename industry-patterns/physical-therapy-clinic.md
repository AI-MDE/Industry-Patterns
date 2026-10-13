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

See [canonical actors and roles](../model/domains/physical-therapy/behavior.md#actors-and-roles).

## Organization, provider, and resource concepts

### Physical Therapy Clinic

Canonical concept: [Physical Therapy Clinic](../model/domains/physical-therapy/physical-therapy-clinic/physical-therapy-clinic.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Clinic Location

Canonical concept: [Clinic Location](../model/domains/physical-therapy/physical-therapy-clinic/clinic-location.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Therapy Provider

Canonical concept: [Therapy Provider](../model/domains/physical-therapy/physical-therapy-clinic/therapy-provider.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Provider Assignment

Canonical concept: [Provider Assignment](../model/domains/physical-therapy/physical-therapy-clinic/provider-assignment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Therapy Resource

Canonical concept: [Therapy Resource](../model/domains/physical-therapy/physical-therapy-clinic/therapy-resource.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Access, referral, and intake

### Referral

Canonical concept: [Referral](../model/domains/health-care/schedule/referral.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Patient Intake

Canonical concept: [Patient Intake](../model/domains/physical-therapy/patient-intake/patient-intake.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Intake Response

Canonical concept: [Intake Response](../model/domains/physical-therapy/patient-intake/intake-response.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Eligibility Verification

Canonical concept: [Eligibility Verification](../model/domains/physical-therapy/patient-intake/eligibility-verification.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Therapy Authorization

Canonical concept: [Therapy Authorization](../model/domains/physical-therapy/patient-intake/therapy-authorization.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Attendance Event

Canonical concept: [Attendance Event](../model/domains/physical-therapy/patient-intake/attendance-event.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Episode and care context

### Therapy Episode

Canonical concept: [Therapy Episode](../model/domains/physical-therapy/therapy-episode/therapy-episode.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Presenting Concern

Canonical concept: [Presenting Concern](../model/domains/physical-therapy/therapy-episode/presenting-concern.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Precaution or Contraindication

Canonical concept: [Precaution or Contraindication](../model/domains/physical-therapy/therapy-episode/precaution-or-contraindication.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Functional Limitation

Canonical concept: [Functional Limitation](../model/domains/physical-therapy/therapy-episode/functional-limitation.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Evaluation and clinical evidence

### Therapy Evaluation

Canonical concept: [Therapy Evaluation](../model/domains/physical-therapy/therapy-evaluation/therapy-evaluation.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Subjective History

Canonical concept: [Subjective History](../model/domains/physical-therapy/therapy-evaluation/subjective-history.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Clinical Finding

Canonical concept: [Clinical Finding](../model/domains/physical-therapy/therapy-evaluation/clinical-finding.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Outcome Measure Definition

Canonical concept: [Outcome Measure Definition](../model/domains/physical-therapy/therapy-evaluation/outcome-measure-definition.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Outcome Measure Result

Canonical concept: [Outcome Measure Result](../model/domains/physical-therapy/therapy-evaluation/outcome-measure-result.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Therapy Assessment

Canonical concept: [Therapy Assessment](../model/domains/physical-therapy/therapy-evaluation/therapy-assessment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Plan of care and goals

### Plan of Care

Canonical concept: [Plan of Care](../model/domains/physical-therapy/plan-of-care/plan-of-care.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Therapy Goal

Canonical concept: [Therapy Goal](../model/domains/physical-therapy/plan-of-care/therapy-goal.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Goal Progress

Canonical concept: [Goal Progress](../model/domains/physical-therapy/plan-of-care/goal-progress.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Treatment Plan Item

Canonical concept: [Treatment Plan Item](../model/domains/physical-therapy/plan-of-care/treatment-plan-item.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Plan Approval or Certification

Canonical concept: [Plan Approval or Certification](../model/domains/physical-therapy/plan-of-care/plan-approval-or-certification.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Scheduling and visit concepts

### Provider Schedule

Canonical concept: [Provider Schedule](../model/domains/physical-therapy/provider-schedule/provider-schedule.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Therapy Appointment

Canonical concept: [Therapy Appointment](../model/domains/physical-therapy/provider-schedule/therapy-appointment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Therapy Visit

Canonical concept: [Therapy Visit](../model/domains/physical-therapy/provider-schedule/therapy-visit.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Visit Note

Canonical concept: [Visit Note](../model/domains/physical-therapy/provider-schedule/visit-note.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Intervention and exercise concepts

### Intervention Definition

Canonical concept: [Intervention Definition](../model/domains/physical-therapy/intervention-definition/intervention-definition.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Intervention Delivery

Canonical concept: [Intervention Delivery](../model/domains/physical-therapy/intervention-definition/intervention-delivery.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Exercise Definition

Canonical concept: [Exercise Definition](../model/domains/physical-therapy/intervention-definition/exercise-definition.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Exercise Prescription

Canonical concept: [Exercise Prescription](../model/domains/physical-therapy/intervention-definition/exercise-prescription.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Home Exercise Program

Canonical concept: [Home Exercise Program](../model/domains/physical-therapy/intervention-definition/home-exercise-program.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Home Program Activity

Canonical concept: [Home Program Activity](../model/domains/physical-therapy/intervention-definition/home-program-activity.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Patient Education

Canonical concept: [Patient Education](../model/domains/physical-therapy/intervention-definition/patient-education.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Progress, safety, and discharge

### Progress Evaluation

Canonical concept: [Progress Evaluation](../model/domains/physical-therapy/progress-evaluation/progress-evaluation.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Adverse Event

Canonical concept: [Adverse Event](../model/domains/physical-therapy/progress-evaluation/adverse-event.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Clinical Communication

Canonical concept: [Clinical Communication](../model/domains/physical-therapy/progress-evaluation/clinical-communication.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Discharge

Canonical concept: [Discharge](../model/domains/physical-therapy/progress-evaluation/discharge.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Discharge Summary

Canonical concept: [Discharge Summary](../model/domains/physical-therapy/progress-evaluation/discharge-summary.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Billing and payment

### Coverage

Canonical concept: [Coverage](../model/domains/health-care/coverage/coverage.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Therapy Charge

Canonical concept: [Therapy Charge](../model/domains/physical-therapy/therapy-charge/therapy-charge.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Claim

Canonical concept: [Claim](../model/domains/health-care/coverage/claim.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Claim Line

Canonical concept: [Claim Line](../model/domains/health-care/coverage/claim-line.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Adjudication

Canonical concept: [Adjudication](../model/domains/health-care/coverage/adjudication.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Patient Invoice

Canonical concept: [Patient Invoice](../model/domains/physical-therapy/therapy-charge/patient-invoice.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Payment

Canonical concept: [Payment](../model/domains/finance/invoice/payment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Relationship model

See [canonical relationship model](../model/domains/physical-therapy/behavior.md#relationship-model).

## Lifecycle models

See [canonical lifecycle models](../model/domains/physical-therapy/behavior.md#lifecycle-models).

## Business events

See [canonical business events](../model/domains/physical-therapy/behavior.md#business-events).

## Baseline business and integrity rules

See [canonical baseline business and integrity rules](../model/domains/physical-therapy/behavior.md#baseline-business-and-integrity-rules).

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
| Physical Therapy Clinic | [Physical Therapy Clinic](../model/domains/physical-therapy/physical-therapy-clinic/physical-therapy-clinic.md) | [Physical Therapy Clinic](../model/domains/physical-therapy/physical-therapy-clinic/README.md) |
| Clinic Location | [Clinic Location](../model/domains/physical-therapy/physical-therapy-clinic/clinic-location.md) | [Physical Therapy Clinic](../model/domains/physical-therapy/physical-therapy-clinic/README.md) |
| Therapy Provider | [Therapy Provider](../model/domains/physical-therapy/physical-therapy-clinic/therapy-provider.md) | [Physical Therapy Clinic](../model/domains/physical-therapy/physical-therapy-clinic/README.md) |
| Provider Assignment | [Provider Assignment](../model/domains/physical-therapy/physical-therapy-clinic/provider-assignment.md) | [Physical Therapy Clinic](../model/domains/physical-therapy/physical-therapy-clinic/README.md) |
| Therapy Resource | [Therapy Resource](../model/domains/physical-therapy/physical-therapy-clinic/therapy-resource.md) | [Physical Therapy Clinic](../model/domains/physical-therapy/physical-therapy-clinic/README.md) |
| Referral | [Referral](../model/domains/health-care/schedule/referral.md) | [Schedule](../model/domains/health-care/schedule/README.md) |
| Patient Intake | [Patient Intake](../model/domains/physical-therapy/patient-intake/patient-intake.md) | [Patient Intake](../model/domains/physical-therapy/patient-intake/README.md) |
| Intake Response | [Intake Response](../model/domains/physical-therapy/patient-intake/intake-response.md) | [Patient Intake](../model/domains/physical-therapy/patient-intake/README.md) |
| Eligibility Verification | [Eligibility Verification](../model/domains/physical-therapy/patient-intake/eligibility-verification.md) | [Patient Intake](../model/domains/physical-therapy/patient-intake/README.md) |
| Therapy Authorization | [Therapy Authorization](../model/domains/physical-therapy/patient-intake/therapy-authorization.md) | [Patient Intake](../model/domains/physical-therapy/patient-intake/README.md) |
| Attendance Event | [Attendance Event](../model/domains/physical-therapy/patient-intake/attendance-event.md) | [Patient Intake](../model/domains/physical-therapy/patient-intake/README.md) |
| Therapy Episode | [Therapy Episode](../model/domains/physical-therapy/therapy-episode/therapy-episode.md) | [Therapy Episode](../model/domains/physical-therapy/therapy-episode/README.md) |
| Presenting Concern | [Presenting Concern](../model/domains/physical-therapy/therapy-episode/presenting-concern.md) | [Therapy Episode](../model/domains/physical-therapy/therapy-episode/README.md) |
| Precaution or Contraindication | [Precaution or Contraindication](../model/domains/physical-therapy/therapy-episode/precaution-or-contraindication.md) | [Therapy Episode](../model/domains/physical-therapy/therapy-episode/README.md) |
| Functional Limitation | [Functional Limitation](../model/domains/physical-therapy/therapy-episode/functional-limitation.md) | [Therapy Episode](../model/domains/physical-therapy/therapy-episode/README.md) |
| Therapy Evaluation | [Therapy Evaluation](../model/domains/physical-therapy/therapy-evaluation/therapy-evaluation.md) | [Therapy Evaluation](../model/domains/physical-therapy/therapy-evaluation/README.md) |
| Subjective History | [Subjective History](../model/domains/physical-therapy/therapy-evaluation/subjective-history.md) | [Therapy Evaluation](../model/domains/physical-therapy/therapy-evaluation/README.md) |
| Clinical Finding | [Clinical Finding](../model/domains/physical-therapy/therapy-evaluation/clinical-finding.md) | [Therapy Evaluation](../model/domains/physical-therapy/therapy-evaluation/README.md) |
| Outcome Measure Definition | [Outcome Measure Definition](../model/domains/physical-therapy/therapy-evaluation/outcome-measure-definition.md) | [Therapy Evaluation](../model/domains/physical-therapy/therapy-evaluation/README.md) |
| Outcome Measure Result | [Outcome Measure Result](../model/domains/physical-therapy/therapy-evaluation/outcome-measure-result.md) | [Therapy Evaluation](../model/domains/physical-therapy/therapy-evaluation/README.md) |
| Therapy Assessment | [Therapy Assessment](../model/domains/physical-therapy/therapy-evaluation/therapy-assessment.md) | [Therapy Evaluation](../model/domains/physical-therapy/therapy-evaluation/README.md) |
| Plan of Care | [Plan of Care](../model/domains/physical-therapy/plan-of-care/plan-of-care.md) | [Plan of Care](../model/domains/physical-therapy/plan-of-care/README.md) |
| Therapy Goal | [Therapy Goal](../model/domains/physical-therapy/plan-of-care/therapy-goal.md) | [Plan of Care](../model/domains/physical-therapy/plan-of-care/README.md) |
| Goal Progress | [Goal Progress](../model/domains/physical-therapy/plan-of-care/goal-progress.md) | [Plan of Care](../model/domains/physical-therapy/plan-of-care/README.md) |
| Treatment Plan Item | [Treatment Plan Item](../model/domains/physical-therapy/plan-of-care/treatment-plan-item.md) | [Plan of Care](../model/domains/physical-therapy/plan-of-care/README.md) |
| Plan Approval or Certification | [Plan Approval or Certification](../model/domains/physical-therapy/plan-of-care/plan-approval-or-certification.md) | [Plan of Care](../model/domains/physical-therapy/plan-of-care/README.md) |
| Provider Schedule | [Provider Schedule](../model/domains/physical-therapy/provider-schedule/provider-schedule.md) | [Provider Schedule](../model/domains/physical-therapy/provider-schedule/README.md) |
| Therapy Appointment | [Therapy Appointment](../model/domains/physical-therapy/provider-schedule/therapy-appointment.md) | [Provider Schedule](../model/domains/physical-therapy/provider-schedule/README.md) |
| Therapy Visit | [Therapy Visit](../model/domains/physical-therapy/provider-schedule/therapy-visit.md) | [Provider Schedule](../model/domains/physical-therapy/provider-schedule/README.md) |
| Visit Note | [Visit Note](../model/domains/physical-therapy/provider-schedule/visit-note.md) | [Provider Schedule](../model/domains/physical-therapy/provider-schedule/README.md) |
| Intervention Definition | [Intervention Definition](../model/domains/physical-therapy/intervention-definition/intervention-definition.md) | [Intervention Definition](../model/domains/physical-therapy/intervention-definition/README.md) |
| Intervention Delivery | [Intervention Delivery](../model/domains/physical-therapy/intervention-definition/intervention-delivery.md) | [Intervention Definition](../model/domains/physical-therapy/intervention-definition/README.md) |
| Exercise Definition | [Exercise Definition](../model/domains/physical-therapy/intervention-definition/exercise-definition.md) | [Intervention Definition](../model/domains/physical-therapy/intervention-definition/README.md) |
| Exercise Prescription | [Exercise Prescription](../model/domains/physical-therapy/intervention-definition/exercise-prescription.md) | [Intervention Definition](../model/domains/physical-therapy/intervention-definition/README.md) |
| Home Exercise Program | [Home Exercise Program](../model/domains/physical-therapy/intervention-definition/home-exercise-program.md) | [Intervention Definition](../model/domains/physical-therapy/intervention-definition/README.md) |
| Home Program Activity | [Home Program Activity](../model/domains/physical-therapy/intervention-definition/home-program-activity.md) | [Intervention Definition](../model/domains/physical-therapy/intervention-definition/README.md) |
| Patient Education | [Patient Education](../model/domains/physical-therapy/intervention-definition/patient-education.md) | [Intervention Definition](../model/domains/physical-therapy/intervention-definition/README.md) |
| Progress Evaluation | [Progress Evaluation](../model/domains/physical-therapy/progress-evaluation/progress-evaluation.md) | [Progress Evaluation](../model/domains/physical-therapy/progress-evaluation/README.md) |
| Adverse Event | [Adverse Event](../model/domains/physical-therapy/progress-evaluation/adverse-event.md) | [Progress Evaluation](../model/domains/physical-therapy/progress-evaluation/README.md) |
| Clinical Communication | [Clinical Communication](../model/domains/physical-therapy/progress-evaluation/clinical-communication.md) | [Progress Evaluation](../model/domains/physical-therapy/progress-evaluation/README.md) |
| Discharge | [Discharge](../model/domains/physical-therapy/progress-evaluation/discharge.md) | [Progress Evaluation](../model/domains/physical-therapy/progress-evaluation/README.md) |
| Discharge Summary | [Discharge Summary](../model/domains/physical-therapy/progress-evaluation/discharge-summary.md) | [Progress Evaluation](../model/domains/physical-therapy/progress-evaluation/README.md) |
| Coverage | [Coverage](../model/domains/health-care/coverage/coverage.md) | [Coverage](../model/domains/health-care/coverage/README.md) |
| Therapy Charge | [Therapy Charge](../model/domains/physical-therapy/therapy-charge/therapy-charge.md) | [Therapy Charge](../model/domains/physical-therapy/therapy-charge/README.md) |
| Claim | [Claim](../model/domains/health-care/coverage/claim.md) | [Coverage](../model/domains/health-care/coverage/README.md) |
| Claim Line | [Claim Line](../model/domains/health-care/coverage/claim-line.md) | [Coverage](../model/domains/health-care/coverage/README.md) |
| Adjudication | [Adjudication](../model/domains/health-care/coverage/adjudication.md) | [Coverage](../model/domains/health-care/coverage/README.md) |
| Patient Invoice | [Patient Invoice](../model/domains/physical-therapy/therapy-charge/patient-invoice.md) | [Therapy Charge](../model/domains/physical-therapy/therapy-charge/README.md) |
| Payment | [Payment](../model/domains/finance/invoice/payment.md) | [Invoice](../model/domains/finance/invoice/README.md) |
