---
type: business-rule
title: "Claim Line Must Trace To Delivered Service"
description: "Every Claim Line must trace to a documented Service Delivery or valid Charge."
tags: [health-care, industry-pattern, business-rule]
---

# Claim Line Must Trace To Delivered Service

## Statement

Every Claim Line must trace to a documented Service Delivery or valid Charge.

## Applies To

Claim assembly and submission.

## Condition

Before a Claim Line is validated.

## Constraint / Result

Require service, Patient, Provider, date, quantity, coding, and authorization evidence.

## Exceptions

Permitted administrative charges require their own documented source.
