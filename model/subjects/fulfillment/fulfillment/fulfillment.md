---
type: entity
title: "Fulfillment"
---

# Fulfillment

Subject: [Fulfillment and Logistics](../README.md). ABE: [Fulfillment](README.md).

Also known as: Service Delivery (Health Care), Fulfillment (Travel).

## Definition and detail

The performance, delivery, shipment, activation, or provision that satisfies a Request, Order Line, Commitment, or Entitlement.

Logical attributes: Fulfillment Identifier; Fulfillment Type; Fulfillment Status; Planned Date; Actual Date; Quantity; Evidence Reference.

### In industries

- **Service Delivery** (Health Care): Evidence that a requested or planned Health Care Service was performed or supplied. Attributes: Delivery Identifier; Service Code; Delivery Status; Delivered Start; Delivered End; Quantity; Unit; Delivering Provider; Location; Result reference.
- **Fulfillment** (Travel): Evidence that a booked travel service or ancillary was delivered, used, boarded, checked in, stayed, rented, attended, or otherwise consumed. Attributes: Fulfillment Identifier; Fulfillment Type; Fulfillment Status; Started At; Completed At; Quantity; Evidence Reference.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/cross-industry.md](../../../../industry-patterns/cross-industry.md#fulfillment) | Fulfillment |
| [industry-patterns/health-care.md](../../../../industry-patterns/health-care.md#service-delivery) | Service Delivery |
| [industry-patterns/travel.md](../../../../industry-patterns/travel.md#fulfillment) | Fulfillment |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Fulfillment | satisfies | Order Line or Commitment (review) | M:M | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| Service Delivery | occurs within | Encounter, Episode, or Case (review) | M:1 | [health-care](../../../../industry-patterns/health-care.md) |
| Service Delivery | produces | [Charge](../../finance/invoice/charge.md) | 1:M | [health-care](../../../../industry-patterns/health-care.md) |
| [Travel Document](../../travel/travel-document/travel-document.md) | authorizes | Fulfillment | 1:M | [travel](../../../../industry-patterns/travel.md) |

## Integrity rules

- Fulfilled quantity cannot exceed ordered quantity unless an explicit tolerance or change authorization permits it.

## Business participation

Fulfills a Service Request; occurs in an Encounter, Episode, or Case; may produce Observations, Procedures, outcomes, and Charges.

## Operations

- start
- record-result
- complete
- correct
- cancel

## States

planned; in-progress; completed; partially-completed; cancelled; entered-in-error

## Rules

- [service-delivery-requires-traceability](../../care/rules/service-delivery-requires-traceability.md)
- [provider-must-act-within-active-scope](../../care/rules/provider-must-act-within-active-scope.md)
