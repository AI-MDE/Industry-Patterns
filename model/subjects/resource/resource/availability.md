---
type: entity
title: "Availability"
---

# Availability

Subject: [Resources and Assets](../README.md). ABE: [Resource](README.md).

Also known as: Asset Availability (Crane Rental), Technician Availability (Equipment Service), Availability (Travel).

## Definition and detail

The periods and capacity during which a Resource may be allocated.

### In industries

- **Asset Availability** (Crane Rental): A derived or declared state indicating whether an Asset may be reserved or dispatched. Attributes: Availability Identifier; Asset; Availability Status; Effective From; Effective Through; Reason; Source; Restriction.
- **Technician Availability** (Equipment Service): Working periods, absences, and capacity during which a Technician can be assigned. Binds **Availability**.
- **Availability** (Travel): A statement or calculation of capacity available for a Product, Service Instance, room type, vehicle class, or allotment. Attributes: Availability Identifier; Inventory Type; Available Quantity; Held Quantity; Sold Quantity; Availability Status; Checked At; Source.

## Source terminology

| Source | Term |
|---|---|
| [modeling-patterns/service-scheduling.md](../../../../modeling-patterns/service-scheduling.md#availability) | Availability |
| [industry-patterns/crane-rental-orchestration.md](../../../../industry-patterns/crane-rental-orchestration.md#asset-availability) | Asset Availability |
| [industry-patterns/equipment-service.md](../../../../industry-patterns/equipment-service.md#technician-availability-standard) | Technician Availability (Standard) |
| [industry-patterns/travel.md](../../../../industry-patterns/travel.md#availability) | Availability |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Availability | describes | Service Instance or inventory class (review) | M:1 | [travel](../../../../industry-patterns/travel.md) |
