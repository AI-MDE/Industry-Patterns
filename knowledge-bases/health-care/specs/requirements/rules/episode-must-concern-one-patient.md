---
type: business-rule
title: "Episode Must Concern One Patient"
description: "An Episode of Care belongs to exactly one Patient identity."
tags: [health-care, industry-pattern, business-rule]
---

# Episode Must Concern One Patient

## Statement

An Episode of Care belongs to exactly one Patient identity.

## Applies To

Episode of Care.

## Condition

An Episode is created or reassigned.

## Constraint / Result

Require one Patient and preserve history when correcting identity.

## Exceptions

Population programs are modeled separately, not as Patient Episodes.
