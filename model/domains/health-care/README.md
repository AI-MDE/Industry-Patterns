# Health Care

Support safe, coordinated, traceable health-care administration and delivery from Patient access through clinical service and financial resolution.

## Scope and boundaries

Included: Patient administration; scheduling; Encounters; longitudinal coordination; clinical evidence; Service Requests and Delivery; consent; privacy; audit; Coverage; Authorization; Claims; adjudication.

Excluded until specialized: detailed medication administration; laboratory and imaging subsystems; pharmacy dispensing; inpatient bed operations; public-health surveillance; research operations; jurisdiction-specific coding, messaging, privacy, and reimbursement profiles.

These are reusable business requirements. Applications select and specialize them, including jurisdiction-specific policy, and own their architecture, technology, physical design, integrations, and deployment.

## ABEs

- [Patient](patient/README.md)
- [Health Care Organization](health-care-organization/README.md)
- [Schedule](schedule/README.md)
- [Encounter](encounter/README.md)
- [Clinical Note](clinical-note/README.md)
- [Service Request](service-request/README.md)
- [Health Care Service](health-care-service/README.md)
- [Consent](consent/README.md)
- [Coverage](coverage/README.md)

## Business definitions

See [relationships, roles, and business behavior](behavior.md).

## Business boundaries

- Separate application-user identity from Patient, Provider, Related Person, and other business roles.
- Treat clinical records as versioned evidence with provenance.
- Evaluate consent, authorization, role, care relationship, purpose, and minimum-necessary scope independently.
- Keep Appointment, Encounter, Episode, Case, Care Plan, Service Request, and Service Delivery distinct.
- Keep the operational clinical record authoritative; map external interoperability representations at boundaries.
- Audit protected access and privileged operations.

## Requirements

- [Capabilities](capabilities/README.md)
- [Roles](roles/README.md)
- [Rules](rules/README.md)
- [Use cases](use-cases/README.md)
- [Workflows](workflows/README.md)

See the [business diagrams](diagrams.md) and the [Health Care industry guide](../../../industry-patterns/health-care.md) for selection guidance.
