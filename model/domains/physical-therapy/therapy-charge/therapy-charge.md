---
type: primary-entity
title: "Therapy Charge"
---

# Therapy Charge

Domain: [Physical Therapy](../README.md). ABE: [Therapy Charge](README.md).

Specializes: [Charge](../../finance/invoice/charge.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A billable amount arising from a documented evaluation, intervention, supply, or other service.

Logical attributes: Charge Identifier; Charge Code; Charge Status; Service Date; Visit; Intervention Delivery; Quantity; Unit; Unit Price; Amount; Currency; Rendering Provider; Location.

## Source terminology

| Source | Term |
|---|---|
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#therapy-charge) | Therapy Charge |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Intervention Delivery](../intervention-definition/intervention-delivery.md) | produces | [Therapy Charge](therapy-charge.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
| [Claim Line](../../health-care/coverage/claim-line.md) | references | [Therapy Charge](therapy-charge.md) | M:1 | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
