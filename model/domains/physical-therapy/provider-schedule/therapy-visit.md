---
type: entity
title: "Therapy Visit"
---

# Therapy Visit

Domain: [Physical Therapy](../README.md). ABE: [Provider Schedule](README.md).

Specializes: [Encounter](../../health-care/encounter/encounter.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

The actual bounded care interaction during which physical therapy is evaluated, delivered, discussed, or documented.

Logical attributes: Visit Identifier; Visit Type; Visit Status; Start Date/Time; End Date/Time; Patient; Episode; Treating Provider; Supervising Provider; Location or Channel; Visit Number; Disposition.

Visit types may include initial evaluation, treatment, progress evaluation, re-evaluation, group therapy, aquatic therapy, home visit, tele-rehabilitation, and discharge visit.

## Source terminology

| Source | Term |
|---|---|
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#therapy-visit) | Therapy Visit |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Therapy Appointment](therapy-appointment.md) | may result in | [Therapy Visit](therapy-visit.md) | 1:0..1 | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
| [Therapy Episode](../therapy-episode/therapy-episode.md) | contains | [Therapy Visit](therapy-visit.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
| [Therapy Visit](therapy-visit.md) | has | [Visit Note](visit-note.md) | 1:M versions | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
| [Therapy Visit](therapy-visit.md) | contains | [Intervention Delivery](../intervention-definition/intervention-delivery.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
