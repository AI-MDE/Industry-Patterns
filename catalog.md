# Industry Pattern Catalog

## Manufacturing

Concepts: Product, Part, Component, Product Specification, Bill of Materials, Engineering Change, Inventory Configuration, Manufacturing Order, Work Effort, Process Plan, Production Run, Product Deployment, Product Usage, and manufacturing analytics.

Reusable patterns: Product/Part, Bill of Materials, Engineering Change, Inventory Configuration, Manufacturing Order, Work Effort/Process Plan, Production Run, Product Deployment, and Manufacturing Star Schema.

## Telecommunications

Concepts: Telecommunications Product, Telecommunications Service, Network Component, Circuit, Network Connection, Service Order, Service Availability, Service Deployment, Service Usage, Subscription, Usage Billing, Invoice, Communication Identifier, and Contact Mechanism.

Reusable patterns: Product/Service, Network Component, Circuit/Connection, Service Order, Deployment/Usage, Subscription, Usage Billing, and Contact Mechanism.

## Health Care

Concepts: Patient, Health Care Provider, Facility, Encounter, Medical Case, Health Care Service, Service Delivery, Case Role, Health Care Claim, patient-related information, status lifecycle, and privacy/access control.

Reusable patterns: Patient/Provider Role, Encounter, Case Management, Health Care Claim, Service Delivery, Facility, Status Lifecycle, and Privacy/Access Control.

See the full [Health Care model pattern](patterns/health-care.md).

## Insurance

Concepts: Insurer, Insurance Product, Policy, Coverage, Policyholder, Policy Party, Insured Party, Insured Item, Claim, Claim Party, Claim Assessment, Settlement, and Payment.

The principal distinctions are product versus policy, policy versus coverage, insured subject versus policy party, and claim versus settlement/payment.

See the full [Insurance model pattern](patterns/insurance.md).

## Financial Services

Concepts: Financial Institution, Customer, Account, Financial Product, Financial Agreement, Account Role, Ownership, Transaction, Deposit, Withdrawal, Payment, Financial Instrument, Account Status, and Transaction Status.

Reusable patterns: Party/Customer Role, Product/Offering, Customer Due Diligence, Financial Agreement, Account/Authority, Instruction/Authorization, Transaction/Ledger Entry, Payment/Clearing/Settlement, Reconciliation, and Dispute.

See the full [Financial Services model pattern](patterns/financial-services.md).

## Professional Services

Concepts: Client, Client Contact, Professional, Engagement, Service Agreement, Project, Project Assignment, Task, Time Entry, Expense, Billing Rate, Deliverable, Approval, Invoice, Invoice Line, and Payment.

Enterprise extensions: Practice Area, Service Offering, Skill, Resource Plan, Client Account, Matter, Work Effort, and Billing Event.

See [Professional Services](patterns/professional-services.md).

## Travel

Concepts: Traveler, Travel Provider, Travel Product/Service, Itinerary, Reservation, Booking, Trip Segment, Location, Schedule, Fare, Rate, Ticket, Payment, Cancellation, and Status.

See the full [Travel model pattern](patterns/travel.md).

## E-Commerce

Concepts: Customer, Product, Product Offering, Catalog, Shopping Cart, Sales Order, Order Item, Price, Promotion, Payment, Shipment, Fulfilment, Return, Refund, and Customer Interaction.

This subject reuses Party, Product, Order, Payment, Shipment, and Status Lifecycle patterns.

See the full [E-Commerce model pattern](patterns/e-commerce.md).

## Real-World Extensions and Legacy Conversion

Concerns: mapping legacy tables to canonical concepts, preserving external identifiers, supporting organization-specific terminology, handling incomplete or denormalized data, using classifications rather than proliferating entity types, progressive migration, and lineage between legacy data and MDE knowledge.

See the full [Real-World Extensions and Legacy Conversion pattern](patterns/legacy-conversion.md).
