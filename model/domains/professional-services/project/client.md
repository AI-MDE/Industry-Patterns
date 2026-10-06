---
type: entity
title: "Client"
---

# Client

Domain: [Professional Services](../README.md). ABE: [Project](README.md).

Specializes: [Party Role](../../party/party/party-role.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

Person or organization receiving professional services.

Logical attributes: Client Identifier; Client Name; Client Type; Client Status; Primary Contact Name; Primary Email Address; Primary Phone Number; Billing Address.

## Source terminology

| Source | Term |
|---|---|
| [patterns/professional-services.md](../../../../patterns/professional-services.md#detailed-logical-model) | Client |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Client](client.md) | has | Client Contact (review) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
| [Client](client.md) | sponsors | [Engagement](engagement.md) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
| [Client](client.md) | receives | [Invoice](../../finance/invoice/invoice.md) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
