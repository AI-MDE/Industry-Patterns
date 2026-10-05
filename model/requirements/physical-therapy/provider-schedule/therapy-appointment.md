---
type: entity
title: "Therapy Appointment"
---

# Therapy Appointment

Domain: [Physical Therapy](../README.md). ABE: [Provider Schedule](README.md).

Specializes: [Appointment](../../health-care/schedule/appointment.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A planned allocation of time, Provider, Patient, Location, and resources.

Logical attributes: Appointment Identifier; Appointment Type; Appointment Status; Scheduled Start; Scheduled End; Patient; Provider; Location; Episode; Reason; Channel.

## Source terminology

| Source | Term |
|---|---|
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#therapy-appointment) | Therapy Appointment |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Therapy Appointment](therapy-appointment.md) | may result in | [Therapy Visit](therapy-visit.md) | 1:0..1 | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
