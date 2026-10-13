# Health Care Model Pattern

## Intent

Model organizations that register patients, coordinate providers and facilities, schedule and deliver care, record encounters and clinical evidence, manage care plans and cases, obtain consent and authorization, and support claims and payment.

This is a logical business pattern, not a clinical terminology, interoperability, privacy, or regulatory standard. Implementations should map relevant concepts to applicable standards and jurisdictional requirements.

## Business overview

**Patient Need → Access/Appointment → Encounter → Assessment → Order/Plan → Service Delivery → Outcome → Claim/Payment**

A Patient receives care from one or more Providers at a Facility or through a virtual Channel. An Appointment may schedule an Encounter. During the Encounter, Providers record observations, conditions, diagnoses, procedures, orders, and a plan of care. Services may be authorized, delivered, and evaluated over an Episode or Case. Consent, privacy, provenance, and access controls govern sensitive information. Charges may be assembled into Claims submitted to a Payer and resolved through adjudication and payment.

## Pattern variants

### Simple

Use for a focused clinic or prototype.

Core concepts: Patient; Provider; Facility; Appointment; Encounter; Clinical Note; Service; Invoice; Payment.

### Standard

Use as the default for operational health-care applications.

Adds: Patient Identifier; Related Person; Practitioner Role; Organization; Location; Schedule; Episode of Care; Medical Case; Care Team; Condition; Diagnosis; Observation; Procedure; Service Request; Medication Order; Care Plan; Consent; Coverage; Authorization; Charge; Claim; Claim Line; Adjudication; Document; Audit Event.

### Enterprise

Use for integrated delivery networks, hospitals, insurers, public health, research, multi-jurisdiction operations, or longitudinal records.

Adds: Organization Network; Department; Bed and Capacity Management; Referral; Transfer; Clinical Pathway; Cohort; Registry; Terminology Mapping; Master Patient Index; Provider Directory; Contract; Fee Schedule; Risk Assessment; Utilization Management; Quality Measure; Population Measure; Research Consent; Data Sharing Agreement.

## Actors and roles

