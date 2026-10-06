---
type: entity
title: "Related Person"
---

# Related Person

Domain: [Health Care](../README.md). ABE: [Patient](README.md).

Specializes: [Party Role](../../party/party/party-role.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A Person related to a Patient for care, consent, contact, or financial purposes.

Logical attributes: Related Person Identifier; Relationship Type; Relationship Status; Effective From; Effective Through; Contact Priority.

## Source terminology

| Source | Term |
|---|---|
| [patterns/health-care.md](../../../../patterns/health-care.md#related-person) | Related Person |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Patient](patient.md) | relates to | [Related Person](related-person.md) | M:M | [health-care](../../../../patterns/health-care.md) |
