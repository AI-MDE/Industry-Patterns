# Cross-Industry Concepts

| Concept | Purpose |
|---|---|
| Party and Party Role | Represent people and organizations independently of the roles they perform. |
| Party Relationship | Represent relationships among people and organizations. |
| Product and Service | Represent what an organization offers or delivers. |
| Agreement | Represent contracts, policies, subscriptions, engagements, and service agreements. |
| Order or Request | Represent a request for a product, service, or action. |
| Status Lifecycle | Represent changes in the state of an agreement, order, claim, project, or service. |
| Contact Mechanism | Represent addresses, telephone numbers, email addresses, and communication identifiers. |
| Classification | Represent types, categories, segments, and hierarchies. |
| Subscription | Represent continuing entitlement to a product or service. |
| Invoice and Payment | Represent amounts charged and their settlement. |
| Recursive Relationship | Represent compositions and hierarchies such as product structures and nested work. |
| Analytics/Star Schema | Organize operational facts and dimensions for analysis. |

These are reusable modeling primitives, not fixed application schemas. Each industry pattern specializes and combines them.

## Purpose and boundary

The Cross-Industry pattern supplies stable business primitives that recur across domains. An industry pattern selects, specializes, and connects these primitives; an application pattern further constrains them.

It is not a single universal database schema. Concepts should be adopted only when the business needs the distinctions they provide.

## 1. Party and role

### Party

