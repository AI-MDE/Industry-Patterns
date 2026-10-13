---
type: entity
title: "Equipment"
---

# Equipment

Subject: [Resources and Assets](../README.md). ABE: [Equipment Model](README.md).

Also known as: Crane Asset (Crane Rental), Equipment (Equipment Service), Machine Asset (Manufacturing), Tool (Manufacturing).

## Definition and detail

An individually controlled fleet asset.

Logical attributes: Asset Identifier; Fleet Number; Serial Number; Equipment Model; Ownership Type; Asset Status; Home Branch; Current Location; Commissioned Date; Meter Reading; Certification Status.

### In industries

- **Equipment** (Equipment Service): A specific physical item, identified by serial number, instance of one Equipment Model, owned by or registered to one Customer. It is the subject of service history and of agreements.
- **Machine Asset** (Manufacturing): An individual production machine, line, cell, device, or equipment asset. Attributes: Asset Identifier; Asset Number; Asset Type; Model; Serial Number; Status; Work Center; Commissioned Date; Meter Reading.
- **Tool** (Manufacturing): A controlled die, fixture, mold, gauge, cutter, program, or other production aid. Attributes: Tool Identifier; Tool Type; Tool Number; Revision; Status; Current Location; Life Limit; Usage Count; Calibration Due.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/crane-rental-orchestration.md](../../../../industry-patterns/crane-rental-orchestration.md#crane-asset) | Crane Asset |
| [industry-patterns/equipment-service.md](../../../../industry-patterns/equipment-service.md#equipment) | Equipment |
| [industry-patterns/manufacturing.md](../../../../industry-patterns/manufacturing.md#machine-asset) | Machine Asset |
| [industry-patterns/manufacturing.md](../../../../industry-patterns/manufacturing.md#tool) | Tool |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Work Center](../../production/work-center/work-center.md) | contains | Machine Asset | 1:M | [manufacturing](../../../../industry-patterns/manufacturing.md) |
