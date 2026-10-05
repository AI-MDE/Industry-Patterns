---
type: entity
title: "Job Site"
---

# Job Site

Domain: [Crane Rental](../README.md). ABE: [Customer Account](README.md).

Specializes: [Geographic Location](../../party/contact-mechanism/geographic-location.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A physical location where equipment is delivered, assembled, operated, stored, or removed.

Logical attributes: Site Identifier; Site Name; Address or Coordinates; Site Type; Access Window; Operating Hours; Site Contact; Jurisdiction; Status.

## Source terminology

| Source | Term |
|---|---|
| [patterns/crane-rental-orchestration.md](../../../../patterns/crane-rental-orchestration.md#job-site) | Job Site |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Lift Request](../lift-request/lift-request.md) | concerns | [Job Site](job-site.md) | M:1 | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
