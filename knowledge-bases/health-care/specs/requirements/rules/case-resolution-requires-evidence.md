---
type: business-rule
title: "Case Resolution Requires Evidence"
description: "A Medical Case cannot be resolved without a recorded outcome, decision reason, and supporting evidence."
tags: [health-care, industry-pattern, business-rule]
---

# Case Resolution Requires Evidence

## Statement

A Medical Case cannot be resolved without a recorded outcome, decision reason, and supporting evidence.

## Applies To

Medical Case resolution.

## Condition

Before status becomes resolved.

## Constraint / Result

Require outcome and evidence references.

## Exceptions

Administrative cancellation uses a cancellation reason instead.
