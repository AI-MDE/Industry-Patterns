---
type: entity
title: "Coverage"
description: "A Patient entitlement to funded or insured services."
tags: [health-care, industry-pattern, entity]
---

# Coverage

## Canonical origin

This selected specification derives from [Coverage](../../../../../model/requirements/health-care/coverage/coverage.md). Its operations, states, rules, and selected attributes form the Health Care application projection.

## Purpose

A Patient entitlement to funded or insured services.

## Attributes

Coverage Identifier; Type; Status; Subscriber Identifier; Member Identifier; Effective From; Effective Through; Payer; Plan Reference

## Relationships

Covers a Patient; may govern Authorizations and Claims.

## Operations

- record
- verify
- activate
- terminate

## States

draft; active; suspended; terminated; entered-in-error

## Rules

- [coverage-must-be-effective-on-service-date](../rules/coverage-must-be-effective-on-service-date.md)

