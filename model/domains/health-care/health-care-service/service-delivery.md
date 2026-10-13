---
type: entity
title: "Service Delivery"
---

# Service Delivery

Domain: [Health Care](../README.md). ABE: [Health Care Service](README.md).

## Definition and detail

Evidence that a requested or planned Health Care Service was performed or supplied.

Logical attributes: Delivery Identifier; Service Code; Delivery Status; Delivered Start; Delivered End; Quantity; Unit; Delivering Provider; Location; Result reference.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/health-care.md](../../../../industry-patterns/health-care.md#service-delivery) | Service Delivery |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Service Delivery](service-delivery.md) | occurs within | Encounter, Episode, or Case (review) | M:1 | [health-care](../../../../industry-patterns/health-care.md) |
| [Service Delivery](service-delivery.md) | produces | [Charge](../coverage/charge.md) | 1:M | [health-care](../../../../industry-patterns/health-care.md) |

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

- [service-delivery-requires-traceability](../rules/service-delivery-requires-traceability.md)
- [provider-must-act-within-active-scope](../rules/provider-must-act-within-active-scope.md)
