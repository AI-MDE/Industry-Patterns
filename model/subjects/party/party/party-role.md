---
type: entity
title: "Party Role"
---

# Party Role

Subject: [Parties and Roles](../README.md). ABE: [Party](README.md).

Also known as: Account Party (Financial Services), Payment Party (Financial Services), Appointment Participant (Health Care), Care Team Member (Health Care), Claim Party (Insurance), Booking Party (Travel).

## Definition and detail

The capacity in which a Party participates in a context, such as Customer, Supplier, Employee, Provider, Insurer, Patient, Professional, or Account Holder.

Logical attributes: Party Role Identifier; Role Type; Role Status; Effective From; Effective Through.

Rule: a Party is not permanently equated with one role. The same Party may perform several roles concurrently or over time.

### In industries

- **Account Party** (Financial Services): A Party participating in an Account in a stated role. Attributes: Account Party Identifier; Role Type; Role Status; Ownership Percentage; Authority Level; Effective From; Effective Through.
- **Payment Party** (Financial Services): A Party participating in a Payment Order in a specified role. Attributes: Payment Party Identifier; Role Type; Party; Account Reference; Institution Reference; Name and Address Snapshot; Effective Time.
- **Appointment Participant** (Health Care): A Patient, Provider, Related Person, Location, device, interpreter, or other resource expected to participate. Attributes: Participant Identifier; Participant Type; Participation Status; Required Indicator; Response Date.
- **Care Team Member** (Health Care): A Party Role's participation in a Care Team. Attributes: Membership Identifier; Team Role; Membership Status; Effective From; Effective Through; Responsibility.
- **Claim Party** (Insurance): A Party participating in the Claim in a stated role. Attributes: Claim Party Identifier; Role Type; Role Status; Effective From; Effective Through; Representation Reference.
- **Booking Party** (Travel): A Party participating in a Booking in a stated role. Attributes: Booking Party Identifier; Role Type; Role Status; Effective From; Effective Through; Contact Reference.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/cross-industry.md](../../../../industry-patterns/cross-industry.md#party-role) | Party Role |
| [industry-patterns/financial-services.md](../../../../industry-patterns/financial-services.md#account-party) | Account Party |
| [industry-patterns/financial-services.md](../../../../industry-patterns/financial-services.md#payment-party) | Payment Party |
| [industry-patterns/health-care.md](../../../../industry-patterns/health-care.md#appointment-participant) | Appointment Participant |
| [industry-patterns/health-care.md](../../../../industry-patterns/health-care.md#care-team-member) | Care Team Member |
| [industry-patterns/insurance.md](../../../../industry-patterns/insurance.md#claim-party) | Claim Party |
| [industry-patterns/travel.md](../../../../industry-patterns/travel.md#booking-party) | Booking Party |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Party](party.md) | performs | Party Role | 1:M | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| Party Role | relates to | Party Role | M:M through Party Relationship | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| Party Role | receives | [Assignment](../../work/work-effort/assignment.md) | 1:M | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| [Account](../../accounts/financial-agreement/account.md) | has | Account Party | 1:M | [financial-services](../../../../industry-patterns/financial-services.md) |
| [Payment Order](../../accounts/payment-order/payment-order.md) | has | Payment Party | 1:M | [financial-services](../../../../industry-patterns/financial-services.md) |
| [Appointment](../../scheduling/appointment/appointment.md) | includes | Appointment Participant | 1:M | [health-care](../../../../industry-patterns/health-care.md) |
| [Care Team](../../care/encounter/care-team.md) | contains | Care Team Member | 1:M | [health-care](../../../../industry-patterns/health-care.md) |
| [Claim](../../coverage/coverage/claim.md) | has | Claim Party | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
| [Booking](../../travel/booking/booking.md) | has | Booking Party | 1:M | [travel](../../../../industry-patterns/travel.md) |

## Integrity rules

- Every Party Role must reference exactly one Party.
