---
type: entity
title: "Product Genealogy"
---

# Product Genealogy

Domain: [Manufacturing](../README.md). ABE: [Quality Plan](README.md).

## Definition and detail

A traceable relationship showing which inputs, lots, serials, resources, and processes produced an output.

Logical attributes: Genealogy Identifier; Parent Output; Input Material or Output; Quantity; Operation; Consumed At; Traceability Type.

Rule: inspection, conformance decision, nonconformance, disposition, and corrective action require separate lifecycles.

## Source terminology

| Source | Term |
|---|---|
| [patterns/manufacturing.md](../../../../patterns/manufacturing.md#product-genealogy) | Product Genealogy |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Product Genealogy](product-genealogy.md) | links | Input to Output (review) | M:M | [manufacturing](../../../../patterns/manufacturing.md) |
