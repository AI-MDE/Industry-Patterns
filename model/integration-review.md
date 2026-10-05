# Integration review

Integrated 568 detailed definition occurrences into 543 canonical concept pages across 23 Domains and 104 ABEs. Each ABE has one Primary Entity.

Preserved every migrated definition, attribute list, inline rule, and example in its canonical page. Original industry narratives, lifecycle descriptions, events, baseline rule sections, and variants remain in the pattern views.

## Relationship review

Of 380 table relationships, 276 have both endpoints resolved. The following 104 retain source expressions for review. Compound subjects, qualifiers, and concepts named without a detailed definition are not silently collapsed or invented. Non-table diagrams and prose relationships remain in their source pattern; they are not counted in this table registry.

| Pattern | Source expression | Role | Target expression | Cardinality |
|---|---|---|---|---|
| [crane-rental-orchestration](../patterns/crane-rental-orchestration.md) | Customer | owns | Customer Account | 1:M by provider |
| [crane-rental-orchestration](../patterns/crane-rental-orchestration.md) | Customer | sponsors | Project | 1:M |
| [crane-rental-orchestration](../patterns/crane-rental-orchestration.md) | Accepted Quote | establishes | Rental Agreement or Job Order | 1:M |
| [crane-rental-orchestration](../patterns/crane-rental-orchestration.md) | Crane Configuration | uses | Crane Asset or Equipment Model | M:1 |
| [crane-rental-orchestration](../patterns/crane-rental-orchestration.md) | Reservation | allocates | Asset, Component, Person, or service | M:1 |
| [crane-rental-orchestration](../patterns/crane-rental-orchestration.md) | Transport Movement | carries | Asset or Component | M:M |
| [crane-rental-orchestration](../patterns/crane-rental-orchestration.md) | Asset or Setup | receives | Inspection | 1:M |
| [crane-rental-orchestration](../patterns/crane-rental-orchestration.md) | Release for Service | applies to | Asset and Configuration | M:1 each |
| [crane-rental-orchestration](../patterns/crane-rental-orchestration.md) | Lift Activity | follows | Lift Plan Version | M:1 |
| [crane-rental-orchestration](../patterns/crane-rental-orchestration.md) | Lift Activity | uses | Crane Asset and Configuration | M:1 each |
| [crane-rental-orchestration](../patterns/crane-rental-orchestration.md) | Job Order | records | Delay, Standby, Stop-Work, or Incident | 1:M each |
| [crane-rental-orchestration](../patterns/crane-rental-orchestration.md) | Asset | produces | Equipment Usage Record | 1:M |
| [crane-rental-orchestration](../patterns/crane-rental-orchestration.md) | Job Order | concludes with | Teardown and Return | 1:M |
| [crane-rental-orchestration](../patterns/crane-rental-orchestration.md) | Return | may produce | Damage Report or Maintenance Work Order | 1:M |
| [cross-industry](../patterns/cross-industry.md) | Party | specializes as | Person or Organization | 1:0..1 each |
| [cross-industry](../patterns/cross-industry.md) | Offering | makes available | Product or Service | M:1 |
| [cross-industry](../patterns/cross-industry.md) | Agreement | establishes | Commitment or Entitlement | 1:M |
| [cross-industry](../patterns/cross-industry.md) | Fulfillment | satisfies | Order Line or Commitment | M:M |
| [cross-industry](../patterns/cross-industry.md) | Business subject | records | Status History | 1:M |
| [cross-industry](../patterns/cross-industry.md) | Charge | may arise from | Order Line, Usage, Fulfillment, or Event | M:1 |
| [cross-industry](../patterns/cross-industry.md) | Payment Allocation | settles | Invoice or Charge | M:1 |
| [e-commerce](../patterns/e-commerce.md) | Merchant | operates | Channel | 1:M |
| [e-commerce](../patterns/e-commerce.md) | Offering | offers | Product or Product Variant | M:1 |
| [e-commerce](../patterns/e-commerce.md) | Promotion | applies to | Offering, Cart, Order, or Order Line | M:M |
| [e-commerce](../patterns/e-commerce.md) | Customer | owns | Cart | 1:M |
| [e-commerce](../patterns/e-commerce.md) | Customer | places | Order | 1:M |
| [e-commerce](../patterns/e-commerce.md) | Payment Allocation | settles | Order, Invoice, or Charge | M:1 |
| [e-commerce](../patterns/e-commerce.md) | Order or Order Line | receives | Cancellation | 1:M |
| [e-commerce](../patterns/e-commerce.md) | Customer | opens | Customer Case | 1:M |
| [financial-services](../patterns/financial-services.md) | Applicant | submits | Product Application | 1:M |
| [financial-services](../patterns/financial-services.md) | Due Diligence Case | evaluates | Customer, Application, or relationship | M:1 |
| [financial-services](../patterns/financial-services.md) | Customer | has | Beneficial Ownership | 1:M |
| [financial-services](../patterns/financial-services.md) | Accepted Application | establishes | Financial Agreement | 1:0..M |
| [financial-services](../patterns/financial-services.md) | Mandate | authorizes | Party on Account | M:M |
| [financial-services](../patterns/financial-services.md) | Account | has | Balance, Limit, and Hold | 1:M each |
| [financial-services](../patterns/financial-services.md) | Account or Party | submits | Financial Instruction | 1:M |
| [financial-services](../patterns/financial-services.md) | Instruction | receives | Authorization | 1:M |
| [financial-services](../patterns/financial-services.md) | Instruction | produces | Financial Transaction | 1:0..M |
| [financial-services](../patterns/financial-services.md) | Reconciliation | compares | Transactions, entries, or external items | 1:M |
| [financial-services](../patterns/financial-services.md) | Credit obligation | is supported by | Collateral | M:M |
| [financial-services](../patterns/financial-services.md) | Transaction | may be challenged by | Dispute | 1:M |
| [health-care](../patterns/health-care.md) | Schedule | allocates availability for | Provider, Service, or Location | M:1 |
| [health-care](../patterns/health-care.md) | Care Team | supports | Episode, Case, or Care Plan | M:1 |
| [health-care](../patterns/health-care.md) | Encounter | records | Observation, Diagnosis, Procedure, or Clinical Note | 1:M each |
| [health-care](../patterns/health-care.md) | Service Request | may produce | Service Delivery or Procedure | 1:M |
| [health-care](../patterns/health-care.md) | Care Plan | contains | Care Goal and Planned Activity | 1:M each |
| [health-care](../patterns/health-care.md) | Service Delivery | occurs within | Encounter, Episode, or Case | M:1 |
| [health-care](../patterns/health-care.md) | Consent | given by | Patient or Related Person | M:1 |
| [health-care](../patterns/health-care.md) | Authorization | authorizes | Service Request or Service Delivery | M:M |
| [health-care](../patterns/health-care.md) | Claim Line | references | Charge or Service Delivery | M:1 |
| [health-care](../patterns/health-care.md) | Provenance | describes | Clinical or administrative record | M:1 |
| [health-care](../patterns/health-care.md) | Audit Event | records access or action upon | Patient information | M:1 |
| [insurance](../patterns/insurance.md) | Insurer | defines | Insurance Product | 1:M |
| [insurance](../patterns/insurance.md) | Quote Option | proposes | Coverage configuration | 1:M |
| [insurance](../patterns/insurance.md) | Applicant | submits | Insurance Application | 1:M |
| [insurance](../patterns/insurance.md) | Underwriting Case | evaluates | Application, Quote, or Policy Transaction | M:1 |
| [insurance](../patterns/insurance.md) | Accepted Quote/Application | produces | Policy | 1:0..1 |
| [insurance](../patterns/insurance.md) | Coverage | has | Coverage Term or Exclusion | 1:M |
| [insurance](../patterns/insurance.md) | Coverage or Policy Period | produces | Premium | 1:M |
| [insurance](../patterns/insurance.md) | Billing Account | receives | Invoice and Payment | 1:M each |
| [insurance](../patterns/insurance.md) | Producer | earns | Commission | 1:M |
| [insurance](../patterns/insurance.md) | Claim or Exposure | receives | Claim Assignment | 1:M |
| [insurance](../patterns/insurance.md) | Claim | contains | Evidence Item and Claim Note | 1:M each |
| [insurance](../patterns/insurance.md) | Claim or Exposure | resolves through | Settlement | 1:M |
| [insurance](../patterns/insurance.md) | Settlement or approved expense | produces | Claim Payment | 1:M |
| [insurance](../patterns/insurance.md) | Policy or portfolio | allocates through | Cession | 1:M |
| [legacy-conversion](../patterns/legacy-conversion.md) | Target Record or Golden Record | corresponds through | Record Link | 1:M |
| [legacy-conversion](../patterns/legacy-conversion.md) | Field Mapping | uses | Transformation Rule or Value Mapping | M:M |
| [legacy-conversion](../patterns/legacy-conversion.md) | Data Profile | describes | Dataset, Entity, or Field | M:1 |
| [legacy-conversion](../patterns/legacy-conversion.md) | Migration Item | produces | Validation Result or Conversion Error | 1:M |
| [legacy-conversion](../patterns/legacy-conversion.md) | Lineage Record | connects | Source Field and Target Attribute | M:1 each |
| [legacy-conversion](../patterns/legacy-conversion.md) | Reconciliation | evaluates | Migration Batch or Wave | M:1 |
| [legacy-conversion](../patterns/legacy-conversion.md) | Synchronization Contract | connects | Publisher System and Consumer System | M:1 each |
| [manufacturing](../patterns/manufacturing.md) | Product Version | governed by | Bill of Material and Routing | 1:M versions |
| [manufacturing](../patterns/manufacturing.md) | Engineering Change | changes | Product, Part, BOM, Routing, or Specification | M:M |
| [manufacturing](../patterns/manufacturing.md) | Facility | contains | Work Center | 1:M |
| [manufacturing](../patterns/manufacturing.md) | Material Requirement | receives | Material Reservation and Issue | 1:M |
| [manufacturing](../patterns/manufacturing.md) | Operation Execution | records | Labor, Machine, and Process Measurement | 1:M each |
| [manufacturing](../patterns/manufacturing.md) | Nonconformance | concerns | Material, Output, Process, or Asset | M:1 |
| [manufacturing](../patterns/manufacturing.md) | Product Genealogy | links | Input to Output | M:M |
| [manufacturing](../patterns/manufacturing.md) | Product Output | becomes | Inventory Item or Deployment | 1:M |
| [manufacturing](../patterns/manufacturing.md) | Deployed Product | records | Product Usage or Field Issue | 1:M |
| [physical-therapy-clinic](../patterns/physical-therapy-clinic.md) | Plan of Care | receives | Approval or Certification | 1:M |
| [physical-therapy-clinic](../patterns/physical-therapy-clinic.md) | Therapy Authorization | authorizes | Episode, Visit, or Service | 1:M |
| [physical-therapy-clinic](../patterns/physical-therapy-clinic.md) | Adjudication or Invoice | receives | Payment | 1:M |
| [professional-services](../patterns/professional-services.md) | Client | has | Client Contact | 1:M |
| [professional-services](../patterns/professional-services.md) | Time Entry, Expense, or Deliverable | receives | Approval | 1:M |
| [professional-services](../patterns/professional-services.md) | Billing Rate | prices | Project Assignment or Invoice Line | 1:M |
| [telecommunications](../patterns/telecommunications.md) | Customer | owns | Customer Account | 1:M |
| [telecommunications](../patterns/telecommunications.md) | Resource Reservation | reserves | Network Resource or capacity | M:1 |
| [telecommunications](../patterns/telecommunications.md) | Alarm or Outage | creates | Service Impact | 1:M |
| [telecommunications](../patterns/telecommunications.md) | Billing Account | receives | Charge, Invoice, and Payment | 1:M each |
| [telecommunications](../patterns/telecommunications.md) | Interconnect Agreement | governs | Partner Service and Settlement | 1:M |
| [travel](../patterns/travel.md) | Supplier | defines | Travel Product or Service | 1:M |
| [travel](../patterns/travel.md) | Availability | describes | Service Instance or inventory class | M:1 |
| [travel](../patterns/travel.md) | Offer Item | proposes | Service Instance or Ancillary Service | M:1 |
| [travel](../patterns/travel.md) | Reservation Item | holds | Service Instance inventory | M:1 |
| [travel](../patterns/travel.md) | Accepted Offer or Reservation | produces | Booking | 1:0..1 |
| [travel](../patterns/travel.md) | Ticket | contains | Ticket Coupon | 1:M |
| [travel](../patterns/travel.md) | Booking or Booking Item | receives | Change Request | 1:M |
| [travel](../patterns/travel.md) | Accepted Change Request | produces | Booking Change | 1:1 |
| [travel](../patterns/travel.md) | Booking or Booking Item | receives | Cancellation | 1:M |
| [travel](../patterns/travel.md) | Cancellation or Booking Change | may produce | Refund | 1:M |
| [travel](../patterns/travel.md) | Disruption | may produce | Reaccommodation or Duty of Care Case | 1:M |

## Semantic decisions

- Insurance Claim and Health Care Claim remain distinct. Therapy reuses Health Care Claim with therapy detail.
- Insurance, financial, and telecommunications Settlement retain separate meanings.
- Health Care Schedule and Travel Schedule remain separate concepts.
- Travel Service Instance and Telecommunications Service Instance remain separate concepts.
- Resource Capability is distinct from business Capability. The source term Capability is preserved in the source-aware terminology table.
- Shared Invoice, Invoice Line, Payment, Payment Allocation, Price, Agreement Role, Agreement Term, and Status History have one canonical home with contextual detail.
- Industry concepts specializing shared Product, Order, Work Effort, and similar concepts inherit meaning through explicit specialization references.
- No external reference model was imported during this integration. Unknown source concepts remain available in their original pattern.

## Remaining detail

The catalog still names some future/Enterprise concepts without detailed definitions. These retain their existing status. Canonical integration does not claim that every relationship, lifecycle, event, rule, or capability is already a standalone executable specification. The existing Health Care knowledge base is an application projection and is linked separately.
