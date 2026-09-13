---
type: architecture
---

# Testing Architecture

## 8.1 Tests required for changes

Every change that adds or modifies a use case, business rule, API contract, or other durable behavior must be accompanied by executable tests covering that behavior. Do not land behavior changes without corresponding new or updated tests.

## 8.2 Tests by layer and risk

Choose test style according to responsibility and risk rather than forcing every behavior through one testing technique.

Typical layers include:
- domain/unit tests for business behavior;
- integration tests for persistence and infrastructure boundaries;
- API/contract tests for external behavior;
- UI/browser tests for critical user interactions;
- end-to-end tests for important cross-layer journeys.

Backend tests should cover business-rule validation and API behavior. Critical UI behavior can be tested once browser-test infrastructure is justified.

## 8.3 Persistence integration testing

Persistence behavior that depends on database constraints, migrations, transactions, locking, or query semantics should be tested against the real database technology or a sufficiently faithful environment.

## 8.4 Business behavior traceability

All executable tests, across every layer named in §8.2, must be expressed as Gherkin feature files (Given/When/Then scenarios) executed through Cucumber, so that use-case scenarios and business rules are traceable directly from readable, business-legible test specifications rather than only from implementation-level test code.

## 8.5 UI operation coverage

Business operations required by interactive use cases should be reachable through the intended UI when the product requires a UI path. This is a coverage property, not a requirement that every backend operation have a button.

## 8.6 Coverage thresholds

Code coverage must be measured and reported on every test run. A minimum of 80% coverage is required; builds falling below this threshold must fail. A passing percentage does not by itself prove important behavior is adequately tested — §8.1 and §8.4 remain the primary requirements for meaningful coverage.

## 8.7 Captured command output and screenshots

Capture command output, screenshots, or other evidence when they materially help diagnose or verify behavior. They are evidence, not mandatory persistent artifacts for every build.
