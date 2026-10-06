---
type: entity
title: "Medical Case"
description: "A managed body of work concerning a Patient condition, event, investigation, authorization, or service need."
tags: [health-care, industry-pattern, entity]
---

# Medical Case

## Canonical origin

This selected specification derives from [Medical Case](../../../../../model/requirements/health-care/encounter/medical-case.md). Its operations, states, rules, and selected attributes form the Health Care application projection.

## Purpose

A managed body of work concerning a Patient condition, event, investigation, authorization, or service need.

## Attributes

Case Identifier; Type; Status; Opened Date; Closed Date; Priority; Reason; Outcome

## Relationships

Concerns one Patient; is supported by a Care Team; groups Requests, Decisions, and evidence.

## Operations

- open
- assign
- add-evidence
- resolve
- close
- reopen

## States

open; assigned; investigating; decision-required; resolved; closed

## Rules

- [case-resolution-requires-evidence](../rules/case-resolution-requires-evidence.md)

