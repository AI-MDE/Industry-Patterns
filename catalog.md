# Industry Pattern Catalog

## Manufacturing

**Business overview:** Manufacturers define products and components, control product structures and engineering changes, plan material and work, execute production, deploy finished products, and analyze quality, cost, capacity, inventory, and usage.

Concepts: Product, Part, Component, Product Specification, Bill of Materials, Engineering Change, Inventory Configuration, Manufacturing Order, Work Effort, Process Plan, Production Run, Product Deployment, Product Usage, and manufacturing analytics.

Reusable patterns: Product/Part, Bill of Materials, Engineering Change, Inventory Configuration, Manufacturing Order, Work Effort/Process Plan, Production Run, Product Deployment, and Manufacturing Star Schema.

## Telecommunications

**Business overview:** Telecommunications providers design products and services over network resources, determine availability, accept and fulfill service orders, deploy connections, measure usage, manage subscriptions, and bill customers for recurring and consumption-based services.

Concepts: Telecommunications Product, Telecommunications Service, Network Component, Circuit, Network Connection, Service Order, Service Availability, Service Deployment, Service Usage, Subscription, Usage Billing, Invoice, Communication Identifier, and Contact Mechanism.

Reusable patterns: Product/Service, Network Component, Circuit/Connection, Service Order, Deployment/Usage, Subscription, Usage Billing, and Contact Mechanism.

## Health Care

**Business overview:** Health-care organizations register patients, coordinate providers and facilities, schedule and deliver care, record clinical evidence, manage episodes and care plans, protect sensitive information, and convert authorized services into claims and payments.

Concepts: Patient, Health Care Provider, Facility, Encounter, Medical Case, Health Care Service, Service Delivery, Case Role, Health Care Claim, patient-related information, status lifecycle, and privacy/access control.

Reusable patterns: Patient/Provider Role, Encounter, Case Management, Health Care Claim, Service Delivery, Facility, Status Lifecycle, and Privacy/Access Control.

See the full [Health Care model pattern](patterns/health-care.md).

## Insurance

**Business overview:** Insurers and intermediaries define products, quote and underwrite risks, issue and maintain policies and coverages, collect premium, investigate losses, evaluate claims, establish reserves, settle obligations, and pursue recoveries or reinsurance.

Concepts: Insurer, Insurance Product, Policy, Coverage, Policyholder, Policy Party, Insured Party, Insured Item, Claim, Claim Party, Claim Assessment, Settlement, and Payment.

The principal distinctions are product versus policy, policy versus coverage, insured subject versus policy party, and claim versus settlement/payment.

See the full [Insurance model pattern](patterns/insurance.md).

## Financial Services

**Business overview:** Financial institutions onboard and verify customers, offer governed financial products, establish agreements and accounts, authorize instructions, record transactions and balanced postings, clear and settle payments, manage lending or investments, reconcile activity, and meet risk and regulatory obligations.

Concepts: Financial Institution, Customer, Account, Financial Product, Financial Agreement, Account Role, Ownership, Transaction, Deposit, Withdrawal, Payment, Financial Instrument, Account Status, and Transaction Status.

Reusable patterns: Party/Customer Role, Product/Offering, Customer Due Diligence, Financial Agreement, Account/Authority, Instruction/Authorization, Transaction/Ledger Entry, Payment/Clearing/Settlement, Reconciliation, and Dispute.

See the full [Financial Services model pattern](patterns/financial-services.md).

## Professional Services

**Business overview:** Professional-services firms develop client relationships, agree engagements, staff projects with qualified professionals, plan and perform work, record time and expenses, produce deliverables, obtain approvals, and invoice and collect for services rendered.

Concepts: Client, Client Contact, Professional, Engagement, Service Agreement, Project, Project Assignment, Task, Time Entry, Expense, Billing Rate, Deliverable, Approval, Invoice, Invoice Line, and Payment.

Enterprise extensions: Practice Area, Service Offering, Skill, Resource Plan, Client Account, Matter, Work Effort, and Billing Event.

