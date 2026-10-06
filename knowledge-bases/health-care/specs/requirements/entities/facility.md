---
type: entity
title: "Facility"
description: "A physical or virtual environment operated for care delivery."
tags: [health-care, industry-pattern, entity]
---

# Facility

## Canonical origin

This selected specification derives from [Facility](../../../../../model/requirements/health-care/health-care-organization/facility.md). Its operations, states, rules, and selected attributes form the Health Care application projection.

## Purpose

A physical or virtual environment operated for care delivery.

## Attributes

Facility Identifier; Name; Type; Status; Operator Organization; Contact

## Relationships

Contains Locations; hosts Appointments, Encounters, and Service Deliveries.

## Operations

- register
- activate
- suspend
- add-location

## States

planned; active; suspended; closed

## Rules

- [service-location-must-be-operational](../rules/service-location-must-be-operational.md)

