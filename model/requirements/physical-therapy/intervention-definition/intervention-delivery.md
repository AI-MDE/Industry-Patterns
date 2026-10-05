---
type: entity
title: "Intervention Delivery"
---

# Intervention Delivery

Domain: [Physical Therapy](../README.md). ABE: [Intervention Definition](README.md).

Specializes: [Service Delivery](../../health-care/health-care-service/service-delivery.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

Evidence that an Intervention was actually performed during a Visit.

Logical attributes: Delivery Identifier; Visit; Intervention Definition; Delivery Status; Start Time; End Time; Timed Minutes; Untimed Units; Body Region; Parameters; Delivering Provider; Supervising Provider; Patient Response; Goal Reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#intervention-delivery) | Intervention Delivery |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Therapy Visit](../provider-schedule/therapy-visit.md) | contains | [Intervention Delivery](intervention-delivery.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
| [Intervention Delivery](intervention-delivery.md) | instantiates | [Intervention Definition](intervention-definition.md) | M:1 | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
| [Intervention Delivery](intervention-delivery.md) | supports | [Therapy Goal](../plan-of-care/therapy-goal.md) | M:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
| [Intervention Delivery](intervention-delivery.md) | produces | [Therapy Charge](../therapy-charge/therapy-charge.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
