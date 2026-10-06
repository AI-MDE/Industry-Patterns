---
type: entity
title: "Appointment"
description: "A planned allocation of time and resources for a Patient to receive or discuss care."
tags: [health-care, industry-pattern, entity]
---

# Appointment

## Canonical origin

This selected specification derives from [Appointment](../../../../../model/requirements/health-care/schedule/appointment.md). Its operations, states, rules, and selected attributes form the Health Care application projection.

## Purpose

A planned allocation of time and resources for a Patient to receive or discuss care.

## Attributes

Appointment Identifier; Type; Status; Scheduled Start; Scheduled End; Priority; Reason; Channel; Cancellation Reason

## Relationships

Includes Patient, Provider, Location, and other participants; may result in Encounters.

## Operations

- request
- book
- reschedule
- cancel
- check-in
- mark-no-show

## States

proposed; booked; arrived; in-progress; fulfilled; waitlisted; no-show; cancelled

## Rules

- [appointment-must-respect-availability](../rules/appointment-must-respect-availability.md)