See [Professional Services](patterns/professional-services.md).

## Travel

**Business overview:** Travel suppliers and distributors publish transport, lodging, activity, and package offerings; assemble itineraries; reserve capacity; create bookings; collect payment; issue tickets or vouchers; fulfill travel services; and manage changes, disruption, cancellation, and refund.

Concepts: Traveler, Travel Provider, Travel Product/Service, Itinerary, Reservation, Booking, Trip Segment, Location, Schedule, Fare, Rate, Ticket, Payment, Cancellation, and Status.

See the full [Travel model pattern](patterns/travel.md).

## E-Commerce

**Business overview:** E-commerce businesses publish products and offers through catalogs, help customers discover and select items, convert carts into orders, authorize payment, coordinate inventory and fulfillment, ship goods, manage returns and refunds, and retain customer interaction history.

Concepts: Customer, Product, Product Offering, Catalog, Shopping Cart, Sales Order, Order Item, Price, Promotion, Payment, Shipment, Fulfilment, Return, Refund, and Customer Interaction.

This subject reuses Party, Product, Order, Payment, Shipment, and Status Lifecycle patterns.

See the full [E-Commerce model pattern](patterns/e-commerce.md).

## Real-World Extensions and Legacy Conversion

**Business overview:** Organizations modernize existing systems by mapping legacy structures and terminology to canonical concepts, preserving identifiers and lineage, resolving incomplete or denormalized data, operating transitional integrations, and migrating capabilities incrementally without losing business meaning.

Concerns: mapping legacy tables to canonical concepts, preserving external identifiers, supporting organization-specific terminology, handling incomplete or denormalized data, using classifications rather than proliferating entity types, progressive migration, and lineage between legacy data and MDE knowledge.

See the full [Real-World Extensions and Legacy Conversion pattern](patterns/legacy-conversion.md).

## Applied Industry Extensions

The following patterns extend the catalog beyond the original book-derived industry subjects.

### Physical Therapy Clinic

**Business overview:** Physical therapy clinics receive referrals or direct-access patients, complete intake and coverage checks, evaluate functional limitations, establish measurable plans of care, schedule and deliver treatment, prescribe home exercises, track outcomes and authorization usage, bill services, and discharge or transition patients safely.

Concepts: Patient Intake, Referral, Therapy Episode, Initial Evaluation, Clinical Finding, Outcome Measure, Plan of Care, Therapy Goal, Therapy Visit, Intervention Delivery, Home Exercise Program, Progress Evaluation, Authorization, Charge, Claim, Payment, and Discharge.

Reusable patterns: Patient/Provider Role, Referral and Intake, Evaluation, Plan of Care and Goal, Appointment/Visit, Intervention Delivery, Exercise Prescription, Outcome Measurement, Authorization Utilization, Billing, and Discharge.

See the full [Physical Therapy Clinic model pattern](patterns/physical-therapy-clinic.md).

### Industrial & Commercial Crane Rental Orchestration

**Business overview:** Crane-rental providers assess lift and site requirements, select equipment and configurations, quote and contract work, approve lift plans, reserve qualified fleet and personnel, coordinate permits and transport, manage setup and inspections, execute and monitor lifts, return and maintain equipment, and bill from verified utilization and service events.

Concepts: Lift Request, Job Site, Load Requirement, Site Survey, Crane Asset, Crane Configuration, Capacity Evidence, Quote, Rental Agreement, Job Order, Lift Plan, Reservation, Crew Assignment, Dispatch, Transport, Setup, Inspection, Lift Activity, Equipment Usage, Maintenance, Charge Event, Invoice, and Payment.

Reusable patterns: Asset/Fleet, Lift Demand Assessment, Equipment Selection and Configuration, Quote/Agreement, Lift Planning, Qualification and Readiness, Reservation and Dispatch, Transport, Setup and Inspection, Lift Execution, Utilization and Maintenance, and Usage-Based Billing.

See the full [Industrial & Commercial Crane Rental Orchestration model pattern](patterns/crane-rental-orchestration.md).
