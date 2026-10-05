---
type: entity
title: "Agreement Role"
---

# Agreement Role

Domain: [Agreement](../README.md). ABE: [Agreement](README.md).

## Definition and detail

The capacity in which a Party participates in an Agreement.

Logical attributes: Agreement Role Identifier; Role Type; Effective From; Effective Through.

Examples: buyer, seller, policyholder, insurer, client, provider, guarantor, or beneficiary.

## Equipment Service context

Capacity in which a party participates in an agreement (buyer, seller, lessee, lessor, guarantor).

## Source terminology

| Source | Term |
|---|---|
| [patterns/cross-industry.md](../../../../patterns/cross-industry.md#agreement-role) | Agreement Role |
| [patterns/equipment-service.md](../../../../patterns/equipment-service.md#agreement-role) | Agreement Role |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Agreement](agreement.md) | includes | [Agreement Role](agreement-role.md) | 1:M | [cross-industry](../../../../patterns/cross-industry.md) |
| [Party](../../party/party/party.md) | participates through | [Agreement Role](agreement-role.md) | 1:M | [cross-industry](../../../../patterns/cross-industry.md) |
