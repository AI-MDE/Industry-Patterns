---
type: entity
title: "Authorization"
description: "A decision permitting specified care or financial coverage under stated conditions."
tags: [health-care, industry-pattern, entity]
---

# Authorization

## Purpose

A decision permitting specified care or financial coverage under stated conditions.

## Attributes

Authorization Identifier; Number; Type; Status; Requested Date; Decision Date; Effective From; Effective Through; Authorized Quantity; Conditions

## Relationships

Concerns a Patient and Coverage; authorizes Service Requests or Deliveries.

## Operations

- request
- review
- approve
- deny
- amend
- revoke
- expire

## States

draft; requested; in-review; approved; partially-approved; denied; expired; revoked

## Rules

- [authorization-does-not-replace-consent](../rules/authorization-does-not-replace-consent.md)
- [authorized-service-must-match-conditions](../rules/authorized-service-must-match-conditions.md)
