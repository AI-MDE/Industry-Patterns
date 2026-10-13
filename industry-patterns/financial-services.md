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

See [canonical financial-services roles](behavior/financial-services.md#financial-services-roles).

## Institution, product, and offering concepts

### Financial Institution

Canonical concept: [Financial Institution](../model/subjects/accounts/financial-institution/financial-institution.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Institution Unit

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Financial Product

Canonical concept: [Financial Product](../model/subjects/product/product/financial-product.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Product Version

Canonical concept: [Product Version](../model/subjects/product/product/product-version.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Financial Offering

Canonical concept: [Offering](../model/subjects/product/offering/offering.md) (as Financial Offering).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Pricing Plan

Canonical concept: [Price List](../model/subjects/product/offering/price-list.md) (as Pricing Plan).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Customer onboarding and due diligence

### Customer Profile

Canonical concept: [Customer Account](../model/subjects/party/customer-account/customer-account.md) (as Customer Profile).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Product Application

Canonical concept: [Application](../model/subjects/request/request/application.md) (as Product Application).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Identity Evidence

Canonical concept: [Evidence](../model/subjects/document/evidence/evidence.md) (as Identity Evidence).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Due Diligence Case

Canonical concept: [Due Diligence Case](../model/subjects/accounts/due-diligence-case/due-diligence-case.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Beneficial Ownership

Canonical concept: [Beneficial Ownership](../model/subjects/accounts/due-diligence-case/beneficial-ownership.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Screening Result

Canonical concept: [Screening Result](../model/subjects/accounts/due-diligence-case/screening-result.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Agreement and account concepts

### Financial Agreement

Canonical concept: [Financial Agreement](../model/subjects/accounts/financial-agreement/financial-agreement.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Account

Canonical concept: [Account](../model/subjects/accounts/financial-agreement/account.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Account Party

Canonical concept: [Party Role](../model/subjects/party/party/party-role.md) (as Account Party).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Account Relationship

Canonical concept: [Account Relationship](../model/subjects/accounts/financial-agreement/account-relationship.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Mandate

Canonical concept: [Authorization](../model/subjects/case/decision/authorization.md) (as Mandate).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Limit

Canonical concept: [Limit](../model/subjects/accounts/financial-agreement/limit.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Hold

Canonical concept: [Hold](../model/subjects/accounts/financial-agreement/hold.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Balance

Canonical concept: [Balance](../model/subjects/accounts/financial-agreement/balance.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Instruction, transaction, and ledger concepts

### Financial Instruction

Canonical concept: [Financial Instruction](../model/subjects/accounts/financial-instruction/financial-instruction.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Authorization

Canonical concept: [Authorization](../model/subjects/case/decision/authorization.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Financial Transaction

Canonical concept: [Financial Transaction](../model/subjects/accounts/financial-instruction/financial-transaction.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Transaction Relationship

Canonical concept: [Transaction Relationship](../model/subjects/accounts/financial-instruction/transaction-relationship.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Ledger Account

Canonical concept: [Ledger Account](../model/subjects/accounting/ledger-account/ledger-account.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Ledger Entry

Canonical concept: [Journal Entry](../model/subjects/accounting/journal-entry/journal-entry.md) (as Ledger Entry).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Posting Batch

Canonical concept: [Posting Batch](../model/subjects/accounting/journal-entry/posting-batch.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Fee

Canonical concept: [Charge](../model/subjects/finance/invoice/charge.md) (as Fee).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Interest Accrual

Canonical concept: [Interest Accrual](../model/subjects/accounts/financial-instruction/interest-accrual.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Payment, clearing, and settlement

### Payment Order

Canonical concept: [Payment Order](../model/subjects/accounts/payment-order/payment-order.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Payment Party

Canonical concept: [Party Role](../model/subjects/party/party/party-role.md) (as Payment Party).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Clearing Item

Canonical concept: [Clearing Item](../model/subjects/accounts/payment-order/clearing-item.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Settlement

Canonical concept: [Settlement](../model/subjects/finance/payment/settlement.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Reconciliation

Canonical concept: [Reconciliation](../model/subjects/finance/payment/reconciliation.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Reconciliation Exception

Canonical concept: [Exception](../model/subjects/case/case/exception.md) (as Reconciliation Exception).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Credit and lending extensions

### Credit Facility

Canonical concept: [Credit Facility](../model/subjects/accounts/credit-facility/credit-facility.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Loan

Canonical concept: [Loan](../model/subjects/accounts/credit-facility/loan.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Repayment Schedule

Canonical concept: [Repayment Schedule](../model/subjects/accounts/credit-facility/repayment-schedule.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Scheduled Payment

Canonical concept: [Scheduled Payment](../model/subjects/accounts/credit-facility/scheduled-payment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Collateral

Canonical concept: [Collateral](../model/subjects/accounts/credit-facility/collateral.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Investment and custody extensions

### Financial Instrument

Canonical concept: [Financial Instrument](../model/subjects/accounts/financial-instrument/financial-instrument.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Order

Canonical concept: [Trade Order](../model/subjects/accounts/financial-instrument/trade-order.md) (as Order).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Trade

Canonical concept: [Trade](../model/subjects/accounts/financial-instrument/trade.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Position

Canonical concept: [Investment Position](../model/subjects/accounts/financial-instrument/investment-position.md) (as Position).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Statements, servicing, and disputes

### Statement

Canonical concept: [Statement](../model/subjects/accounts/financial-agreement/statement.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Service Request

Canonical concept: [Service Request](../model/subjects/request/request/service-request.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Dispute

Canonical concept: [Dispute](../model/subjects/case/case/dispute.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Adjustment

Canonical concept: [Adjustment](../model/subjects/finance/invoice/adjustment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Relationship model

See [canonical relationship model](behavior/financial-services.md#relationship-model).

## Lifecycle models

See [canonical lifecycle models](behavior/financial-services.md#lifecycle-models).

## Business events

See [canonical business events](behavior/financial-services.md#business-events).

## Baseline business and integrity rules

See [canonical baseline business and integrity rules](behavior/financial-services.md#baseline-business-and-integrity-rules).

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
| Financial Institution | [Financial Institution](../model/subjects/accounts/financial-institution/financial-institution.md) | [Financial Institution](../model/subjects/accounts/financial-institution/README.md) |
| Institution Unit | [Institution Unit](#concepts-applications-typically-add) | [Financial Institution](../model/subjects/accounts/financial-institution/README.md) |
| Financial Product | [Financial Product](../model/subjects/product/product/financial-product.md) | [Financial Institution](../model/subjects/accounts/financial-institution/README.md) |
| Product Version | [Product Version](../model/subjects/product/product/product-version.md) | [Financial Institution](../model/subjects/accounts/financial-institution/README.md) |
| Financial Offering | [Financial Offering](../model/subjects/product/offering/offering.md) | [Financial Institution](../model/subjects/accounts/financial-institution/README.md) |
| Pricing Plan | [Pricing Plan](../model/subjects/product/offering/price-list.md) | [Financial Institution](../model/subjects/accounts/financial-institution/README.md) |
| Customer Profile | [Customer Profile](../model/subjects/party/customer-account/customer-account.md) | [Customer Profile](../model/subjects/party/customer-account/README.md) |
| Product Application | [Product Application](../model/subjects/request/request/application.md) | [Customer Profile](../model/subjects/party/customer-account/README.md) |
| Identity Evidence | [Identity Evidence](../model/subjects/document/evidence/evidence.md) | [Customer Profile](../model/subjects/party/customer-account/README.md) |
| Due Diligence Case | [Due Diligence Case](../model/subjects/accounts/due-diligence-case/due-diligence-case.md) | [Customer Profile](../model/subjects/party/customer-account/README.md) |
| Beneficial Ownership | [Beneficial Ownership](../model/subjects/accounts/due-diligence-case/beneficial-ownership.md) | [Customer Profile](../model/subjects/party/customer-account/README.md) |
| Screening Result | [Screening Result](../model/subjects/accounts/due-diligence-case/screening-result.md) | [Customer Profile](../model/subjects/party/customer-account/README.md) |
| Financial Agreement | [Financial Agreement](../model/subjects/accounts/financial-agreement/financial-agreement.md) | [Financial Agreement](../model/subjects/accounts/financial-agreement/README.md) |
| Account | [Account](../model/subjects/accounts/financial-agreement/account.md) | [Financial Agreement](../model/subjects/accounts/financial-agreement/README.md) |
| Account Party | [Account Party](../model/subjects/party/party/party-role.md) | [Financial Agreement](../model/subjects/accounts/financial-agreement/README.md) |
| Account Relationship | [Account Relationship](../model/subjects/accounts/financial-agreement/account-relationship.md) | [Financial Agreement](../model/subjects/accounts/financial-agreement/README.md) |
| Mandate | [Mandate](../model/subjects/case/decision/authorization.md) | [Financial Agreement](../model/subjects/accounts/financial-agreement/README.md) |
| Limit | [Limit](../model/subjects/accounts/financial-agreement/limit.md) | [Financial Agreement](../model/subjects/accounts/financial-agreement/README.md) |
| Hold | [Hold](../model/subjects/accounts/financial-agreement/hold.md) | [Financial Agreement](../model/subjects/accounts/financial-agreement/README.md) |
| Balance | [Balance](../model/subjects/accounts/financial-agreement/balance.md) | [Financial Agreement](../model/subjects/accounts/financial-agreement/README.md) |
| Financial Instruction | [Financial Instruction](../model/subjects/accounts/financial-instruction/financial-instruction.md) | [Financial Instruction](../model/subjects/accounts/financial-instruction/README.md) |
| Authorization | [Authorization](../model/subjects/case/decision/authorization.md) | [Financial Instruction](../model/subjects/accounts/financial-instruction/README.md) |
| Financial Transaction | [Financial Transaction](../model/subjects/accounts/financial-instruction/financial-transaction.md) | [Financial Instruction](../model/subjects/accounts/financial-instruction/README.md) |
| Transaction Relationship | [Transaction Relationship](../model/subjects/accounts/financial-instruction/transaction-relationship.md) | [Financial Instruction](../model/subjects/accounts/financial-instruction/README.md) |
| Ledger Account | [Ledger Account](../model/subjects/accounting/ledger-account/ledger-account.md) | [Financial Instruction](../model/subjects/accounts/financial-instruction/README.md) |
| Ledger Entry | [Ledger Entry](../model/subjects/accounting/journal-entry/journal-entry.md) | [Financial Instruction](../model/subjects/accounts/financial-instruction/README.md) |
| Posting Batch | [Posting Batch](../model/subjects/accounting/journal-entry/posting-batch.md) | [Financial Instruction](../model/subjects/accounts/financial-instruction/README.md) |
| Fee | [Fee](../model/subjects/finance/invoice/charge.md) | [Financial Instruction](../model/subjects/accounts/financial-instruction/README.md) |
| Interest Accrual | [Interest Accrual](../model/subjects/accounts/financial-instruction/interest-accrual.md) | [Financial Instruction](../model/subjects/accounts/financial-instruction/README.md) |
| Payment Order | [Payment Order](../model/subjects/accounts/payment-order/payment-order.md) | [Payment Order](../model/subjects/accounts/payment-order/README.md) |
| Payment Party | [Payment Party](../model/subjects/party/party/party-role.md) | [Payment Order](../model/subjects/accounts/payment-order/README.md) |
| Clearing Item | [Clearing Item](../model/subjects/accounts/payment-order/clearing-item.md) | [Payment Order](../model/subjects/accounts/payment-order/README.md) |
| Settlement | [Settlement](../model/subjects/finance/payment/settlement.md) | [Payment Order](../model/subjects/accounts/payment-order/README.md) |
| Reconciliation | [Reconciliation](../model/subjects/finance/payment/reconciliation.md) | [Payment Order](../model/subjects/accounts/payment-order/README.md) |
| Reconciliation Exception | [Reconciliation Exception](../model/subjects/case/case/exception.md) | [Payment Order](../model/subjects/accounts/payment-order/README.md) |
| Credit Facility | [Credit Facility](../model/subjects/accounts/credit-facility/credit-facility.md) | [Credit Facility](../model/subjects/accounts/credit-facility/README.md) |
| Loan | [Loan](../model/subjects/accounts/credit-facility/loan.md) | [Credit Facility](../model/subjects/accounts/credit-facility/README.md) |
| Repayment Schedule | [Repayment Schedule](../model/subjects/accounts/credit-facility/repayment-schedule.md) | [Credit Facility](../model/subjects/accounts/credit-facility/README.md) |
| Scheduled Payment | [Scheduled Payment](../model/subjects/accounts/credit-facility/scheduled-payment.md) | [Credit Facility](../model/subjects/accounts/credit-facility/README.md) |
| Collateral | [Collateral](../model/subjects/accounts/credit-facility/collateral.md) | [Credit Facility](../model/subjects/accounts/credit-facility/README.md) |
| Financial Instrument | [Financial Instrument](../model/subjects/accounts/financial-instrument/financial-instrument.md) | [Financial Instrument](../model/subjects/accounts/financial-instrument/README.md) |
| Order | [Order](../model/subjects/accounts/financial-instrument/trade-order.md) | [Financial Instrument](../model/subjects/accounts/financial-instrument/README.md) |
| Trade | [Trade](../model/subjects/accounts/financial-instrument/trade.md) | [Financial Instrument](../model/subjects/accounts/financial-instrument/README.md) |
| Position | [Position](../model/subjects/accounts/financial-instrument/investment-position.md) | [Financial Instrument](../model/subjects/accounts/financial-instrument/README.md) |
| Statement | [Statement](../model/subjects/accounts/financial-agreement/statement.md) | [Statement](../model/subjects/accounts/financial-agreement/README.md) |
| Service Request | [Service Request](../model/subjects/request/request/service-request.md) | [Statement](../model/subjects/accounts/financial-agreement/README.md) |
| Dispute | [Dispute](../model/subjects/case/case/dispute.md) | [Statement](../model/subjects/accounts/financial-agreement/README.md) |
| Adjustment | [Adjustment](../model/subjects/finance/invoice/adjustment.md) | [Statement](../model/subjects/accounts/financial-agreement/README.md) |

## Concepts applications typically add

Not in the canonical model: specific to this kind of business, or nothing an application could not define itself. An application adds them in its own Specs, usually specializing the canonical concept named.

- **Institution Unit**: A branch, business unit, booking entity, service center, or operating location.
