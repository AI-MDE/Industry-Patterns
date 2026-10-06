---
type: entity
title: "Release for Service"
---

# Release for Service

Domain: [Crane Rental](../README.md). ABE: [Delivery](README.md).

## Definition and detail

An authorized decision that Equipment and required conditions are acceptable for a defined operational scope and time.

Logical attributes: Release Identifier; Release Status; Released At; Released By; Asset; Configuration; Job Order; Scope; Conditions; Expiration.

Rule: arrival at site, setup completion, inspection completion, and release for service are distinct events.

## Source terminology

| Source | Term |
|---|---|
| [patterns/crane-rental-orchestration.md](../../../../patterns/crane-rental-orchestration.md#release-for-service) | Release for Service |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Release for Service](release-for-service.md) | applies to | Asset and Configuration (review) | M:1 each | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
