---
type: architecture
title: "Health Care Knowledge Base Architecture"
description: "This reusable knowledge base contains business requirements, not an executable application architecture."
tags: [health-care, industry-pattern, architecture]
---

# Health Care Knowledge Base Architecture

This reusable knowledge base contains business requirements, not an executable application architecture.

It follows the repository metamodel architecture guidance. A consuming application must state its own technology, jurisdiction, security, persistence, integration, deployment, testing, and operational decisions.

## Durable constraints

- Separate application-user identity from Patient, Provider, Related Person, and other business roles.
- Treat clinical records as versioned evidence with provenance.
- Evaluate consent, authorization, role, care relationship, purpose, and minimum-necessary scope independently.
- Keep Appointment, Encounter, Episode, Case, Care Plan, Service Request, and Service Delivery distinct.
- Keep the operational clinical record authoritative; map external interoperability representations at boundaries.
- Audit protected access and privileged operations.

## Default-topic disposition

| Topic | Application-specific disposition |
|---|---|
| API | Not selected in this reusable knowledge base. |
| Persistence | Logical entities only; physical model deferred to consuming application. |
| UI | Related-page names are informational; page design deferred. |
| Testing | Rules and use-case alternatives define future scenario obligations. |
| Deployment | Deferred to consuming application. |
| Governance | Consent, privacy, provenance, audit, and evidence are mandatory concerns. |
| Observability and identity | Correlation and immutable audit evidence required. |
| Domain and access | Business roles do not directly grant technical permissions. |
| Validation | Entity operations enforce referenced rules. |
