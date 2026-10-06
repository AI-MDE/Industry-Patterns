---
type: primary-entity
title: "Intervention Definition"
---

# Intervention Definition

Domain: [Physical Therapy](../README.md). ABE: [Intervention Definition](README.md).

## Definition and detail

A governed type of therapeutic service or activity.

Logical attributes: Intervention Definition Identifier; Intervention Code; Intervention Name; Intervention Category; Description; Standard Unit; Required Provider Type; Status.

Categories may include therapeutic exercise, therapeutic activity, neuromuscular re-education, manual therapy, gait training, self-care education, modalities, group therapy, and remote monitoring.

## Source terminology

| Source | Term |
|---|---|
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#intervention-definition) | Intervention Definition |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Intervention Delivery](intervention-delivery.md) | instantiates | [Intervention Definition](intervention-definition.md) | M:1 | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
