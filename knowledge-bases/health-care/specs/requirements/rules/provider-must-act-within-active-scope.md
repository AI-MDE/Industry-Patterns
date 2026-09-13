---
type: business-rule
title: "Provider Must Act Within Active Scope"
description: "A Provider may perform or authorize care only within an active role, credential, organization, Location, and permitted scope."
tags: [health-care, industry-pattern, business-rule]
---

# Provider Must Act Within Active Scope

## Statement

A Provider may perform or authorize care only within an active role, credential, organization, Location, and permitted scope.

## Applies To

Clinical orders, procedures, service delivery, and finalization.

## Condition

Before the operation is accepted.

## Constraint / Result

Validate scope or reject and record the reason.

## Exceptions

Emergency exceptions must be policy-authorized and audited.
