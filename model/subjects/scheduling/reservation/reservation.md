---
type: entity
title: "Reservation"
---

# Reservation

Subject: [Scheduling and Reservations](../README.md). ABE: [Reservation](README.md).

Also known as: Inventory Reservation (E-Commerce), Material Reservation (Manufacturing), Resource Reservation (Telecommunications), Reservation (Travel).

## Definition and detail

A time-bounded allocation of a Resource to a Job Order.

Logical attributes: Reservation Identifier; Reservation Status; Resource; Job Order; Reserved From; Reserved Through; Quantity; Priority; Conflict Status.

### In industries

- **Inventory Reservation** (E-Commerce): A time-bounded hold of inventory for a Cart, Order Line, or Fulfillment Order. Attributes: Reservation Identifier; Reserved Quantity; Reservation Status; Reserved At; Expires At; Released At.
- **Material Reservation** (Manufacturing): A planned allocation of inventory to a Manufacturing Order or Operation. Attributes: Reservation Identifier; Order; Material Requirement; Inventory Item; Reserved Quantity; Status; Reserved At; Released At.
- **Resource Reservation** (Telecommunications): A temporary allocation of resource or capacity for an Order. Attributes: Reservation Identifier; Resource or Pool; Quantity; Service Order; Reserved From; Reserved Through; Status; Expiration.
- **Reservation** (Travel): A temporary or confirmed hold on supplier inventory before or as part of Booking. Attributes: Reservation Identifier; Reservation Reference; Reservation Status; Created At; Expires At; Supplier; Source System.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/crane-rental-orchestration.md](../../../../industry-patterns/crane-rental-orchestration.md#reservation) | Reservation |
| [industry-patterns/e-commerce.md](../../../../industry-patterns/e-commerce.md#inventory-reservation) | Inventory Reservation |
| [industry-patterns/manufacturing.md](../../../../industry-patterns/manufacturing.md#material-reservation) | Material Reservation |
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#resource-reservation) | Resource Reservation |
| [industry-patterns/travel.md](../../../../industry-patterns/travel.md#reservation) | Reservation |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Resource Requirement](../demand/requirement.md) | fulfilled by | Reservation | 1:M | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| Reservation | allocates | Asset, Component, Person, or service (review) | M:1 | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| Inventory Reservation | reserves | [Inventory Item](../../resource/inventory-item/inventory-item.md) | M:1 | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| [Order Line](../../request/order/order-line.md) | receives | Inventory Reservation | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| Resource Reservation | reserves | Network Resource or capacity (review) | M:1 | [telecommunications](../../../../industry-patterns/telecommunications.md) |
| Reservation | contains | [Reservation Item](../../../../industry-patterns/travel.md#concepts-applications-typically-add) | 1:M | [travel](../../../../industry-patterns/travel.md) |
