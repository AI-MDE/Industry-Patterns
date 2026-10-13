---
type: entity
title: "Service"
---

# Service

Subject: [Products, Offerings, and Prices](../README.md). ABE: [Product](README.md).

Also known as: Service Type (Equipment Service), Travel Service (Travel).

## Definition and detail

An act, capability, or continuing provision delivered for a beneficiary.

Logical attributes: Service Identifier; Service Name; Service Type; Service Status; Description; Service Level reference.

### In industries

- **Service Type** (Equipment Service): Configured classification of service work (repair, preventive maintenance, inspection, overhaul).
- **Travel Service** (Travel): A service capability supplied to a Traveler. Attributes: Service Identifier; Service Name; Service Type; Service Status; Supplier; Origin or Location; Destination; Standard Duration; Service Class.

## Service Scheduling context

An act or capability delivered for a client, beneficiary, site, asset, or other subject.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/cross-industry.md](../../../../industry-patterns/cross-industry.md#service) | Service |
| [modeling-patterns/service-scheduling.md](../../../../modeling-patterns/service-scheduling.md#service) | Service |
| [industry-patterns/equipment-service.md](../../../../industry-patterns/equipment-service.md#service-type) | Service Type |
| [industry-patterns/travel.md](../../../../industry-patterns/travel.md#travel-service) | Travel Service |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Travel Service | occurs as | [Service Instance](../../travel/scheduled-service/scheduled-service.md) | 1:M | [travel](../../../../industry-patterns/travel.md) |
