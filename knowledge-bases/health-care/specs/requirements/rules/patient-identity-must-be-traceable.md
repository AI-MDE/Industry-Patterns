---
type: business-rule
title: "Patient Identity Must Be Traceable"
description: "Every Patient record must retain stable identity and the provenance of all assigned external identifiers."
tags: [health-care, industry-pattern, business-rule]
---

# Patient Identity Must Be Traceable

## Statement

Every Patient record must retain stable identity and the provenance of all assigned external identifiers.

## Applies To

Patient registration, matching, merge, split, and import.

## Condition

Whenever identity is established or changed.

## Constraint / Result

Preserve prior identifiers, source, decision, and effective dates; never silently overwrite identity history.

## Exceptions

None; emergency provisional identity is explicitly marked and later reconciled.
