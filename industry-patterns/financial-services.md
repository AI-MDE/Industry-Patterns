# Financial Services Model Pattern

## Intent

Model banks, credit unions, payment institutions, lenders, investment firms, and financial intermediaries that offer financial products; onboard and identify customers; establish agreements and accounts; accept instructions; authorize, post, clear, and settle transactions; manage balances, fees, interest, limits, risk, disputes, and regulatory obligations.

This pattern specializes the Cross-Industry Party, Role, Product, Offering, Agreement, Account, Classification, Event, Status, Charge, Payment, Document, Work Effort, and Outcome concepts.

## Business overview

**Customer Need → Product/Offering → Application → Due Diligence → Agreement → Account → Instruction → Authorization → Transaction/Posting → Clearing/Settlement → Statement/Reconciliation**

A Financial Institution defines Financial Products and Offerings. A prospective Customer submits an Application and identity, ownership, tax, and risk information. Customer due diligence and product eligibility checks support an approval decision. An accepted application establishes a Financial Agreement and one or more Accounts with authorized Account Parties. Customers or connected systems submit Instructions for deposits, withdrawals, transfers, payments, trades, or credit usage. The institution authenticates the initiating Party, checks authority, limits, funds, sanctions, fraud, and product rules, then records Transactions and balanced Ledger Entries. Inter-institution activity may pass through clearing and settlement. Statements, reconciliations, disputes, holds, fees, interest, and regulatory reporting complete the operational lifecycle.

## Pattern variants

### Simple

Use for a focused account or payment prototype.

Core concepts: Customer; Financial Product; Application; Financial Agreement; Account; Account Party; Instruction; Financial Transaction; Ledger Entry; Balance; Payment.

### Standard

Use as the default for an operational financial-services application.

Adds: Financial Institution; Branch; Product Version; Offering; Customer Profile; Identity Evidence; Due Diligence Case; Beneficial Owner; Mandate; Account Relationship; Authorization; Hold; Posting Batch; Fee; Interest Accrual; Statement; Payment Order; Clearing Item; Settlement; Reconciliation; Dispute.

### Enterprise

Use for multiple legal entities, jurisdictions, currencies, channels, regulated books, correspondent relationships, lending, investments, or enterprise risk.

Adds: Legal Entity; Business Unit; Correspondent Institution; Product Catalog; Pricing Plan; Limit; Credit Facility; Collateral; Loan; Repayment Schedule; Financial Instrument; Position; Order; Trade; Portfolio; General Ledger Account; Journal; Sanctions Screening; Fraud Case; Regulatory Classification; Regulatory Report; Liquidity Position; Capital Measure.

## Financial-services roles

