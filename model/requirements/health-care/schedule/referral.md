---
type: entity
title: "Referral"
---

# Referral

Domain: [Health Care](../README.md). ABE: [Schedule](README.md).

Specializes: [Request](../../request-and-fulfillment/request/request.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

A Provider's request that another Provider or Organization evaluate, advise, or deliver care.

Logical attributes: Referral Identifier; Referral Type; Referral Status; Requested Date; Priority; Reason; Referred From; Referred To; Expiration Date.

## Physical Therapy context

A request or recommendation for physical therapy evaluation or treatment.

Logical attributes: Referral Identifier; Referral Type; Referral Status; Referral Date; Referring Provider; Reason; Diagnosis or Concern; Requested Service; Priority; Expiration Date; Visit Limit.

Referral types may include physician referral, internal referral, self-referral, employer referral, insurer referral, or post-operative protocol.

## Source terminology

| Source | Term |
|---|---|
| [patterns/health-care.md](../../../../patterns/health-care.md#referral) | Referral |
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#referral) | Referral |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Referral](referral.md) | may initiate | [Therapy Episode](../../physical-therapy/therapy-episode/therapy-episode.md) | 1:0..M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
