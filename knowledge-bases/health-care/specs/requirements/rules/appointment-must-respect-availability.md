---
type: business-rule
title: "Appointment Must Respect Availability"
description: "A booked Appointment must fit the declared availability and capacity of all required participants and resources."
tags: [health-care, industry-pattern, business-rule]
---

# Appointment Must Respect Availability

## Statement

A booked Appointment must fit the declared availability and capacity of all required participants and resources.

## Applies To

Appointment booking and rescheduling.

## Condition

Before status becomes booked.

## Constraint / Result

Reserve required capacity or reject with alternatives.

## Exceptions

Authorized overbooking policy.