See [canonical financial-services roles](../model/domains/financial-services/behavior.md#financial-services-roles).

## Institution, product, and offering concepts

### Financial Institution

Canonical concept: [Financial Institution](../model/domains/financial-services/financial-institution/financial-institution.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Institution Unit

Canonical concept: [Institution Unit](../model/domains/financial-services/financial-institution/institution-unit.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Financial Product

Canonical concept: [Financial Product](../model/domains/financial-services/financial-institution/financial-product.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Product Version

Canonical concept: [Product Version](../model/domains/financial-services/financial-institution/product-version.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Financial Offering

Canonical concept: [Financial Offering](../model/domains/financial-services/financial-institution/financial-offering.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Pricing Plan

Canonical concept: [Pricing Plan](../model/domains/financial-services/financial-institution/pricing-plan.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Customer onboarding and due diligence

### Customer Profile

Canonical concept: [Customer Profile](../model/domains/financial-services/customer-profile/customer-profile.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Product Application

Canonical concept: [Product Application](../model/domains/financial-services/customer-profile/product-application.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Identity Evidence

Canonical concept: [Identity Evidence](../model/domains/financial-services/customer-profile/identity-evidence.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Due Diligence Case

Canonical concept: [Due Diligence Case](../model/domains/financial-services/customer-profile/due-diligence-case.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Beneficial Ownership

Canonical concept: [Beneficial Ownership](../model/domains/financial-services/customer-profile/beneficial-ownership.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Screening Result

Canonical concept: [Screening Result](../model/domains/financial-services/customer-profile/screening-result.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Agreement and account concepts

### Financial Agreement

Canonical concept: [Financial Agreement](../model/domains/financial-services/financial-agreement/financial-agreement.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Account

Canonical concept: [Account](../model/domains/financial-services/financial-agreement/account.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Account Party

Canonical concept: [Account Party](../model/domains/financial-services/financial-agreement/account-party.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Account Relationship

Canonical concept: [Account Relationship](../model/domains/financial-services/financial-agreement/account-relationship.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Mandate

Canonical concept: [Mandate](../model/domains/financial-services/financial-agreement/mandate.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Limit

Canonical concept: [Limit](../model/domains/financial-services/financial-agreement/limit.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Hold

Canonical concept: [Hold](../model/domains/financial-services/financial-agreement/hold.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Balance

Canonical concept: [Balance](../model/domains/financial-services/financial-agreement/balance.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Instruction, transaction, and ledger concepts

### Financial Instruction

Canonical concept: [Financial Instruction](../model/domains/financial-services/financial-instruction/financial-instruction.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Authorization

Canonical concept: [Authorization](../model/domains/financial-services/financial-instruction/authorization.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Financial Transaction

Canonical concept: [Financial Transaction](../model/domains/financial-services/financial-instruction/financial-transaction.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Transaction Relationship

Canonical concept: [Transaction Relationship](../model/domains/financial-services/financial-instruction/transaction-relationship.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Ledger Account

Canonical concept: [Ledger Account](../model/domains/financial-services/financial-instruction/ledger-account.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Ledger Entry

Canonical concept: [Ledger Entry](../model/domains/financial-services/financial-instruction/ledger-entry.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Posting Batch

Canonical concept: [Posting Batch](../model/domains/financial-services/financial-instruction/posting-batch.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Fee

Canonical concept: [Fee](../model/domains/financial-services/financial-instruction/fee.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Interest Accrual

Canonical concept: [Interest Accrual](../model/domains/financial-services/financial-instruction/interest-accrual.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Payment, clearing, and settlement

### Payment Order

Canonical concept: [Payment Order](../model/domains/financial-services/payment-order/payment-order.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Payment Party

Canonical concept: [Payment Party](../model/domains/financial-services/payment-order/payment-party.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Clearing Item

Canonical concept: [Clearing Item](../model/domains/financial-services/payment-order/clearing-item.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Settlement

Canonical concept: [Settlement](../model/domains/financial-services/payment-order/settlement.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Reconciliation

Canonical concept: [Reconciliation](../model/domains/financial-services/payment-order/reconciliation.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Reconciliation Exception

Canonical concept: [Reconciliation Exception](../model/domains/financial-services/payment-order/reconciliation-exception.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Credit and lending extensions

### Credit Facility

Canonical concept: [Credit Facility](../model/domains/financial-services/credit-facility/credit-facility.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Loan

Canonical concept: [Loan](../model/domains/financial-services/credit-facility/loan.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Repayment Schedule

Canonical concept: [Repayment Schedule](../model/domains/financial-services/credit-facility/repayment-schedule.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Scheduled Payment

Canonical concept: [Scheduled Payment](../model/domains/financial-services/credit-facility/scheduled-payment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Collateral

Canonical concept: [Collateral](../model/domains/financial-services/credit-facility/collateral.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Investment and custody extensions

### Financial Instrument

Canonical concept: [Financial Instrument](../model/domains/financial-services/financial-instrument/financial-instrument.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Order

Canonical concept: [Order](../model/domains/financial-services/financial-instrument/order.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Trade

Canonical concept: [Trade](../model/domains/financial-services/financial-instrument/trade.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Position

Canonical concept: [Position](../model/domains/financial-services/financial-instrument/position.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Statements, servicing, and disputes

### Statement

Canonical concept: [Statement](../model/domains/financial-services/statement/statement.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Service Request

Canonical concept: [Service Request](../model/domains/financial-services/statement/service-request.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Dispute

Canonical concept: [Dispute](../model/domains/financial-services/statement/dispute.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Adjustment

Canonical concept: [Adjustment](../model/domains/financial-services/statement/adjustment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Relationship model

See [canonical relationship model](../model/domains/financial-services/behavior.md#relationship-model).

## Lifecycle models

See [canonical lifecycle models](../model/domains/financial-services/behavior.md#lifecycle-models).

## Business events

See [canonical business events](../model/domains/financial-services/behavior.md#business-events).

## Baseline business and integrity rules

See [canonical baseline business and integrity rules](../model/domains/financial-services/behavior.md#baseline-business-and-integrity-rules).

## AI modeling questions

1. Which financial-services sectors are in scope: deposits, payments, cards, lending, investments, custody, foreign exchange, insurance-linked services, or another sector?
2. Is the organization a bank, credit union, payment institution, lender, broker-dealer, asset manager, custodian, fintech, or service provider?
3. Which legal entities, booking units, jurisdictions, currencies, languages, and regulatory regimes apply?
4. Which Party roles, legal ownership types, beneficial ownership thresholds, and authority models are required?
5. What customer due-diligence, identity, tax, sanctions, and periodic-review evidence must be retained?
6. Are Product, Product Version, Offering, Pricing Plan, Agreement, and Account independently governed?
7. Which Account types, balance types, Account relationships, limits, holds, mandates, and restrictions are required?
8. Which channels and actors may submit Instructions, and what authentication, approval, and signing rules apply?
9. Which transaction types are supported, and how are authorization, booking, posting, clearing, settlement, reversal, and return separated?
10. Is double-entry accounting required at the operational, subledger, or general-ledger level?
11. Which payment schemes, clearing networks, correspondent institutions, message standards, and settlement arrangements are used?
12. How are fees, interest, exchange rates, commissions, taxes, and rounding calculated and evidenced?
13. Which lending concepts are needed: facilities, loans, schedules, collateral, delinquency, impairment, or collections?
14. Which investment concepts are needed: instruments, orders, trades, positions, portfolios, custody, and corporate actions?
15. How are statements, notices, service requests, complaints, disputes, and adjustments handled?
16. Which fraud, transaction-monitoring, sanctions, liquidity, credit, market, and operational-risk controls are required?
17. Which reconciliations, regulatory reports, audit evidence, retention periods, and data-lineage requirements apply?
18. Which decisions may be automated, and which require human review or authority limits?

## MDE modeling guidance

- Reuse Cross-Industry Party and Party Role; do not create separate identities for Customer, Applicant, Owner, Signer, Beneficiary, Payer, Payee, Borrower, and Advisor.
- Keep Financial Product, Product Version, Offering, Application, Agreement, and Account distinct.
- Keep Account, Ledger Account, Balance, Financial Transaction, and Ledger Entry distinct.
- Keep Instruction, Authorization, Transaction, Posting, Clearing, and Settlement as separate concepts and lifecycles.
- Treat all contractual, authority, pricing, and ownership relationships as versioned and effective-dated.
- Put eligibility, authority, limit, balance, posting, pricing, and risk rules on the entity operations they govern.
- Use cases orchestrate actor goals and branching but invoke authoritative entity operations for business decisions.
- Model external messages, evidence, prices, rates, and screening results as sourced assertions with provenance.
- Add sector specializations only when attributes, behavior, relationships, accounting, or regulation materially differ.
- Treat statements, regulatory reports, risk measures, and analytics as derived views with lineage to operational records.

## Anti-patterns

### Customer Equals Person

Customers may be people, organizations, households, trusts, or other legal arrangements. Party identity and Customer role must remain separate.

### Product Equals Account

A Product defines reusable terms and behavior; an Account is one serviced instance governed by a particular Agreement and Product Version.

### Account Equals Ledger

The customer Account and the accounting Ledger Account serve different purposes and may map many-to-many through posting rules.

### Transaction as a Mutable Balance Change

A Transaction is durable evidence of a business occurrence. Corrections require reversals, returns, or adjustments rather than overwriting history.

### One Status for the Entire Payment

Instruction, authorization, transaction, clearing, settlement, reconciliation, and dispute each require independent states.

### Available Balance Equals Ledger Balance

Availability may include holds, pending items, value dates, limits, uncollected funds, and credit. Balance type and calculation basis must be explicit.

### Payment Equals Settlement

A Payment expresses a transfer obligation and process; Settlement discharges obligations between participants and may occur later or in aggregate.

### User Equals Account Signer

Authenticated identity is not customer identity, Account role, Mandate, transaction authority, employment role, or approval limit.

### Compliance Alert Equals Violation

A screening or monitoring alert is a signal requiring review. It is not itself a confirmed match, offense, or reportable conclusion.

### Business Rules Hidden in Channel Code

Channel-specific code must not become the untraceable authority for eligibility, limits, pricing, posting, or compliance decisions.

## Physical mapping examples

| Logical name | Example physical name |
|---|---|
| Product Version | `product_version` |
| Customer Profile | `customer_profile` |
| Due Diligence Case | `due_diligence_case` |
| Beneficial Ownership | `beneficial_ownership` |
| Financial Agreement | `financial_agreement` |
| Account Party | `account_party` |
| Financial Instruction | `financial_instruction` |
| Financial Transaction | `financial_transaction` |
| Transaction Relationship | `transaction_relationship` |
| Ledger Account | `ledger_account` |
| Ledger Entry | `ledger_entry` |
| Payment Order | `payment_order` |
| Reconciliation Exception | `reconciliation_exception` |

Logical names remain authoritative. Technology-stack, jurisdiction, accounting, and sector rules generate physical names only after the logical model is accepted.

## Future behavioral expansion

Future behavior belongs in the canonical domain and references existing entities. Application-specific UI, architecture, and executable tests belong in the consuming application.

Expand the existing canonical domain with reusable capabilities, roles, rules, use cases, and workflows for Product Management, Customer Onboarding, Account Administration, Transaction Processing, Payments, Ledger and Posting, Statements and Servicing, Reconciliation, Disputes, Lending, Investments, Risk, and Compliance. Candidate actor-goal use cases include Configure Product Version, Onboard Customer, Verify Beneficial Ownership, Open Account, Manage Account Authority, Submit Instruction, Authorize Transaction, Place or Release Hold, Post Transaction, Initiate Payment, Clear and Settle Payment, Reconcile Activity, Generate Statement, Open Dispute, Reverse or Adjust Transaction, Establish Credit Facility, Disburse Loan, Execute Trade, and Complete Regulatory Review.

## Canonical model bindings

This pattern selects and connects concepts in the [coherent model](../model/README.md). The sections below are views of those definitions. Follow the canonical business definitions for relationships, roles, lifecycles, events, and rules; use the variant guidance here to select the relevant detail.

| Source term | Canonical concept | ABE |
|---|---|---|
| Financial Institution | [Financial Institution](../model/domains/financial-services/financial-institution/financial-institution.md) | [Financial Institution](../model/domains/financial-services/financial-institution/README.md) |
| Institution Unit | [Institution Unit](../model/domains/financial-services/financial-institution/institution-unit.md) | [Financial Institution](../model/domains/financial-services/financial-institution/README.md) |
| Financial Product | [Financial Product](../model/domains/financial-services/financial-institution/financial-product.md) | [Financial Institution](../model/domains/financial-services/financial-institution/README.md) |
| Product Version | [Product Version](../model/domains/financial-services/financial-institution/product-version.md) | [Financial Institution](../model/domains/financial-services/financial-institution/README.md) |
| Financial Offering | [Financial Offering](../model/domains/financial-services/financial-institution/financial-offering.md) | [Financial Institution](../model/domains/financial-services/financial-institution/README.md) |
| Pricing Plan | [Pricing Plan](../model/domains/financial-services/financial-institution/pricing-plan.md) | [Financial Institution](../model/domains/financial-services/financial-institution/README.md) |
| Customer Profile | [Customer Profile](../model/domains/financial-services/customer-profile/customer-profile.md) | [Customer Profile](../model/domains/financial-services/customer-profile/README.md) |
| Product Application | [Product Application](../model/domains/financial-services/customer-profile/product-application.md) | [Customer Profile](../model/domains/financial-services/customer-profile/README.md) |
| Identity Evidence | [Identity Evidence](../model/domains/financial-services/customer-profile/identity-evidence.md) | [Customer Profile](../model/domains/financial-services/customer-profile/README.md) |
| Due Diligence Case | [Due Diligence Case](../model/domains/financial-services/customer-profile/due-diligence-case.md) | [Customer Profile](../model/domains/financial-services/customer-profile/README.md) |
| Beneficial Ownership | [Beneficial Ownership](../model/domains/financial-services/customer-profile/beneficial-ownership.md) | [Customer Profile](../model/domains/financial-services/customer-profile/README.md) |
| Screening Result | [Screening Result](../model/domains/financial-services/customer-profile/screening-result.md) | [Customer Profile](../model/domains/financial-services/customer-profile/README.md) |
| Financial Agreement | [Financial Agreement](../model/domains/financial-services/financial-agreement/financial-agreement.md) | [Financial Agreement](../model/domains/financial-services/financial-agreement/README.md) |
| Account | [Account](../model/domains/financial-services/financial-agreement/account.md) | [Financial Agreement](../model/domains/financial-services/financial-agreement/README.md) |
| Account Party | [Account Party](../model/domains/financial-services/financial-agreement/account-party.md) | [Financial Agreement](../model/domains/financial-services/financial-agreement/README.md) |
| Account Relationship | [Account Relationship](../model/domains/financial-services/financial-agreement/account-relationship.md) | [Financial Agreement](../model/domains/financial-services/financial-agreement/README.md) |
| Mandate | [Mandate](../model/domains/financial-services/financial-agreement/mandate.md) | [Financial Agreement](../model/domains/financial-services/financial-agreement/README.md) |
| Limit | [Limit](../model/domains/financial-services/financial-agreement/limit.md) | [Financial Agreement](../model/domains/financial-services/financial-agreement/README.md) |
| Hold | [Hold](../model/domains/financial-services/financial-agreement/hold.md) | [Financial Agreement](../model/domains/financial-services/financial-agreement/README.md) |
| Balance | [Balance](../model/domains/financial-services/financial-agreement/balance.md) | [Financial Agreement](../model/domains/financial-services/financial-agreement/README.md) |
| Financial Instruction | [Financial Instruction](../model/domains/financial-services/financial-instruction/financial-instruction.md) | [Financial Instruction](../model/domains/financial-services/financial-instruction/README.md) |
| Authorization | [Authorization](../model/domains/financial-services/financial-instruction/authorization.md) | [Financial Instruction](../model/domains/financial-services/financial-instruction/README.md) |
| Financial Transaction | [Financial Transaction](../model/domains/financial-services/financial-instruction/financial-transaction.md) | [Financial Instruction](../model/domains/financial-services/financial-instruction/README.md) |
| Transaction Relationship | [Transaction Relationship](../model/domains/financial-services/financial-instruction/transaction-relationship.md) | [Financial Instruction](../model/domains/financial-services/financial-instruction/README.md) |
| Ledger Account | [Ledger Account](../model/domains/financial-services/financial-instruction/ledger-account.md) | [Financial Instruction](../model/domains/financial-services/financial-instruction/README.md) |
| Ledger Entry | [Ledger Entry](../model/domains/financial-services/financial-instruction/ledger-entry.md) | [Financial Instruction](../model/domains/financial-services/financial-instruction/README.md) |
| Posting Batch | [Posting Batch](../model/domains/financial-services/financial-instruction/posting-batch.md) | [Financial Instruction](../model/domains/financial-services/financial-instruction/README.md) |
| Fee | [Fee](../model/domains/financial-services/financial-instruction/fee.md) | [Financial Instruction](../model/domains/financial-services/financial-instruction/README.md) |
| Interest Accrual | [Interest Accrual](../model/domains/financial-services/financial-instruction/interest-accrual.md) | [Financial Instruction](../model/domains/financial-services/financial-instruction/README.md) |
| Payment Order | [Payment Order](../model/domains/financial-services/payment-order/payment-order.md) | [Payment Order](../model/domains/financial-services/payment-order/README.md) |
| Payment Party | [Payment Party](../model/domains/financial-services/payment-order/payment-party.md) | [Payment Order](../model/domains/financial-services/payment-order/README.md) |
| Clearing Item | [Clearing Item](../model/domains/financial-services/payment-order/clearing-item.md) | [Payment Order](../model/domains/financial-services/payment-order/README.md) |
| Settlement | [Settlement](../model/domains/financial-services/payment-order/settlement.md) | [Payment Order](../model/domains/financial-services/payment-order/README.md) |
| Reconciliation | [Reconciliation](../model/domains/financial-services/payment-order/reconciliation.md) | [Payment Order](../model/domains/financial-services/payment-order/README.md) |
| Reconciliation Exception | [Reconciliation Exception](../model/domains/financial-services/payment-order/reconciliation-exception.md) | [Payment Order](../model/domains/financial-services/payment-order/README.md) |
| Credit Facility | [Credit Facility](../model/domains/financial-services/credit-facility/credit-facility.md) | [Credit Facility](../model/domains/financial-services/credit-facility/README.md) |
| Loan | [Loan](../model/domains/financial-services/credit-facility/loan.md) | [Credit Facility](../model/domains/financial-services/credit-facility/README.md) |
| Repayment Schedule | [Repayment Schedule](../model/domains/financial-services/credit-facility/repayment-schedule.md) | [Credit Facility](../model/domains/financial-services/credit-facility/README.md) |
| Scheduled Payment | [Scheduled Payment](../model/domains/financial-services/credit-facility/scheduled-payment.md) | [Credit Facility](../model/domains/financial-services/credit-facility/README.md) |
| Collateral | [Collateral](../model/domains/financial-services/credit-facility/collateral.md) | [Credit Facility](../model/domains/financial-services/credit-facility/README.md) |
| Financial Instrument | [Financial Instrument](../model/domains/financial-services/financial-instrument/financial-instrument.md) | [Financial Instrument](../model/domains/financial-services/financial-instrument/README.md) |
| Order | [Order](../model/domains/financial-services/financial-instrument/order.md) | [Financial Instrument](../model/domains/financial-services/financial-instrument/README.md) |
| Trade | [Trade](../model/domains/financial-services/financial-instrument/trade.md) | [Financial Instrument](../model/domains/financial-services/financial-instrument/README.md) |
| Position | [Position](../model/domains/financial-services/financial-instrument/position.md) | [Financial Instrument](../model/domains/financial-services/financial-instrument/README.md) |
| Statement | [Statement](../model/domains/financial-services/statement/statement.md) | [Statement](../model/domains/financial-services/statement/README.md) |
| Service Request | [Service Request](../model/domains/financial-services/statement/service-request.md) | [Statement](../model/domains/financial-services/statement/README.md) |
| Dispute | [Dispute](../model/domains/financial-services/statement/dispute.md) | [Statement](../model/domains/financial-services/statement/README.md) |
| Adjustment | [Adjustment](../model/domains/financial-services/statement/adjustment.md) | [Statement](../model/domains/financial-services/statement/README.md) |
