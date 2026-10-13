# Insurance Model Pattern

## Intent

Model insurers and intermediaries that define insurance products, evaluate risk, issue and maintain policies, collect premium, receive and investigate claims, determine coverage and liability, establish reserves, settle losses, recover amounts, and meet regulatory and financial obligations.

This pattern specializes the Cross-Industry Party, Role, Product, Offering, Agreement, Classification, Event, Status, Charge, Invoice, Payment, Work Effort, and Outcome concepts.

## Business overview

**Need/Risk → Product/Quote → Application → Underwriting → Policy/Coverage → Premium → Loss → Claim → Assessment → Reserve → Settlement/Recovery**

An Insurer defines Insurance Products and Offerings. An Applicant supplies risk information through an Application and may receive one or more Quotes. Underwriting evaluates the risk and makes an explainable decision. An accepted offer produces a Policy containing Coverages, terms, limits, deductibles, insured Parties, and insured Objects. Premium and billing obligations arise during the Policy period. A Loss Event may produce one or more Claims. Each Claim evaluates policy status, coverage, causation, liability, damages, fraud indicators, and required evidence. The Insurer establishes reserves, approves or denies covered amounts, makes payments, and may pursue recovery or subrogation.

## Pattern variants

### Simple

Use for a focused prototype or one line of business.

Core concepts: Customer; Insurance Product; Quote; Policy; Coverage; Insured Object; Premium; Claim; Claim Assessment; Claim Payment.

### Standard

Use as the default for an operational insurance application.

Adds: Insurer; Producer; Applicant; Application; Underwriting Case; Underwriting Decision; Policy Party; Policy Term; Coverage Term; Exclusion; Endorsement; Risk Item; Billing Account; Premium Transaction; Loss Event; Claim Party; Claim Exposure; Claim Assignment; Claim Note; Evidence Item; Reserve; Settlement; Recovery.

### Enterprise

Use for multiple legal entities, products, jurisdictions, distribution channels, complex claims, reinsurance, or regulated financial reporting.

Adds: Product Version; Rating Plan; Rating Factor; Rate Table; Distribution Agreement; Commission; Authority Limit; Portfolio; Catastrophe Event; Litigation; Fraud Referral; Salvage; Subrogation; Reinsurance Contract; Reinsurance Coverage; Cession; Reinsurance Claim; Regulatory Classification; Financial Posting; Actuarial Measure.

## Insurance roles

