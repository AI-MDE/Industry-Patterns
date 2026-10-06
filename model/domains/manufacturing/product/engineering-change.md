---
type: entity
title: "Engineering Change"
---

# Engineering Change

Domain: [Manufacturing](../README.md). ABE: [Product](README.md).

## Definition and detail

A governed proposal and decision changing a Product, Part, BOM, Specification, process, document, or effectivity.

Logical attributes: Change Identifier; Change Number; Change Type; Change Status; Requested Date; Reason; Impact; Disposition; Approved Date; Effective Date.

Rule: Product, Product Version, Part, Part Revision, Specification, and BOM Version are distinct. Historical production must retain the definitions effective when work was executed.

## Source terminology

| Source | Term |
|---|---|
| [patterns/manufacturing.md](../../../../patterns/manufacturing.md#engineering-change) | Engineering Change |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Engineering Change](engineering-change.md) | changes | Product, Part, BOM, Routing, or Specification (review) | M:M | [manufacturing](../../../../patterns/manufacturing.md) |
