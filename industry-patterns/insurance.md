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

See [canonical insurance roles](behavior/insurance.md#insurance-roles).

## Product and offering concepts

### Insurance Product

Canonical concept: [Insurance Product](../model/subjects/coverage/insurance-product/insurance-product.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Product Version

Canonical concept: [Product Version](../model/subjects/product/product/product-version.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Insurance Offering

Canonical concept: [Offering](../model/subjects/product/offering/offering.md) (as Insurance Offering).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Coverage Definition

Canonical concept: [Coverage Definition](../model/subjects/coverage/insurance-product/coverage-definition.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Policy Form

Canonical concept: [Policy Form](../model/subjects/coverage/insurance-product/policy-form.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Rating Plan

Canonical concept: [Rating Plan](../model/subjects/coverage/insurance-product/rating-plan.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Rating Factor

Canonical concept: [Rating Factor](../model/subjects/coverage/insurance-product/rating-factor.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Quote, application, and underwriting

### Quote

Canonical concept: [Quote](../model/subjects/request/quote/quote.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Quote Option

Canonical concept: [Quote Option](../model/subjects/coverage/underwriting-case/quote-option.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Insurance Application

Canonical concept: [Application](../model/subjects/request/request/application.md) (as Insurance Application).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Application Answer

Canonical concept: [Application Answer](../model/subjects/request/request/application-answer.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Risk Item

Canonical concept: [Risk Item](../model/subjects/coverage/underwriting-case/risk-item.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Underwriting Case

Canonical concept: [Underwriting Case](../model/subjects/coverage/underwriting-case/underwriting-case.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Underwriting Requirement

Canonical concept: [Underwriting Requirement](../model/subjects/coverage/underwriting-case/underwriting-requirement.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Underwriting Decision

Canonical concept: [Decision](../model/subjects/case/decision/decision.md) (as Underwriting Decision).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Policy and coverage concepts

### Policy

Canonical concept: [Policy](../model/subjects/coverage/policy/policy.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Policy Period

Canonical concept: [Policy Period](../model/subjects/coverage/policy/policy-period.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Policy Party

Canonical concept: [Agreement Role](../model/subjects/agreement/agreement/agreement-role.md) (as Policy Party).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Coverage

Canonical concept: [Coverage](../model/subjects/coverage/coverage/coverage.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Coverage Term

Canonical concept: [Coverage Term](../model/subjects/coverage/policy/coverage-term.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Exclusion

Canonical concept: [Exclusion](../model/subjects/coverage/policy/exclusion.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Insured Object

Canonical concept: [Insured Object](../model/subjects/coverage/policy/insured-object.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Policy Transaction

Canonical concept: [Policy Transaction](../model/subjects/coverage/policy/policy-transaction.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Endorsement

Canonical concept: [Endorsement](../model/subjects/coverage/policy/endorsement.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Premium, billing, and commission

### Premium

Canonical concept: [Premium](../model/subjects/coverage/premium/premium.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Premium Transaction

Canonical concept: [Premium Transaction](../model/subjects/coverage/premium/premium-transaction.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Billing Account

Canonical concept: [Billing Account](../model/subjects/finance/invoice/billing-account.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Invoice

Canonical concept: [Invoice](../model/subjects/finance/invoice/invoice.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Payment

Canonical concept: [Payment](../model/subjects/finance/payment/payment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Commission

Canonical concept: [Commission](../model/subjects/finance/invoice/commission.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Loss and claim concepts

### Loss Event

Canonical concept: [Loss Event](../model/subjects/coverage/loss-event/loss-event.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Claim

Canonical concept: [Claim](../model/subjects/coverage/coverage/claim.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Claim Party

Canonical concept: [Party Role](../model/subjects/party/party/party-role.md) (as Claim Party).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Claim Exposure

Canonical concept: [Claim Exposure](../model/subjects/coverage/loss-event/claim-exposure.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Claim Assignment

Canonical concept: [Assignment](../model/subjects/work/work-effort/assignment.md) (as Claim Assignment).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Claim Assessment

Canonical concept: [Claim Assessment](../model/subjects/coverage/coverage/claim-assessment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Evidence Item

Canonical concept: [Evidence](../model/subjects/document/evidence/evidence.md) (as Evidence Item).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Claim Note

Canonical concept: [Note](../model/subjects/document/evidence/note.md) (as Claim Note).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Reserve

Canonical concept: [Reserve](../model/subjects/coverage/loss-event/reserve.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Settlement

Canonical concept: [Settlement](../model/subjects/finance/payment/settlement.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Claim Payment

Canonical concept: [Payment](../model/subjects/finance/payment/payment.md) (as Claim Payment).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Recovery

Canonical concept: [Recovery](../model/subjects/coverage/loss-event/recovery.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Reinsurance concepts

### Reinsurance Contract

Canonical concept: [Reinsurance Contract](../model/subjects/coverage/reinsurance-contract/reinsurance-contract.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Reinsurance Coverage

Canonical concept: [Reinsurance Coverage](../model/subjects/coverage/reinsurance-contract/reinsurance-coverage.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Cession

Canonical concept: [Cession](../model/subjects/coverage/reinsurance-contract/cession.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Reinsurance Claim

Canonical concept: [Reinsurance Claim](../model/subjects/coverage/reinsurance-contract/reinsurance-claim.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Relationship model

See [canonical relationship model](behavior/insurance.md#relationship-model).

## Lifecycle models

See [canonical lifecycle models](behavior/insurance.md#lifecycle-models).

## Business events

See [canonical business events](behavior/insurance.md#business-events).

## Baseline business and integrity rules

See [canonical baseline business and integrity rules](behavior/insurance.md#baseline-business-and-integrity-rules).

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
| Insurance Product | [Insurance Product](../model/subjects/coverage/insurance-product/insurance-product.md) | [Insurance Product](../model/subjects/coverage/insurance-product/README.md) |
| Product Version | [Product Version](../model/subjects/product/product/product-version.md) | [Insurance Product](../model/subjects/coverage/insurance-product/README.md) |
| Insurance Offering | [Insurance Offering](../model/subjects/product/offering/offering.md) | [Insurance Product](../model/subjects/coverage/insurance-product/README.md) |
| Coverage Definition | [Coverage Definition](../model/subjects/coverage/insurance-product/coverage-definition.md) | [Insurance Product](../model/subjects/coverage/insurance-product/README.md) |
| Policy Form | [Policy Form](../model/subjects/coverage/insurance-product/policy-form.md) | [Insurance Product](../model/subjects/coverage/insurance-product/README.md) |
| Rating Plan | [Rating Plan](../model/subjects/coverage/insurance-product/rating-plan.md) | [Insurance Product](../model/subjects/coverage/insurance-product/README.md) |
| Rating Factor | [Rating Factor](../model/subjects/coverage/insurance-product/rating-factor.md) | [Insurance Product](../model/subjects/coverage/insurance-product/README.md) |
| Quote | [Quote](../model/subjects/request/quote/quote.md) | [Quote](../model/subjects/request/quote/README.md) |
| Quote Option | [Quote Option](../model/subjects/coverage/underwriting-case/quote-option.md) | [Quote](../model/subjects/request/quote/README.md) |
| Insurance Application | [Insurance Application](../model/subjects/request/request/application.md) | [Quote](../model/subjects/request/quote/README.md) |
| Application Answer | [Application Answer](../model/subjects/request/request/application-answer.md) | [Quote](../model/subjects/request/quote/README.md) |
| Risk Item | [Risk Item](../model/subjects/coverage/underwriting-case/risk-item.md) | [Quote](../model/subjects/request/quote/README.md) |
| Underwriting Case | [Underwriting Case](../model/subjects/coverage/underwriting-case/underwriting-case.md) | [Quote](../model/subjects/request/quote/README.md) |
| Underwriting Requirement | [Underwriting Requirement](../model/subjects/coverage/underwriting-case/underwriting-requirement.md) | [Quote](../model/subjects/request/quote/README.md) |
| Underwriting Decision | [Underwriting Decision](../model/subjects/case/decision/decision.md) | [Quote](../model/subjects/request/quote/README.md) |
| Policy | [Policy](../model/subjects/coverage/policy/policy.md) | [Policy](../model/subjects/coverage/policy/README.md) |
| Policy Period | [Policy Period](../model/subjects/coverage/policy/policy-period.md) | [Policy](../model/subjects/coverage/policy/README.md) |
| Policy Party | [Policy Party](../model/subjects/agreement/agreement/agreement-role.md) | [Policy](../model/subjects/coverage/policy/README.md) |
| Coverage | [Coverage](../model/subjects/coverage/coverage/coverage.md) | [Policy](../model/subjects/coverage/policy/README.md) |
| Coverage Term | [Coverage Term](../model/subjects/coverage/policy/coverage-term.md) | [Policy](../model/subjects/coverage/policy/README.md) |
| Exclusion | [Exclusion](../model/subjects/coverage/policy/exclusion.md) | [Policy](../model/subjects/coverage/policy/README.md) |
| Insured Object | [Insured Object](../model/subjects/coverage/policy/insured-object.md) | [Policy](../model/subjects/coverage/policy/README.md) |
| Policy Transaction | [Policy Transaction](../model/subjects/coverage/policy/policy-transaction.md) | [Policy](../model/subjects/coverage/policy/README.md) |
| Endorsement | [Endorsement](../model/subjects/coverage/policy/endorsement.md) | [Policy](../model/subjects/coverage/policy/README.md) |
| Premium | [Premium](../model/subjects/coverage/premium/premium.md) | [Premium](../model/subjects/coverage/premium/README.md) |
| Premium Transaction | [Premium Transaction](../model/subjects/coverage/premium/premium-transaction.md) | [Premium](../model/subjects/coverage/premium/README.md) |
| Billing Account | [Billing Account](../model/subjects/finance/invoice/billing-account.md) | [Premium](../model/subjects/coverage/premium/README.md) |
| Invoice | [Invoice](../model/subjects/finance/invoice/invoice.md) | [Invoice](../model/subjects/finance/invoice/README.md) |
| Payment | [Payment](../model/subjects/finance/payment/payment.md) | [Invoice](../model/subjects/finance/invoice/README.md) |
| Commission | [Commission](../model/subjects/finance/invoice/commission.md) | [Premium](../model/subjects/coverage/premium/README.md) |
| Loss Event | [Loss Event](../model/subjects/coverage/loss-event/loss-event.md) | [Loss Event](../model/subjects/coverage/loss-event/README.md) |
| Claim | [Claim](../model/subjects/coverage/coverage/claim.md) | [Loss Event](../model/subjects/coverage/loss-event/README.md) |
| Claim Party | [Claim Party](../model/subjects/party/party/party-role.md) | [Loss Event](../model/subjects/coverage/loss-event/README.md) |
| Claim Exposure | [Claim Exposure](../model/subjects/coverage/loss-event/claim-exposure.md) | [Loss Event](../model/subjects/coverage/loss-event/README.md) |
| Claim Assignment | [Claim Assignment](../model/subjects/work/work-effort/assignment.md) | [Loss Event](../model/subjects/coverage/loss-event/README.md) |
| Claim Assessment | [Claim Assessment](../model/subjects/coverage/coverage/claim-assessment.md) | [Loss Event](../model/subjects/coverage/loss-event/README.md) |
| Evidence Item | [Evidence Item](../model/subjects/document/evidence/evidence.md) | [Loss Event](../model/subjects/coverage/loss-event/README.md) |
| Claim Note | [Claim Note](../model/subjects/document/evidence/note.md) | [Loss Event](../model/subjects/coverage/loss-event/README.md) |
| Reserve | [Reserve](../model/subjects/coverage/loss-event/reserve.md) | [Loss Event](../model/subjects/coverage/loss-event/README.md) |
| Settlement | [Settlement](../model/subjects/finance/payment/settlement.md) | [Loss Event](../model/subjects/coverage/loss-event/README.md) |
| Claim Payment | [Claim Payment](../model/subjects/finance/payment/payment.md) | [Loss Event](../model/subjects/coverage/loss-event/README.md) |
| Recovery | [Recovery](../model/subjects/coverage/loss-event/recovery.md) | [Loss Event](../model/subjects/coverage/loss-event/README.md) |
| Reinsurance Contract | [Reinsurance Contract](../model/subjects/coverage/reinsurance-contract/reinsurance-contract.md) | [Reinsurance Contract](../model/subjects/coverage/reinsurance-contract/README.md) |
| Reinsurance Coverage | [Reinsurance Coverage](../model/subjects/coverage/reinsurance-contract/reinsurance-coverage.md) | [Reinsurance Contract](../model/subjects/coverage/reinsurance-contract/README.md) |
| Cession | [Cession](../model/subjects/coverage/reinsurance-contract/cession.md) | [Reinsurance Contract](../model/subjects/coverage/reinsurance-contract/README.md) |
| Reinsurance Claim | [Reinsurance Claim](../model/subjects/coverage/reinsurance-contract/reinsurance-claim.md) | [Reinsurance Contract](../model/subjects/coverage/reinsurance-contract/README.md) |
