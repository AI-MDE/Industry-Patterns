---
type: architecture
title: "Architecture and Requirements Diagrams"
description: "Architecture and Requirements Diagrams"
tags: [health-care, industry-pattern, architecture]
---

# Architecture and Requirements Diagrams

## Capability relationships

```mermaid
flowchart TD
    PA["Patient Administration"] --> AS["Access and Scheduling"]
    AS --> CD["Care Delivery"]
    CD --> CC["Care Coordination"]
    PA --> RC["Revenue Cycle"]
    CD --> RC
    PC["Privacy, Consent and Audit"] -. constrains .-> PA
    PC -. constrains .-> AS
    PC -. constrains .-> CD
    PC -. constrains .-> CC
    PC -. constrains .-> RC
```

## Use-case view

```mermaid
flowchart TD
    Patient["Patient / Related Person"] --> Schedule["Schedule Appointment"]
    Scheduler --> Register["Register Patient"]
    Scheduler --> CheckIn["Check In Patient"]
    Provider --> Encounter["Conduct Encounter"]
    Provider --> Order["Order Service"]
    Provider --> Delivery["Complete Service Delivery"]
    Coordinator["Care Coordinator"] --> Plan["Create Care Plan"]
    Coordinator --> Case["Coordinate Medical Case"]
    Billing["Billing Specialist"] --> Authorize["Request Authorization"]
    Billing --> Claim["Submit Claim"]
    Privacy["Privacy Officer"] --> Audit["Review Access Audit"]
```

## Logical data model

```mermaid
erDiagram
    PATIENT ||--o{ APPOINTMENT : books
    APPOINTMENT ||--o{ ENCOUNTER : results_in
    PATIENT ||--o{ EPISODE_OF_CARE : has
    EPISODE_OF_CARE ||--o{ ENCOUNTER : groups
    PATIENT ||--o{ CONDITION : has
    ENCOUNTER ||--o{ OBSERVATION : records
    ENCOUNTER ||--o{ SERVICE_REQUEST : creates
    SERVICE_REQUEST ||--o{ SERVICE_DELIVERY : fulfilled_by
    PATIENT ||--o{ CARE_PLAN : has
    SERVICE_DELIVERY ||--o{ CLAIM_LINE : billed_as
    CLAIM ||--o{ CLAIM_LINE : contains
    PATIENT ||--o{ CONSENT : gives
    PATIENT ||--o{ COVERAGE : has
    COVERAGE ||--o{ AUTHORIZATION : governs
```

## Key state machines

```mermaid
stateDiagram-v2
    [*] --> Submitted
    Submitted --> Acknowledged
    Acknowledged --> InReview
    InReview --> Adjudicated
    Adjudicated --> Paid
    Adjudicated --> Denied
    Denied --> Appealed
    Appealed --> InReview
    Paid --> Closed
    Denied --> Closed
```

# Architecture Diagrams

This knowledge base is requirements-only. The consuming application must maintain its system architecture, physical data, interaction, and deployment diagrams.

## Knowledge topology

```mermaid
flowchart TD
    D["Domain"] --> C["Capabilities"]
    C --> U["Use Cases"]
    C --> E["Entities"]
    C --> R["Rules"]
    U --> O["Entity Operations"]
    W["Workflows"] --> U
    Roles["Roles"] --> U
    R --> O
    P["Health Care Pattern"] --> D
```