See [canonical insurance roles](../model/domains/insurance/behavior.md#insurance-roles).

## Product and offering concepts

### Insurance Product

Canonical concept: [Insurance Product](../model/domains/insurance/insurance-product/insurance-product.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Product Version

Canonical concept: [Product Version](../model/domains/insurance/insurance-product/product-version.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Insurance Offering

Canonical concept: [Insurance Offering](../model/domains/insurance/insurance-product/insurance-offering.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Coverage Definition

Canonical concept: [Coverage Definition](../model/domains/insurance/insurance-product/coverage-definition.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Policy Form

Canonical concept: [Policy Form](../model/domains/insurance/insurance-product/policy-form.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Rating Plan

Canonical concept: [Rating Plan](../model/domains/insurance/insurance-product/rating-plan.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Rating Factor

Canonical concept: [Rating Factor](../model/domains/insurance/insurance-product/rating-factor.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Quote, application, and underwriting

### Quote

Canonical concept: [Quote](../model/domains/insurance/quote/quote.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Quote Option

Canonical concept: [Quote Option](../model/domains/insurance/quote/quote-option.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Insurance Application

Canonical concept: [Insurance Application](../model/domains/insurance/quote/insurance-application.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Application Answer

Canonical concept: [Application Answer](../model/domains/insurance/quote/application-answer.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Risk Item

Canonical concept: [Risk Item](../model/domains/insurance/quote/risk-item.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Underwriting Case

Canonical concept: [Underwriting Case](../model/domains/insurance/quote/underwriting-case.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Underwriting Requirement

Canonical concept: [Underwriting Requirement](../model/domains/insurance/quote/underwriting-requirement.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Underwriting Decision

Canonical concept: [Underwriting Decision](../model/domains/insurance/quote/underwriting-decision.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Policy and coverage concepts

### Policy

Canonical concept: [Policy](../model/domains/insurance/policy/policy.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Policy Period

Canonical concept: [Policy Period](../model/domains/insurance/policy/policy-period.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Policy Party

Canonical concept: [Policy Party](../model/domains/insurance/policy/policy-party.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Coverage

Canonical concept: [Coverage](../model/domains/insurance/policy/coverage.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Coverage Term

Canonical concept: [Coverage Term](../model/domains/insurance/policy/coverage-term.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Exclusion

Canonical concept: [Exclusion](../model/domains/insurance/policy/exclusion.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Insured Object

Canonical concept: [Insured Object](../model/domains/insurance/policy/insured-object.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Policy Transaction

Canonical concept: [Policy Transaction](../model/domains/insurance/policy/policy-transaction.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Endorsement

Canonical concept: [Endorsement](../model/domains/insurance/policy/endorsement.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Premium, billing, and commission

### Premium

Canonical concept: [Premium](../model/domains/insurance/premium/premium.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Premium Transaction

Canonical concept: [Premium Transaction](../model/domains/insurance/premium/premium-transaction.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Billing Account

Canonical concept: [Billing Account](../model/domains/insurance/premium/billing-account.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Invoice

Canonical concept: [Invoice](../model/domains/finance/invoice/invoice.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Payment

Canonical concept: [Payment](../model/domains/finance/invoice/payment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Commission

Canonical concept: [Commission](../model/domains/insurance/premium/commission.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Loss and claim concepts

### Loss Event

Canonical concept: [Loss Event](../model/domains/insurance/loss-event/loss-event.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Claim

Canonical concept: [Claim](../model/domains/insurance/loss-event/claim.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Claim Party

Canonical concept: [Claim Party](../model/domains/insurance/loss-event/claim-party.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Claim Exposure

Canonical concept: [Claim Exposure](../model/domains/insurance/loss-event/claim-exposure.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Claim Assignment

Canonical concept: [Claim Assignment](../model/domains/insurance/loss-event/claim-assignment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Claim Assessment

Canonical concept: [Claim Assessment](../model/domains/insurance/loss-event/claim-assessment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Evidence Item

Canonical concept: [Evidence Item](../model/domains/insurance/loss-event/evidence-item.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Claim Note

Canonical concept: [Claim Note](../model/domains/insurance/loss-event/claim-note.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Reserve

Canonical concept: [Reserve](../model/domains/insurance/loss-event/reserve.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Settlement

Canonical concept: [Settlement](../model/domains/insurance/loss-event/settlement.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Claim Payment

Canonical concept: [Claim Payment](../model/domains/insurance/loss-event/claim-payment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Recovery

Canonical concept: [Recovery](../model/domains/insurance/loss-event/recovery.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Reinsurance concepts

### Reinsurance Contract

Canonical concept: [Reinsurance Contract](../model/domains/insurance/reinsurance-contract/reinsurance-contract.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Reinsurance Coverage

Canonical concept: [Reinsurance Coverage](../model/domains/insurance/reinsurance-contract/reinsurance-coverage.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Cession

Canonical concept: [Cession](../model/domains/insurance/reinsurance-contract/cession.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Reinsurance Claim

Canonical concept: [Reinsurance Claim](../model/domains/insurance/reinsurance-contract/reinsurance-claim.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Relationship model

See [canonical relationship model](../model/domains/insurance/behavior.md#relationship-model).

## Lifecycle models

See [canonical lifecycle models](../model/domains/insurance/behavior.md#lifecycle-models).

## Business events

See [canonical business events](../model/domains/insurance/behavior.md#business-events).

## Baseline business and integrity rules

See [canonical baseline business and integrity rules](../model/domains/insurance/behavior.md#baseline-business-and-integrity-rules).

## AI modeling questions

1. Which insurance lines are in scope: property, casualty, auto, liability, health, life, disability, travel, specialty, or another line?
2. Is the organization an Insurer, managing general agent, broker, third-party administrator, reinsurer, or a combination?
3. Which jurisdictions, legal entities, currencies, languages, and regulatory regimes apply?
4. Are Product, Product Version, Offering, Policy Form, Coverage Definition, and Rating Plan independently governed?
5. How are quotes generated, compared, referred, accepted, and expired?
6. Which Application questions, documents, inspections, external data, and disclosures are required?
7. Which underwriting rules are automated and which require authority-based human decisions?
8. What Party roles exist on a Policy and a Claim, and may one Party perform several roles?
9. Which insured Objects and risk characteristics are needed for each line of business?
10. Which Policy Transactions are supported, and how are effective-dated versions preserved?
11. How are premium, tax, fees, installments, commission, refunds, and cancellations calculated?
12. What constitutes a Loss Event and how may it create several Claims?
13. Which Claim Exposures, reserves, authority limits, assignments, and service providers are required?
14. How are coverage, liability, causation, damage, fraud, litigation, and settlement evaluated?
15. Which payments, salvage, subrogation, contribution, and other recoveries are supported?
16. Is reinsurance facultative, treaty, proportional, excess-of-loss, or a combination?
17. Which operational, actuarial, regulatory, and financial measures must be retained?
18. What evidence must remain immutable and auditable?

## MDE modeling guidance

- Reuse Cross-Industry Party and Party Role; do not create separate identities for Customer, Applicant, Policyholder, Insured, Claimant, Producer, and Payee.
- Keep Insurance Product, Product Version, Offering, Quote, Application, Policy, Coverage, and Policy Transaction distinct.
- Treat the Policy as a versioned Agreement and preserve the exact contractual terms applicable at any effective date.
- Keep Loss Event, Claim, Claim Exposure, Claim Assessment, Reserve, Settlement, Payment, and Recovery as separate concepts and lifecycles.
- Put eligibility, underwriting, coverage, authority, reserving, and payment rules on the entity operations they govern.
- Use cases orchestrate actor goals and branching but invoke authoritative entity operations for business decisions.
- Model external reports and data as sourced assertions with provenance, not automatically as verified truth.
- Add line-of-business specializations only where attributes, behavior, relationships, or regulation differ materially.
- Treat financial and regulatory projections as derived views with lineage to operational transactions.

## Anti-patterns

### Policy Equals Product

A Product defines reusable protection; a Policy is one effective-dated Agreement issued to particular Parties and risks.

### Coverage as a Checkbox

Coverage has terms, limits, deductibles, exclusions, effective dates, forms, insured interests, and behavior. A Boolean cannot explain contractual protection.

### One Claim, One Amount

Claims commonly contain several Exposures, assessments, reserves, settlements, payments, expenses, and recoveries.

### Claim Status as Everything

Claim, Exposure, Reserve, Settlement, Payment, litigation, fraud review, and recovery require independent states.

### Current Policy Reconstructs Historical Coverage

Endorsements and renewals change the contract. Claim decisions must use the contractual version effective for the Loss.

### Reserve Equals Payment

A Reserve estimates expected future cost; a Payment settles an approved obligation. They serve different operational and financial purposes.

### User Equals Adjuster or Underwriter

Authenticated identity is not the business role, assignment, authority, license, or employment relationship.

### Rules Hidden in Rating or Claim Code

Opaque code without durable rule, version, source, and decision evidence prevents review, explanation, and reliable change.

## Physical mapping examples

| Logical name | Example physical name |
|---|---|
| Product Version | `product_version` |
| Coverage Definition | `coverage_definition` |
| Insurance Application | `insurance_application` |
| Underwriting Case | `underwriting_case` |
| Underwriting Decision | `underwriting_decision` |
| Policy Period | `policy_period` |
| Policy Party | `policy_party` |
| Policy Transaction | `policy_transaction` |
| Claim Exposure | `claim_exposure` |
| Claim Assessment | `claim_assessment` |
| Claim Payment | `claim_payment` |
| Reinsurance Contract | `reinsurance_contract` |

Logical names remain authoritative. Technology-stack and line-of-business rules generate physical names only after the logical model is accepted.

## Future behavioral expansion

Future behavior belongs in the canonical domain and references existing entities. Application-specific UI, architecture, and executable tests belong in the consuming application.

Expand the existing canonical domain with reusable capabilities, roles, rules, use cases, and workflows for Product Management, Quote and Application, Underwriting, Policy Administration, Billing, Claims, Recovery, and Reinsurance. Candidate actor-goal use cases include Configure Product Version, Generate Quote, Submit Application, Make Underwriting Decision, Bind Policy, Issue Endorsement, Renew Policy, Report Loss, Open Claim, Determine Coverage, Assess Claim Exposure, Establish Reserve, Approve Settlement, Issue Claim Payment, Pursue Recovery, and Submit Reinsurance Claim.

## Canonical model bindings

This pattern selects and connects concepts in the [coherent model](../model/README.md). The sections below are views of those definitions. Follow the canonical business definitions for relationships, roles, lifecycles, events, and rules; use the variant guidance here to select the relevant detail.

| Source term | Canonical concept | ABE |
|---|---|---|
| Insurance Product | [Insurance Product](../model/domains/insurance/insurance-product/insurance-product.md) | [Insurance Product](../model/domains/insurance/insurance-product/README.md) |
| Product Version | [Product Version](../model/domains/insurance/insurance-product/product-version.md) | [Insurance Product](../model/domains/insurance/insurance-product/README.md) |
| Insurance Offering | [Insurance Offering](../model/domains/insurance/insurance-product/insurance-offering.md) | [Insurance Product](../model/domains/insurance/insurance-product/README.md) |
| Coverage Definition | [Coverage Definition](../model/domains/insurance/insurance-product/coverage-definition.md) | [Insurance Product](../model/domains/insurance/insurance-product/README.md) |
| Policy Form | [Policy Form](../model/domains/insurance/insurance-product/policy-form.md) | [Insurance Product](../model/domains/insurance/insurance-product/README.md) |
| Rating Plan | [Rating Plan](../model/domains/insurance/insurance-product/rating-plan.md) | [Insurance Product](../model/domains/insurance/insurance-product/README.md) |
| Rating Factor | [Rating Factor](../model/domains/insurance/insurance-product/rating-factor.md) | [Insurance Product](../model/domains/insurance/insurance-product/README.md) |
| Quote | [Quote](../model/domains/insurance/quote/quote.md) | [Quote](../model/domains/insurance/quote/README.md) |
| Quote Option | [Quote Option](../model/domains/insurance/quote/quote-option.md) | [Quote](../model/domains/insurance/quote/README.md) |
| Insurance Application | [Insurance Application](../model/domains/insurance/quote/insurance-application.md) | [Quote](../model/domains/insurance/quote/README.md) |
| Application Answer | [Application Answer](../model/domains/insurance/quote/application-answer.md) | [Quote](../model/domains/insurance/quote/README.md) |
| Risk Item | [Risk Item](../model/domains/insurance/quote/risk-item.md) | [Quote](../model/domains/insurance/quote/README.md) |
| Underwriting Case | [Underwriting Case](../model/domains/insurance/quote/underwriting-case.md) | [Quote](../model/domains/insurance/quote/README.md) |
| Underwriting Requirement | [Underwriting Requirement](../model/domains/insurance/quote/underwriting-requirement.md) | [Quote](../model/domains/insurance/quote/README.md) |
| Underwriting Decision | [Underwriting Decision](../model/domains/insurance/quote/underwriting-decision.md) | [Quote](../model/domains/insurance/quote/README.md) |
| Policy | [Policy](../model/domains/insurance/policy/policy.md) | [Policy](../model/domains/insurance/policy/README.md) |
| Policy Period | [Policy Period](../model/domains/insurance/policy/policy-period.md) | [Policy](../model/domains/insurance/policy/README.md) |
| Policy Party | [Policy Party](../model/domains/insurance/policy/policy-party.md) | [Policy](../model/domains/insurance/policy/README.md) |
| Coverage | [Coverage](../model/domains/insurance/policy/coverage.md) | [Policy](../model/domains/insurance/policy/README.md) |
| Coverage Term | [Coverage Term](../model/domains/insurance/policy/coverage-term.md) | [Policy](../model/domains/insurance/policy/README.md) |
| Exclusion | [Exclusion](../model/domains/insurance/policy/exclusion.md) | [Policy](../model/domains/insurance/policy/README.md) |
| Insured Object | [Insured Object](../model/domains/insurance/policy/insured-object.md) | [Policy](../model/domains/insurance/policy/README.md) |
| Policy Transaction | [Policy Transaction](../model/domains/insurance/policy/policy-transaction.md) | [Policy](../model/domains/insurance/policy/README.md) |
| Endorsement | [Endorsement](../model/domains/insurance/policy/endorsement.md) | [Policy](../model/domains/insurance/policy/README.md) |
| Premium | [Premium](../model/domains/insurance/premium/premium.md) | [Premium](../model/domains/insurance/premium/README.md) |
| Premium Transaction | [Premium Transaction](../model/domains/insurance/premium/premium-transaction.md) | [Premium](../model/domains/insurance/premium/README.md) |
| Billing Account | [Billing Account](../model/domains/insurance/premium/billing-account.md) | [Premium](../model/domains/insurance/premium/README.md) |
| Invoice | [Invoice](../model/domains/finance/invoice/invoice.md) | [Invoice](../model/domains/finance/invoice/README.md) |
| Payment | [Payment](../model/domains/finance/invoice/payment.md) | [Invoice](../model/domains/finance/invoice/README.md) |
| Commission | [Commission](../model/domains/insurance/premium/commission.md) | [Premium](../model/domains/insurance/premium/README.md) |
| Loss Event | [Loss Event](../model/domains/insurance/loss-event/loss-event.md) | [Loss Event](../model/domains/insurance/loss-event/README.md) |
| Claim | [Claim](../model/domains/insurance/loss-event/claim.md) | [Loss Event](../model/domains/insurance/loss-event/README.md) |
| Claim Party | [Claim Party](../model/domains/insurance/loss-event/claim-party.md) | [Loss Event](../model/domains/insurance/loss-event/README.md) |
| Claim Exposure | [Claim Exposure](../model/domains/insurance/loss-event/claim-exposure.md) | [Loss Event](../model/domains/insurance/loss-event/README.md) |
| Claim Assignment | [Claim Assignment](../model/domains/insurance/loss-event/claim-assignment.md) | [Loss Event](../model/domains/insurance/loss-event/README.md) |
| Claim Assessment | [Claim Assessment](../model/domains/insurance/loss-event/claim-assessment.md) | [Loss Event](../model/domains/insurance/loss-event/README.md) |
| Evidence Item | [Evidence Item](../model/domains/insurance/loss-event/evidence-item.md) | [Loss Event](../model/domains/insurance/loss-event/README.md) |
| Claim Note | [Claim Note](../model/domains/insurance/loss-event/claim-note.md) | [Loss Event](../model/domains/insurance/loss-event/README.md) |
| Reserve | [Reserve](../model/domains/insurance/loss-event/reserve.md) | [Loss Event](../model/domains/insurance/loss-event/README.md) |
| Settlement | [Settlement](../model/domains/insurance/loss-event/settlement.md) | [Loss Event](../model/domains/insurance/loss-event/README.md) |
| Claim Payment | [Claim Payment](../model/domains/insurance/loss-event/claim-payment.md) | [Loss Event](../model/domains/insurance/loss-event/README.md) |
| Recovery | [Recovery](../model/domains/insurance/loss-event/recovery.md) | [Loss Event](../model/domains/insurance/loss-event/README.md) |
| Reinsurance Contract | [Reinsurance Contract](../model/domains/insurance/reinsurance-contract/reinsurance-contract.md) | [Reinsurance Contract](../model/domains/insurance/reinsurance-contract/README.md) |
| Reinsurance Coverage | [Reinsurance Coverage](../model/domains/insurance/reinsurance-contract/reinsurance-coverage.md) | [Reinsurance Contract](../model/domains/insurance/reinsurance-contract/README.md) |
| Cession | [Cession](../model/domains/insurance/reinsurance-contract/cession.md) | [Reinsurance Contract](../model/domains/insurance/reinsurance-contract/README.md) |
| Reinsurance Claim | [Reinsurance Claim](../model/domains/insurance/reinsurance-contract/reinsurance-claim.md) | [Reinsurance Contract](../model/domains/insurance/reinsurance-contract/README.md) |
