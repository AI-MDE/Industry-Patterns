---
type: entity
title: "Equipment Component"
---

# Equipment Component

Subject: [Resources and Assets](../README.md). ABE: [Equipment Model](README.md).

## Definition and detail

A separately controlled component, attachment, or accessory.

Logical attributes: Component Identifier; Component Type; Serial or Fleet Number; Status; Current Location; Compatible Model; Certification Status.

Examples: boom section, jib, counterweight, outrigger mat, hook block, personnel platform, spreader beam, sling set, or remote control.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/crane-rental-orchestration.md](../../../../industry-patterns/crane-rental-orchestration.md#equipment-component) | Equipment Component |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Crane Configuration](equipment-configuration.md) | contains | Equipment Component | M:M | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
