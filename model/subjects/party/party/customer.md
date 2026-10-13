---
type: entity
title: "Customer"
---

# Customer

Subject: [Parties and Roles](../README.md). ABE: [Party](README.md).

Also known as: Client (Professional Services).

## Definition and detail

Party whose equipment is serviced or supplied. Specializes cross-industry Party in a customer role.

### In industries

- **Client** (Professional Services): Person or organization receiving professional services. Attributes: Client Identifier; Client Name; Client Type; Client Status; Primary Contact Name; Primary Email Address; Primary Phone Number; Billing Address.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/equipment-service.md](../../../../industry-patterns/equipment-service.md#customer) | Customer |
| [industry-patterns/professional-services.md](../../../../industry-patterns/professional-services.md#detailed-logical-model) | Client |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Client | has | Client Contact (review) | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
| Client | sponsors | [Engagement](../../agreement/agreement/engagement.md) | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
| Client | receives | [Invoice](../../finance/invoice/invoice.md) | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
