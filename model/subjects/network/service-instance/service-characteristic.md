---
type: entity
title: "Service Characteristic"
---

# Service Characteristic

Subject: [Service Provisioning and Networks](../README.md). ABE: [Service Instance](README.md).

## Definition and detail

An effective value configuring or describing a Service.

Logical attributes: Characteristic Identifier; Characteristic Name; Value; Unit; Effective From; Effective Through; Source; Configuration Status.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#service-characteristic) | Service Characteristic |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Service Instance](service-instance.md) | has | Service Characteristic | 1:M | [telecommunications](../../../../industry-patterns/telecommunications.md) |
