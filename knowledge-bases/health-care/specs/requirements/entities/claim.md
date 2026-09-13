---
type: entity
title: "Claim"
description: "A request to a Payer for adjudication and payment of covered health-care Charges."
tags: [health-care, industry-pattern, entity]
---

# Claim

## Purpose

A request to a Payer for adjudication and payment of covered health-care Charges.

## Attributes

Claim Identifier; Number; Type; Status; Submitted Date; Service Period; Total Claimed Amount; Patient; Provider; Payer

## Relationships

Contains Claim Lines; references Coverage and Authorization; receives Adjudications and Payments.

## Operations

- assemble
- validate
- submit
- correct
- appeal
- void
- close

## States

draft; submitted; acknowledged; in-review; adjudicated; rejected; denied; partially-paid; paid; appealed; closed; voided

## Rules

- [claim-line-must-trace-to-delivered-service](../rules/claim-line-must-trace-to-delivered-service.md)
- [claim-totals-must-reconcile](../rules/claim-totals-must-reconcile.md)
