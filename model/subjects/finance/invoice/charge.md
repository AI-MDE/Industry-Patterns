---
type: entity
title: "Charge"
---

# Charge

Subject: [Billing and Payments](../README.md). ABE: [Invoice](README.md).

Also known as: Charge Event (Crane Rental), Fee (Financial Services), Charge (Health Care), Therapy Charge (Physical Therapy), Billing Event (Professional Services), Rated Usage (Telecommunications), Charge (Telecommunications).

## Definition and detail

An amount a Party is expected to pay because of a Product, Service, Usage, Event, Fee, Penalty, Tax, or Adjustment.

Logical attributes: Charge Identifier; Charge Type; Charge Date; Amount; Currency; Charge Status; Source Reference.

### In industries

- **Charge Event** (Crane Rental): A billable occurrence or measured quantity arising from the Agreement or Job. Attributes: Charge Event Identifier; Charge Type; Status; Occurred At; Job Order; Resource; Quantity; Unit; Rate; Amount; Currency; Source Evidence.
- **Fee** (Financial Services): A charge assessed for a product, service, event, or exception. Attributes: Fee Identifier; Fee Type; Fee Status; Assessment Date; Amount; Currency; Pricing Plan; Waiver Reason; Source Transaction.
- **Charge** (Health Care): A billable amount arising from a delivered service, supply, facility use, or adjustment. Attributes: Charge Identifier; Charge Code; Charge Type; Charge Status; Service Date; Quantity; Unit Price; Amount; Currency; Source reference.
- **Therapy Charge** (Physical Therapy): A billable amount arising from a documented evaluation, intervention, supply, or other service. Attributes: Charge Identifier; Charge Code; Charge Status; Service Date; Visit; Intervention Delivery; Quantity; Unit; Unit Price; Amount; Currency; Rendering Provider; Location.
- **Billing Event** (Professional Services): approved time, milestone, retainer, installment, expense, or deliverable acceptance that generates an Invoice Line.
- **Rated Usage** (Telecommunications): A rated result derived from one or more Mediation Records. Attributes: Rated Usage Identifier; Service; Billing Account; Usage Period; Quantity; Unit; Rate; Amount; Currency; Rating Rule Version; Status.
- **Charge** (Telecommunications): A one-time, recurring, usage, adjustment, penalty, credit, tax, or discount amount. Attributes: Charge Identifier; Charge Type; Charge Status; Billing Account; Service or Subscription; Charge Date; Period; Amount; Currency; Source.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/cross-industry.md](../../../../industry-patterns/cross-industry.md#charge) | Charge |
| [industry-patterns/crane-rental-orchestration.md](../../../../industry-patterns/crane-rental-orchestration.md#charge-event) | Charge Event |
| [industry-patterns/financial-services.md](../../../../industry-patterns/financial-services.md#fee) | Fee |
| [industry-patterns/health-care.md](../../../../industry-patterns/health-care.md#charge) | Charge |
| [industry-patterns/physical-therapy-clinic.md](../../../../industry-patterns/physical-therapy-clinic.md#therapy-charge) | Therapy Charge |
| [industry-patterns/professional-services.md](../../../../industry-patterns/professional-services.md#detailed-logical-model) | Billing Event |
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#rated-usage) | Rated Usage |
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#charge) | Charge |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Charge | may arise from | Order Line, Usage, Fulfillment, or Event (review) | M:1 | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| [Invoice Line](invoice-line.md) | explains | Charge | M:1 | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| [Job Order](../../work/work-effort/work-order.md) | produces | Charge Event | 1:M | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| [Invoice Line](invoice-line.md) | derives from | Charge Event | M:M | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| [Service Delivery](../../fulfillment/fulfillment/fulfillment.md) | produces | Charge | 1:M | [health-care](../../../../industry-patterns/health-care.md) |
| [Intervention Delivery](../../../../industry-patterns/physical-therapy-clinic.md#concepts-applications-typically-add) | produces | Therapy Charge | 1:M | [physical-therapy-clinic](../../../../industry-patterns/physical-therapy-clinic.md) |
| [Claim Line](../../coverage/coverage/claim-line.md) | references | Therapy Charge | M:1 | [physical-therapy-clinic](../../../../industry-patterns/physical-therapy-clinic.md) |
| [Mediation Record](../../../../industry-patterns/telecommunications.md#concepts-applications-typically-add) | produces | Rated Usage | M:M | [telecommunications](../../../../industry-patterns/telecommunications.md) |
| Rated Usage | produces | Charge | 1:M | [telecommunications](../../../../industry-patterns/telecommunications.md) |
