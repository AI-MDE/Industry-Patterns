---
type: entity
title: "Clinic Location"
---

# Clinic Location

Domain: [Physical Therapy](../README.md). ABE: [Physical Therapy Clinic](README.md).

Specializes: [Geographic Location](../../party/contact-mechanism/geographic-location.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A physical, mobile, home-care, or virtual setting in which clinic services are organized or delivered.

Logical attributes: Location Identifier; Location Name; Location Type; Address or Virtual Endpoint; Accessibility Features; Time Zone; Capacity; Operational Status.

## Source terminology

| Source | Term |
|---|---|
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#clinic-location) | Clinic Location |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Physical Therapy Clinic](physical-therapy-clinic.md) | operates | [Clinic Location](clinic-location.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
