---
type: business-rule
title: "Service Location Must Be Operational"
description: "A service may be scheduled or delivered at a Location only when that Location is operational for the service and time."
tags: [health-care, industry-pattern, business-rule]
---

# Service Location Must Be Operational

## Statement

A service may be scheduled or delivered at a Location only when that Location is operational for the service and time.

## Applies To

Appointment, Encounter, and Service Delivery.

## Condition

A physical or virtual Location is selected.

## Constraint / Result

Validate status, capacity, service support, and effective period.

## Exceptions

Authorized emergency or downtime procedure.
