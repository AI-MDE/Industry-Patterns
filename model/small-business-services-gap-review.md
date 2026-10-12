# Small-business services: canonical model gap review

## Principle

There is **one canonical semantic model**, organized Domain → ABE → Entity. Industries are selection and specialization views, **not parallel models**. Do not create a plumbing, salon, or landscaping copy of Customer, Invoice, Resource, Appointment, or Work Order.

## Baseline

The coherent integration report recorded 23 domains, 104 ABEs, 543 concepts, and 380 table relationships (276 resolved and 104 needing review). This update introduces **five shared ABEs and ten concepts**, yielding 109 ABEs and 553 concept records in `model.json`. These are additions to the existing model, not full industry packages.

## Coverage and remaining gaps

| Small-business scenario | Existing model to reuse | Remaining work |
| --- | --- | --- |
| Plumbing, electrical, HVAC, handyman | Service Request, Service Plan, Service Event, Resource, Assignment, Work Effort, Equipment Service | Add service estimate, service site, customer acceptance, parts consumption, warranty decisions |
| Cleaning, landscaping, pest control, snow removal | Service Plan, scheduling, resources, service event | Strengthen crew, route/stop, seasonal/weather triggers, per-site recurrence |
| Salon, barber, massage, grooming | Scheduling, Party, resource, service delivery | Appointment booking policy, room/chair capacity, no-show, commissions, packages |
| Auto repair, detailing, tire shop | Equipment Service, Work Management, Inventory, Service Estimate | Vehicle specialization, diagnostic/inspection and customer repair authorization |
| Tutors, studios, personal trainers | Scheduling, Party, service plan | Enrollment, sessions, attendance, cancellations, prepaid entitlement usage |
| Restaurant, catering, bakery | Product, Order, inventory and fulfillment | Menu/recipe, kitchen preparation, event catering, food safety |
| Childcare and elder home care | Party, scheduling, health-care extensions | Guardian consent, attendance, care-plan obligations and incident handling |
| Pet boarding, grooming, veterinary | Party, appointment and health-care analogies | Animal identity, custody, care instructions, boarding occupancy |
| Local delivery, moving, mobile services | Resource, assignment and fulfillment | Route, stop, proof of service/delivery, route optimization |
| Property management and rentals | Agreement, Facilities, Resource, Finance | Tenancy/occupancy, unit, landlord/manager roles, deposits, inspections |
| Small contractors, renovations, roofing | Professional Services project, Work Effort, Estimate | Change orders, subcontractor coordination, progress billing |

These are **candidate gaps** based on branch-level indexes and sample concept pages; they are not proof that an equivalent concept is absent among all 553 concept pages. Before adding the next concept, search existing canonical definitions and check specialization and aliases.

## Canonical changes made in this pass

1. **Service Offering** ABE in Product and Service: Service Offering and Service Package.
2. **Service Estimate** ABE in Service Management: Service Estimate and Estimate Line.
3. **Service Site** ABE in Service Management: Service Site and Site Assessment.
4. **Service Appointment** ABE in Scheduling: Service Appointment and Appointment Policy.
5. **Service Route** ABE in Scheduling: Service Route and Route Stop.

These additions are deliberately reusable across many small service industries. Industry-specific details should be attached through specialization, attributes, rules, and relationships rather than duplicating the shared ABE.

## Follow-up semantic decisions

- Decide when an existing Quote should specialize or reference Service Estimate; do not conflate insurance underwriting quotes with operational service estimates.
- Bind Service Site to existing Geographic Location and Administration Facilities and document property-owner/occupant/customer roles.
- Model package entitlement consumption separately from package definitions, agreements, and payment balances.
- Separate scheduled assignments from actual service visits and invoice charge events.
- Complete pending 104 unresolved relationships and formally review new ABE relationship cardinalities.
- Navigation repair is complete: the manifest, aliases, source bindings, and local links now use the actual canonical paths under `model/domains/`. Semantic review remains separate from navigation validation.

## Next candidate cross-industry extensions

Appointment Policy, Crew, Route and Stop, Service Entitlement, Change Order, Vehicle (as an asset specialization), Animal/Care Subject, Enrollment/Attendance, and Rental/Occupancy. Each should pass canonical duplicate review first.

## Selection

For each industry request: recognize required capabilities → select existing ABEs and depth → add industry-specific specialization only where meaning genuinely differs → check business scenarios and evidence. **No new standalone industry model.**

## Conflict remediation — October 2026

- The earlier manifest repair replaced 3,422 obsolete canonical-root references with `model/domains/`. The manifest now includes 23 domains, 109 ABEs, and 553 concepts.
- Added general-purpose **Service Appointment** (and Appointment Policy) and **Service Route** (and Route Stop) ABEs under Scheduling, avoiding duplicates of healthcare-specific appointments and industry-specific crew assignments.
- Strengthened `tools/coherent-model/validate.mjs` to flag legacy canonical paths and improper "resolved" relationships.
- **104 legacy relationship records remain in semantic review.** They cannot all be safely resolved by a string substitution: many endpoints are alternatives, conjunctions, state-qualified terms or role names (e.g., `Party → Person or Organization`, `Accepted Quote → Rental Agreement or Job Order`). Do not mark these resolved without splitting compound relationships, choosing semantic specialization and reviewing cardinalities.
- Follow-up work: review each compound expression with its industry source, map all endpoints to existing concepts first, split only the actual independently meaningful relationships, and preserve the original expression as provenance. Do not invent additional generic entities to satisfy ambiguous labels.
- Local canonical validation and repository-wide Markdown link validation now pass after the folder and reference cleanup. This validates navigation and structural consistency, not the business meaning of the 104 unresolved relationships.

## Domain index conflict fixes

All 23 canonical Domain index paths now resolve locally. The earlier repairs created the missing Party, Classification, Agreement, Work Management, Measurement, and Scheduling indexes. The cleanup moved nine shared ABEs and their 31 concept pages out of the redundant `common/` layer to the paths already recorded in the manifest, removed duplicate domain indexes, and repaired legacy paths in patterns, aliases, documentation, and knowledge-base projections. Canonical definitions, identities, specialization, and relationship records were preserved.
