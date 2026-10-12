---
type: primary-entity
title: "Service Estimate"
---

# Service Estimate

Domain: [service-management](../README.md). ABE: [Service Estimate](README.md).

## Definition

A versioned pre-work proposal describing service scope, price, assumptions, validity and customer acceptance. Distinct from Invoice, Work Order, and regulated insurance Quote.

## Relationships

- Reuses canonical Party, Agreement, Service Request, Work Effort, Scheduling, and Finance concepts where applicable.
- Has zero or more associated records or references; the application must confirm cardinalities and ownership.

## Rules

Maintain immutable history when an accepted commercial offer, site assessment or service definition is revised. Do not equate planned work with executed work.
