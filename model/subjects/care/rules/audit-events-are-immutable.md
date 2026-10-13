---
type: business-rule
title: "Audit Events Are Immutable"
description: "Recorded Audit Events cannot be altered or deleted through normal business operations."
tags: [health-care, canonical-model, business-rule]
---

# Audit Events Are Immutable

## Statement

Recorded Audit Events cannot be altered or deleted through normal business operations.

## Applies To

Audit Event.

## Condition

After the event is recorded.

## Constraint / Result

Corrections append linked evidence; original evidence remains.

## Exceptions

Legally required disposition follows a separately governed retention operation.

## Canonical entities

- [Audit Event](../../information/consent/audit-event.md)
