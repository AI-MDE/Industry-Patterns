---
type: entity
title: "Claim Line"
description: "A detailed service or Charge submitted within a Claim."
tags: [health-care, industry-pattern, entity]
---

# Claim Line

## Purpose

A detailed service or Charge submitted within a Claim.

## Attributes

Claim Line Identifier; Line Number; Service Code; Service Date; Quantity; Claimed Amount; Diagnosis Reference; Authorization Reference

## Relationships

Belongs to one Claim; references a Service Delivery or Charge; receives line adjudication.

## Operations

- add
- validate
- adjust
- remove-before-submission

## States

draft; validated; submitted; adjudicated; denied; paid

## Rules

- [claim-line-must-trace-to-delivered-service](../rules/claim-line-must-trace-to-delivered-service.md)
