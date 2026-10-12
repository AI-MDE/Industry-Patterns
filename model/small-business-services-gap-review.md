# Small-business services: canonical model gap review

## Principle

There is **one canonical semantic model**, organized Domain → ABE → Entity. Industries are selection and specialization views, **not parallel models**. Do not create a plumbing, salon, or landscaping copy of Customer, Invoice, Resource, Appointment, or Work Order.

## Baseline

The coherent integration report recorded 23 domains, 104 ABEs, 543 concepts, and 380 table relationships (276 resolved and 104 needing review). This update introduces **three shared ABEs and six concepts**, yielding 107 ABEs and 549 concept records in `model.json`. These are additions to the existing model, not full industry packages.

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

These are **candidate gaps** based on branch-level indexes and sample concept pages; they are not proof that an equivalent concept is absent among all 549 pages. Before adding the next concept, search existing canonical definitions and check specialization and aliases.

## Canonical changes made in this pass

1. **Service Offering** ABE in Product and Service: Service Offering and Service Package.
2. **Service Estimate** ABE in Service Management: Service Estimate and Estimate Line.
3. **Service Site** ABE in Service Management: Service Site and Site Assessment.

These additions are deliberately reusable across many small service industries. Industry-specific details should be attached through specialization, attributes, rules, and relationships rather than duplicating the shared ABE.

## Follow-up semantic decisions

- Decide when an existing Quote should specialize or reference Service Estimate; do not conflate insurance underwriting quotes with operational service estimates.
- Bind Service Site to existing Geographic Location and Administration Facilities and document property-owner/occupant/customer roles.
- Model package entitlement consumption separately from package definitions, agreements, and payment balances.
- Separate scheduled assignments from actual service visits and invoice charge events.
- Complete pending 104 unresolved relationships and formally review new ABE relationship cardinalities.
- The existing `model/model.json` manifest retains many historical `model/requirements/` paths while files are under `model/domains/`; the new entries use real `model/domains/` paths. Reconcile the older paths and rerun `node tools/coherent-model/validate.mjs` before treating the full manifest as validated.

## Next candidate cross-industry extensions

Appointment Policy, Crew, Route and Stop, Service Entitlement, Change Order, Vehicle (as an asset specialization), Animal/Care Subject, Enrollment/Attendance, and Rental/Occupancy. Each should pass canonical duplicate review first.

## Selection

For each industry request: recognize required capabilities → select existing ABEs and depth → add industry-specific specialization only where meaning genuinely differs → check business scenarios and evidence. **No new standalone industry model.**