Canonical concept: [Party](../model/domains/party/party/party.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Person

Canonical concept: [Person](../model/domains/party/party/person.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Organization

Canonical concept: [Organization](../model/domains/party/party/organization.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Party Role

Canonical concept: [Party Role](../model/domains/party/party/party-role.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Party Relationship

Canonical concept: [Party Relationship](../model/domains/party/party/party-relationship.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## 2. Contact and location

### Contact Mechanism

Canonical concept: [Contact Mechanism](../model/domains/party/contact-mechanism/contact-mechanism.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Party Contact

Canonical concept: [Party Contact](../model/domains/party/contact-mechanism/party-contact.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Geographic Location

Canonical concept: [Geographic Location](../model/domains/party/contact-mechanism/geographic-location.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## 3. Classification

### Classification Scheme

Canonical concept: [Classification Scheme](../model/domains/classification/classification/classification-scheme.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Classification

Canonical concept: [Classification](../model/domains/classification/classification/classification.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Classification Assignment

Canonical concept: [Classification Assignment](../model/domains/classification/classification/classification-assignment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## 4. Product, service, and offering

### Product

Canonical concept: [Product](../model/domains/product-and-service/product/product.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Product Component

Canonical concept: [Product Component](../model/domains/product-and-service/product/product-component.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Service

Canonical concept: [Service](../model/domains/product-and-service/product/service.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Offering

Canonical concept: [Offering](../model/domains/product-and-service/product/offering.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Price

Canonical concept: [Price](../model/domains/product-and-service/product/price.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## 5. Agreement, commitment, and entitlement

### Agreement

Canonical concept: [Agreement](../model/domains/agreement/agreement/agreement.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Agreement Role

Canonical concept: [Agreement Role](../model/domains/agreement/agreement/agreement-role.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Agreement Term

Canonical concept: [Agreement Term](../model/domains/agreement/agreement/agreement-term.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Commitment

Canonical concept: [Commitment](../model/domains/agreement/agreement/commitment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Entitlement

Canonical concept: [Entitlement](../model/domains/agreement/agreement/entitlement.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Subscription

Canonical concept: [Subscription](../model/domains/agreement/agreement/subscription.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## 6. Request, order, and fulfillment

### Request

Canonical concept: [Request](../model/domains/request-and-fulfillment/request/request.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Order

Canonical concept: [Order](../model/domains/request-and-fulfillment/request/order.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Order Line

Canonical concept: [Order Line](../model/domains/request-and-fulfillment/request/order-line.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Fulfillment

Canonical concept: [Fulfillment](../model/domains/request-and-fulfillment/request/fulfillment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## 7. Work, event, and outcome

### Business Event

Canonical concept: [Business Event](../model/domains/work-management/work-effort/business-event.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Work Effort

Canonical concept: [Work Effort](../model/domains/work-management/work-effort/work-effort.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Assignment

Canonical concept: [Assignment](../model/domains/work-management/work-effort/assignment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Outcome

Canonical concept: [Outcome](../model/domains/work-management/work-effort/outcome.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## 8. Status and lifecycle

### Status Type

Canonical concept: [Status Type](../model/domains/work-management/status-type/status-type.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Status Transition

Canonical concept: [Status Transition](../model/domains/work-management/status-type/status-transition.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Status History

Canonical concept: [Status History](../model/domains/work-management/status-type/status-history.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## 9. Charge, invoice, and payment

### Charge

Canonical concept: [Charge](../model/domains/finance/invoice/charge.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Invoice

Canonical concept: [Invoice](../model/domains/finance/invoice/invoice.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Invoice Line

Canonical concept: [Invoice Line](../model/domains/finance/invoice/invoice-line.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Payment

Canonical concept: [Payment](../model/domains/finance/invoice/payment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Payment Allocation

Canonical concept: [Payment Allocation](../model/domains/finance/invoice/payment-allocation.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## 10. Measurement and analytics

### Measure

Canonical concept: [Measure](../model/domains/measurement/measure/measure.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Measurement

Canonical concept: [Measurement](../model/domains/measurement/measure/measurement.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Analytic Fact

Canonical concept: [Analytic Fact](../model/domains/measurement/measure/analytic-fact.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Core relationship model

See the [canonical cross-domain relationship view](../model/relationships.md).

## Specialization rules

- Prefer a stable general concept plus typed roles over duplicated domain-specific party tables.
- Specialize a concept when the subtype introduces distinct behavior, rules, attributes, or relationships.
- Do not force Product and Service into one meaning when delivery, inventory, usage, or entitlement rules differ.
- Keep Agreement separate from Order: an Agreement establishes terms; an Order requests fulfillment under those terms.
- Keep Request separate from Order when evaluation or authorization occurs before commitment.
- Keep Work Effort separate from Use Case: Work Effort records business work; a Use Case specifies system-supported behavior toward an outcome.
- Keep Business Event immutable; corrections create superseding evidence rather than rewriting history where audit matters.
- Model effective dates on relationships whose truth changes over time.
- Use identifiers that remain stable across system migrations; keep external-system identifiers as mappings rather than primary business identity.

## Baseline integrity rules

1. [Party Role integrity rule](../model/domains/party/party/party-role.md#integrity-rules)
2. [Agreement integrity rule](../model/domains/agreement/agreement/agreement.md#integrity-rules)
3. [Agreement Role integrity rule](../model/domains/agreement/agreement/agreement-role.md#integrity-rules)
4. [Order Line integrity rule](../model/domains/request-and-fulfillment/request/order-line.md#integrity-rules)
5. [Fulfillment integrity rule](../model/domains/request-and-fulfillment/request/fulfillment.md#integrity-rules)
6. [Status Transition integrity rule](../model/domains/work-management/status-type/status-transition.md#integrity-rules)
7. [Invoice Line integrity rule](../model/domains/finance/invoice/invoice-line.md#integrity-rules)
8. [Payment Allocation integrity rule](../model/domains/finance/invoice/payment-allocation.md#integrity-rules)
9. [Measurement integrity rule](../model/domains/measurement/measure/measurement.md#integrity-rules)
10. [Analytic Fact integrity rule](../model/domains/measurement/measure/analytic-fact.md#integrity-rules)

## Questions the AI should ask

1. Which Party types and roles exist, and may one Party perform several roles?
2. Which relationships require history or effective dating?
3. Are Products, Services, Offerings, and Prices meaningfully distinct here?
4. What Agreements establish the terms, rights, and obligations?
5. Does a Request require evaluation before it becomes an Order?
6. What constitutes fulfillment, and what evidence proves it?
7. Which events trigger work, rules, notifications, or lifecycle transitions?
8. Which statuses need governed transitions and history?
9. What creates a Charge, and must every Invoice Line trace to its source?
10. Can Payments cover multiple Invoices or be partial?
11. What measures and analytic grains are required?
12. Which concepts should the selected industry pattern specialize?

## MDE application

For a new industry pattern:

1. Select only the relevant cross-industry primitives.
2. Rename display terminology without losing canonical meaning.
3. Add industry-specific specializations, roles, events, states, and rules.
4. Define entity operations on the resulting domain concepts.
5. Define capabilities and actor-goal Use Cases that invoke those operations.
6. Add pages, scenarios, verification, and analytics as separate but traceable knowledge.

## Canonical model bindings

This pattern selects and connects concepts in the [coherent model](../model/README.md). The sections below are views of those definitions. Industry lifecycles, events, baseline rules, and variant choices continue to constrain the selected concepts.

| Source term | Canonical concept | ABE |
|---|---|---|
| Party | [Party](../model/domains/party/party/party.md) | [Party](../model/domains/party/party/README.md) |
| Person | [Person](../model/domains/party/party/person.md) | [Party](../model/domains/party/party/README.md) |
| Organization | [Organization](../model/domains/party/party/organization.md) | [Party](../model/domains/party/party/README.md) |
| Party Role | [Party Role](../model/domains/party/party/party-role.md) | [Party](../model/domains/party/party/README.md) |
| Party Relationship | [Party Relationship](../model/domains/party/party/party-relationship.md) | [Party](../model/domains/party/party/README.md) |
| Contact Mechanism | [Contact Mechanism](../model/domains/party/contact-mechanism/contact-mechanism.md) | [Contact Mechanism](../model/domains/party/contact-mechanism/README.md) |
| Party Contact | [Party Contact](../model/domains/party/contact-mechanism/party-contact.md) | [Contact Mechanism](../model/domains/party/contact-mechanism/README.md) |
| Geographic Location | [Geographic Location](../model/domains/party/contact-mechanism/geographic-location.md) | [Contact Mechanism](../model/domains/party/contact-mechanism/README.md) |
| Classification Scheme | [Classification Scheme](../model/domains/classification/classification/classification-scheme.md) | [Classification](../model/domains/classification/classification/README.md) |
| Classification | [Classification](../model/domains/classification/classification/classification.md) | [Classification](../model/domains/classification/classification/README.md) |
| Classification Assignment | [Classification Assignment](../model/domains/classification/classification/classification-assignment.md) | [Classification](../model/domains/classification/classification/README.md) |
| Product | [Product](../model/domains/product-and-service/product/product.md) | [Product](../model/domains/product-and-service/product/README.md) |
| Product Component | [Product Component](../model/domains/product-and-service/product/product-component.md) | [Product](../model/domains/product-and-service/product/README.md) |
| Service | [Service](../model/domains/product-and-service/product/service.md) | [Product](../model/domains/product-and-service/product/README.md) |
| Offering | [Offering](../model/domains/product-and-service/product/offering.md) | [Product](../model/domains/product-and-service/product/README.md) |
| Price | [Price](../model/domains/product-and-service/product/price.md) | [Product](../model/domains/product-and-service/product/README.md) |
| Agreement | [Agreement](../model/domains/agreement/agreement/agreement.md) | [Agreement](../model/domains/agreement/agreement/README.md) |
| Agreement Role | [Agreement Role](../model/domains/agreement/agreement/agreement-role.md) | [Agreement](../model/domains/agreement/agreement/README.md) |
| Agreement Term | [Agreement Term](../model/domains/agreement/agreement/agreement-term.md) | [Agreement](../model/domains/agreement/agreement/README.md) |
| Commitment | [Commitment](../model/domains/agreement/agreement/commitment.md) | [Agreement](../model/domains/agreement/agreement/README.md) |
| Entitlement | [Entitlement](../model/domains/agreement/agreement/entitlement.md) | [Agreement](../model/domains/agreement/agreement/README.md) |
| Subscription | [Subscription](../model/domains/agreement/agreement/subscription.md) | [Agreement](../model/domains/agreement/agreement/README.md) |
| Request | [Request](../model/domains/request-and-fulfillment/request/request.md) | [Request](../model/domains/request-and-fulfillment/request/README.md) |
| Order | [Order](../model/domains/request-and-fulfillment/request/order.md) | [Request](../model/domains/request-and-fulfillment/request/README.md) |
| Order Line | [Order Line](../model/domains/request-and-fulfillment/request/order-line.md) | [Request](../model/domains/request-and-fulfillment/request/README.md) |
| Fulfillment | [Fulfillment](../model/domains/request-and-fulfillment/request/fulfillment.md) | [Request](../model/domains/request-and-fulfillment/request/README.md) |
| Business Event | [Business Event](../model/domains/work-management/work-effort/business-event.md) | [Work Effort](../model/domains/work-management/work-effort/README.md) |
| Work Effort | [Work Effort](../model/domains/work-management/work-effort/work-effort.md) | [Work Effort](../model/domains/work-management/work-effort/README.md) |
| Assignment | [Assignment](../model/domains/work-management/work-effort/assignment.md) | [Work Effort](../model/domains/work-management/work-effort/README.md) |
| Outcome | [Outcome](../model/domains/work-management/work-effort/outcome.md) | [Work Effort](../model/domains/work-management/work-effort/README.md) |
| Status Type | [Status Type](../model/domains/work-management/status-type/status-type.md) | [Status Type](../model/domains/work-management/status-type/README.md) |
| Status Transition | [Status Transition](../model/domains/work-management/status-type/status-transition.md) | [Status Type](../model/domains/work-management/status-type/README.md) |
| Status History | [Status History](../model/domains/work-management/status-type/status-history.md) | [Status Type](../model/domains/work-management/status-type/README.md) |
| Charge | [Charge](../model/domains/finance/invoice/charge.md) | [Invoice](../model/domains/finance/invoice/README.md) |
| Invoice | [Invoice](../model/domains/finance/invoice/invoice.md) | [Invoice](../model/domains/finance/invoice/README.md) |
| Invoice Line | [Invoice Line](../model/domains/finance/invoice/invoice-line.md) | [Invoice](../model/domains/finance/invoice/README.md) |
| Payment | [Payment](../model/domains/finance/invoice/payment.md) | [Invoice](../model/domains/finance/invoice/README.md) |
| Payment Allocation | [Payment Allocation](../model/domains/finance/invoice/payment-allocation.md) | [Invoice](../model/domains/finance/invoice/README.md) |
| Measure | [Measure](../model/domains/measurement/measure/measure.md) | [Measure](../model/domains/measurement/measure/README.md) |
| Measurement | [Measurement](../model/domains/measurement/measure/measurement.md) | [Measure](../model/domains/measurement/measure/README.md) |
| Analytic Fact | [Analytic Fact](../model/domains/measurement/measure/analytic-fact.md) | [Measure](../model/domains/measurement/measure/README.md) |
