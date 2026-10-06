---
type: entity
title: "Patient"
description: "A Person acting as the subject or recipient of health care."
tags: [health-care, industry-pattern, entity]
---

# Patient

## Canonical origin

This selected specification derives from [Patient](../../../../../model/requirements/health-care/patient/patient.md). Its operations, states, rules, and selected attributes form the Health Care application projection.

## Purpose

A Person acting as the subject or recipient of health care.

## Attributes

Patient Identifier; Status; Date of Birth; Administrative Sex; Preferred Name; Preferred Language; Deceased Indicator; Primary Contact

## Relationships

Has Patient Identifiers, Appointments, Encounters, Conditions, Episodes, Cases, Care Plans, Consents, and Coverages.

## Operations

- register
- update-demographics
- reconcile-identity
- record-related-person

## States

active; inactive; deceased; entered-in-error

## Rules

- [patient-identity-must-be-traceable](../rules/patient-identity-must-be-traceable.md)
- [minimum-necessary-access](../rules/minimum-necessary-access.md)

