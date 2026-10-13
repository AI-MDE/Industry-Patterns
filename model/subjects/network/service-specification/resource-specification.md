---
type: entity
title: "Resource Specification"
---

# Resource Specification

Subject: [Service Provisioning and Networks](../README.md). ABE: [Service Specification](README.md).

## Definition and detail

A reusable definition of a physical, logical, virtual, software, identifier, or capacity resource.

Logical attributes: Resource Specification Identifier; Name; Resource Type; Version; Status; Capacity Type; Compatibility Rule; Effective From; Effective Through.

Rule: commercial Product, Product Offering, technical Service Specification, and Resource Specification are separate layers connected by governed mappings.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#resource-specification) | Resource Specification |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Service Specification](service-specification.md) | requires | Resource Specification | M:M | [telecommunications](../../../../industry-patterns/telecommunications.md) |
