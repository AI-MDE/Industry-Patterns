---
type: entity
title: "Provider"
description: "A Party authorized or assigned to deliver, order, supervise, interpret, or coordinate care."
tags: [health-care, industry-pattern, entity]
---

# Provider

## Canonical origin

This selected specification derives from [Provider](../../../../../model/requirements/health-care/health-care-organization/provider.md). Its operations, states, rules, and selected attributes form the Health Care application projection.

## Purpose

A Party authorized or assigned to deliver, order, supervise, interpret, or coordinate care.

## Attributes

Provider Identifier; Provider Type; Status; Specialty; License Reference; Effective From; Effective Through

## Relationships

Performs Practitioner Roles; participates in Encounters; authors Requests, Observations, Diagnoses, Procedures, and Notes.

## Operations

- register
- verify-credential
- assign-role
- suspend-role

## States

proposed; active; suspended; inactive

## Rules

- [provider-must-act-within-active-scope](../rules/provider-must-act-within-active-scope.md)