See [canonical actors and roles](../model/domains/health-care/behavior.md#actors-and-roles).

## Identity and demographic concepts

### Patient

Canonical concept: [Patient](../model/domains/health-care/patient/patient.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Patient Identifier

Canonical concept: [Patient Identifier](../model/domains/health-care/patient/patient-identifier.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Related Person

Canonical concept: [Related Person](../model/domains/health-care/patient/related-person.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Patient Contact

Canonical concept: [Patient Contact](../model/domains/health-care/patient/patient-contact.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## organization, provider, facility, and location

### Health Care Organization

Canonical concept: [Health Care Organization](../model/domains/health-care/health-care-organization/health-care-organization.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Provider

Canonical concept: [Provider](../model/domains/health-care/health-care-organization/provider.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Practitioner Role

Canonical concept: [Practitioner Role](../model/domains/health-care/health-care-organization/practitioner-role.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Facility

Canonical concept: [Facility](../model/domains/health-care/health-care-organization/facility.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Location

Canonical concept: [Location](../model/domains/health-care/health-care-organization/location.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Access and scheduling concepts

### Schedule

Canonical concept: [Schedule](../model/domains/health-care/schedule/schedule.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Appointment

Canonical concept: [Appointment](../model/domains/health-care/schedule/appointment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Appointment Participant

Canonical concept: [Appointment Participant](../model/domains/health-care/schedule/appointment-participant.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Referral

Canonical concept: [Referral](../model/domains/health-care/schedule/referral.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Care context

### Encounter

Canonical concept: [Encounter](../model/domains/health-care/encounter/encounter.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Episode of Care

Canonical concept: [Episode of Care](../model/domains/health-care/encounter/episode-of-care.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Medical Case

Canonical concept: [Medical Case](../model/domains/health-care/encounter/medical-case.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Care Team

Canonical concept: [Care Team](../model/domains/health-care/encounter/care-team.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Care Team Member

Canonical concept: [Care Team Member](../model/domains/health-care/encounter/care-team-member.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Clinical evidence and assessment

### Clinical Note

Canonical concept: [Clinical Note](../model/domains/health-care/clinical-note/clinical-note.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Observation

Canonical concept: [Observation](../model/domains/health-care/clinical-note/observation.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Condition

Canonical concept: [Condition](../model/domains/health-care/clinical-note/condition.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Diagnosis

Canonical concept: [Diagnosis](../model/domains/health-care/clinical-note/diagnosis.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Procedure

Canonical concept: [Procedure](../model/domains/health-care/clinical-note/procedure.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Specimen

Canonical concept: [Specimen](../model/domains/health-care/clinical-note/specimen.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Requests, orders, and care planning

### Service Request

Canonical concept: [Service Request](../model/domains/health-care/service-request/service-request.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Medication Order

Canonical concept: [Medication Order](../model/domains/health-care/service-request/medication-order.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Care Plan

Canonical concept: [Care Plan](../model/domains/health-care/service-request/care-plan.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Care Goal

Canonical concept: [Care Goal](../model/domains/health-care/service-request/care-goal.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Planned Activity

Canonical concept: [Planned Activity](../model/domains/health-care/service-request/planned-activity.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Service delivery

### Health Care Service

Canonical concept: [Health Care Service](../model/domains/health-care/health-care-service/health-care-service.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Service Delivery

Canonical concept: [Service Delivery](../model/domains/health-care/health-care-service/service-delivery.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Authorization

Canonical concept: [Authorization](../model/domains/health-care/health-care-service/authorization.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Consent, privacy, and provenance

### Consent

Canonical concept: [Consent](../model/domains/health-care/consent/consent.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Access Restriction

Canonical concept: [Access Restriction](../model/domains/health-care/consent/access-restriction.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Provenance

Canonical concept: [Provenance](../model/domains/health-care/consent/provenance.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Audit Event

Canonical concept: [Audit Event](../model/domains/health-care/consent/audit-event.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Coverage, claim, and payment

### Coverage

Canonical concept: [Coverage](../model/domains/health-care/coverage/coverage.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Guarantor

Canonical concept: [Guarantor](../model/domains/health-care/coverage/guarantor.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Charge

Canonical concept: [Charge](../model/domains/health-care/coverage/charge.md).

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

### Payment

Canonical concept: [Payment](../model/domains/finance/invoice/payment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Relationship model

See [canonical relationship model](../model/domains/health-care/behavior.md#relationship-model).

## Lifecycle models

See [canonical lifecycle models](../model/domains/health-care/behavior.md#lifecycle-models).

## Business events

See [canonical business events](../model/domains/health-care/behavior.md#business-events).

## Baseline business and integrity rules

See [canonical baseline business and integrity rules](../model/domains/health-care/behavior.md#baseline-business-and-integrity-rules).

## Interoperability and terminology guidance

- Keep the logical MDE model independent of transport formats.
- Map concepts to applicable interoperability resources only at an integration boundary.
- Store terminology system, code, display, version, and mapping provenance when coded clinical meaning matters.
- Do not silently translate between terminology systems without retaining the source concept and mapping evidence.
- Treat externally received records as assertions with source and provenance, not automatically as locally verified truth.
- Use jurisdiction-specific profiles for required identifiers, consent, privacy, claims, and reporting.

## AI modeling questions

1. Is the scope clinic, hospital, laboratory, pharmacy, home care, insurer, public health, research, or a combination?
2. Which jurisdictions, privacy obligations, professional regulations, and data residency rules apply?
3. Which Party roles exist for Patients, guardians, Providers, guarantors, and Payers?
4. How is Patient identity established, matched, merged, corrected, and audited?
5. Which care settings and Encounter types are supported?
6. Are Episodes, Cases, and Care Plans distinct in this organization?
7. Which services require clinical orders, consent, organizational approval, or payer authorization?
8. Which clinical observations, conditions, diagnoses, procedures, medications, and documents are in scope?
9. Which terminology systems and interoperability profiles are required?
10. What information may each actor access, for which purpose, and under which consent or policy?
11. Does billing use direct invoices, insurance Claims, public funding, capitation, bundled payment, or several methods?
12. Which quality, safety, operational, financial, and population outcomes must be measured?
13. What must be retained as immutable legal or clinical evidence?
14. Which external systems are authoritative for identity, scheduling, clinical data, pharmacy, laboratory, imaging, claims, or payment?

## MDE modeling guidance

- Begin with Party and Party Role; do not duplicate Person as Patient, Provider, User, and Guarantor.
- Keep Appointment, Encounter, Episode, Case, and Care Plan distinct because they answer different questions.
- Separate clinical fact, Provider assertion, longitudinal condition, and billing classification.
- Put clinical and administrative rules on the operations they govern; use cases orchestrate actions and outcomes.
- Treat provenance, consent, authorization, access control, and audit as first-class knowledge.
- Keep operational concepts canonical and integration representations mapped and versioned.
- Apply data minimization: include sensitive attributes only when the application's purpose requires them.

## Anti-patterns

### Patient Equals Person Equals User

Patient is a business role. Some Patients have no application account, and guardians, Providers, or proxy users may act in the system.

### Appointment Equals Encounter

An Appointment is a plan; an Encounter is actual care interaction. Either may exist without the other.

### One Giant Medical Record

Combining observations, diagnoses, notes, orders, procedures, and documents destroys their distinct provenance, lifecycle, authorship, and meaning.

### Authorization Equals Consent

Payer authorization, clinical authorization, organizational approval, and Patient consent answer different questions.

### Claim as the Clinical Truth

A Claim is a financial request and may simplify or classify clinical activity for payment. It is not the authoritative clinical record.

### Mutable Final Notes

Overwriting finalized clinical evidence removes history required for safety, trust, and audit.

## Physical mapping examples

| Logical name | Example physical name |
|---|---|
| Patient Identifier | `patient_identifier` |
| Practitioner Role | `practitioner_role` |
| Episode of Care | `episode_of_care` |
| Medical Case | `medical_case` |
| Care Team Member | `care_team_member` |
| Service Request | `service_request` |
| Service Delivery | `service_delivery` |
| Claim Line | `claim_line` |
| Access Restriction | `access_restriction` |
| Audit Event | `audit_event` |

Logical names remain authoritative. Stack and jurisdiction rules generate physical naming only after the logical model is accepted.

## Behavioral coverage

The [Health Care domain](../model/domains/health-care/README.md) owns the detailed [capabilities](../model/domains/health-care/capabilities/README.md), [use cases](../model/domains/health-care/use-cases/README.md), [workflows](../model/domains/health-care/workflows/README.md), [roles](../model/domains/health-care/roles/README.md), and [rules](../model/domains/health-care/rules/README.md). Select the relevant behavior for the application's scope; do not copy entity definitions into another reusable layer.

Detailed medication administration, laboratory/imaging, pharmacy, inpatient operations, and jurisdiction-specific profiles remain outside current coverage. Application UI, architecture, and executable scenarios belong to the consuming application.

## Canonical model bindings

This pattern selects and connects concepts in the [coherent model](../model/README.md). The sections below are views of those definitions. Follow the canonical business definitions for relationships, roles, lifecycles, events, and rules; use the variant guidance here to select the relevant detail.

| Source term | Canonical concept | ABE |
|---|---|---|
| Patient | [Patient](../model/domains/health-care/patient/patient.md) | [Patient](../model/domains/health-care/patient/README.md) |
| Patient Identifier | [Patient Identifier](../model/domains/health-care/patient/patient-identifier.md) | [Patient](../model/domains/health-care/patient/README.md) |
| Related Person | [Related Person](../model/domains/health-care/patient/related-person.md) | [Patient](../model/domains/health-care/patient/README.md) |
| Patient Contact | [Patient Contact](../model/domains/health-care/patient/patient-contact.md) | [Patient](../model/domains/health-care/patient/README.md) |
| Health Care Organization | [Health Care Organization](../model/domains/health-care/health-care-organization/health-care-organization.md) | [Health Care Organization](../model/domains/health-care/health-care-organization/README.md) |
| Provider | [Provider](../model/domains/health-care/health-care-organization/provider.md) | [Health Care Organization](../model/domains/health-care/health-care-organization/README.md) |
| Practitioner Role | [Practitioner Role](../model/domains/health-care/health-care-organization/practitioner-role.md) | [Health Care Organization](../model/domains/health-care/health-care-organization/README.md) |
| Facility | [Facility](../model/domains/health-care/health-care-organization/facility.md) | [Health Care Organization](../model/domains/health-care/health-care-organization/README.md) |
| Location | [Location](../model/domains/health-care/health-care-organization/location.md) | [Health Care Organization](../model/domains/health-care/health-care-organization/README.md) |
| Schedule | [Schedule](../model/domains/health-care/schedule/schedule.md) | [Schedule](../model/domains/health-care/schedule/README.md) |
| Appointment | [Appointment](../model/domains/health-care/schedule/appointment.md) | [Schedule](../model/domains/health-care/schedule/README.md) |
| Appointment Participant | [Appointment Participant](../model/domains/health-care/schedule/appointment-participant.md) | [Schedule](../model/domains/health-care/schedule/README.md) |
| Referral | [Referral](../model/domains/health-care/schedule/referral.md) | [Schedule](../model/domains/health-care/schedule/README.md) |
| Encounter | [Encounter](../model/domains/health-care/encounter/encounter.md) | [Encounter](../model/domains/health-care/encounter/README.md) |
| Episode of Care | [Episode of Care](../model/domains/health-care/encounter/episode-of-care.md) | [Encounter](../model/domains/health-care/encounter/README.md) |
| Medical Case | [Medical Case](../model/domains/health-care/encounter/medical-case.md) | [Encounter](../model/domains/health-care/encounter/README.md) |
| Care Team | [Care Team](../model/domains/health-care/encounter/care-team.md) | [Encounter](../model/domains/health-care/encounter/README.md) |
| Care Team Member | [Care Team Member](../model/domains/health-care/encounter/care-team-member.md) | [Encounter](../model/domains/health-care/encounter/README.md) |
| Clinical Note | [Clinical Note](../model/domains/health-care/clinical-note/clinical-note.md) | [Clinical Note](../model/domains/health-care/clinical-note/README.md) |
| Observation | [Observation](../model/domains/health-care/clinical-note/observation.md) | [Clinical Note](../model/domains/health-care/clinical-note/README.md) |
| Condition | [Condition](../model/domains/health-care/clinical-note/condition.md) | [Clinical Note](../model/domains/health-care/clinical-note/README.md) |
| Diagnosis | [Diagnosis](../model/domains/health-care/clinical-note/diagnosis.md) | [Clinical Note](../model/domains/health-care/clinical-note/README.md) |
| Procedure | [Procedure](../model/domains/health-care/clinical-note/procedure.md) | [Clinical Note](../model/domains/health-care/clinical-note/README.md) |
| Specimen | [Specimen](../model/domains/health-care/clinical-note/specimen.md) | [Clinical Note](../model/domains/health-care/clinical-note/README.md) |
| Service Request | [Service Request](../model/domains/health-care/service-request/service-request.md) | [Service Request](../model/domains/health-care/service-request/README.md) |
| Medication Order | [Medication Order](../model/domains/health-care/service-request/medication-order.md) | [Service Request](../model/domains/health-care/service-request/README.md) |
| Care Plan | [Care Plan](../model/domains/health-care/service-request/care-plan.md) | [Service Request](../model/domains/health-care/service-request/README.md) |
| Care Goal | [Care Goal](../model/domains/health-care/service-request/care-goal.md) | [Service Request](../model/domains/health-care/service-request/README.md) |
| Planned Activity | [Planned Activity](../model/domains/health-care/service-request/planned-activity.md) | [Service Request](../model/domains/health-care/service-request/README.md) |
| Health Care Service | [Health Care Service](../model/domains/health-care/health-care-service/health-care-service.md) | [Health Care Service](../model/domains/health-care/health-care-service/README.md) |
| Service Delivery | [Service Delivery](../model/domains/health-care/health-care-service/service-delivery.md) | [Health Care Service](../model/domains/health-care/health-care-service/README.md) |
| Authorization | [Authorization](../model/domains/health-care/health-care-service/authorization.md) | [Health Care Service](../model/domains/health-care/health-care-service/README.md) |
| Consent | [Consent](../model/domains/health-care/consent/consent.md) | [Consent](../model/domains/health-care/consent/README.md) |
| Access Restriction | [Access Restriction](../model/domains/health-care/consent/access-restriction.md) | [Consent](../model/domains/health-care/consent/README.md) |
| Provenance | [Provenance](../model/domains/health-care/consent/provenance.md) | [Consent](../model/domains/health-care/consent/README.md) |
| Audit Event | [Audit Event](../model/domains/health-care/consent/audit-event.md) | [Consent](../model/domains/health-care/consent/README.md) |
| Coverage | [Coverage](../model/domains/health-care/coverage/coverage.md) | [Coverage](../model/domains/health-care/coverage/README.md) |
| Guarantor | [Guarantor](../model/domains/health-care/coverage/guarantor.md) | [Coverage](../model/domains/health-care/coverage/README.md) |
| Charge | [Charge](../model/domains/health-care/coverage/charge.md) | [Coverage](../model/domains/health-care/coverage/README.md) |
| Claim | [Claim](../model/domains/health-care/coverage/claim.md) | [Coverage](../model/domains/health-care/coverage/README.md) |
| Claim Line | [Claim Line](../model/domains/health-care/coverage/claim-line.md) | [Coverage](../model/domains/health-care/coverage/README.md) |
| Adjudication | [Adjudication](../model/domains/health-care/coverage/adjudication.md) | [Coverage](../model/domains/health-care/coverage/README.md) |
| Payment | [Payment](../model/domains/finance/invoice/payment.md) | [Invoice](../model/domains/finance/invoice/README.md) |
