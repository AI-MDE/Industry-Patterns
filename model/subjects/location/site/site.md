---
type: entity
title: "Site"
---

# Site

Subject: [Locations and Sites](../README.md). ABE: [Site](README.md).

Also known as: Service Site (Service Management), Job Site (Crane Rental), Service Location (Telecommunications).

## Definition and detail

An identifiable location where work or services are planned or delivered. The service site is not necessarily owned by the customer, nor is it the customer's billing address.

### In industries

- **Job Site** (Crane Rental): A physical location where equipment is delivered, assembled, operated, stored, or removed. Attributes: Site Identifier; Site Name; Address or Coordinates; Site Type; Access Window; Operating Hours; Site Contact; Jurisdiction; Status.
- **Service Location** (Telecommunications): A physical, geographic, virtual, or logical place where service is delivered or terminated. Attributes: Location Identifier; Location Type; Address or Coordinates; Premises; Building; Floor; Room; Coverage Zone; Validation Status.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/crane-rental-orchestration.md](../../../../industry-patterns/crane-rental-orchestration.md#job-site) | Job Site |
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#service-location) | Service Location |

## Relationships

- References a canonical geographic location and may refer to facilities or spaces.
- Associates customers and responsible parties through roles.
- Is referenced by service requests, service plans and visits.
- Equipment installed at the site retains its own asset identity and service history.

## Rules

Never silently assume the billing address is the service location. Preserve service history when site occupants or customer roles change.
