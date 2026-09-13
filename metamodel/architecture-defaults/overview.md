---
type: architecture
---

# Application Architecture

Status: Default starting architecture for applications built on this framework.
Purpose: Provide durable engineering defaults for AI-built business applications. An
application specializes these defaults with its own concrete decisions; these defaults
should be changed when application needs justify a different decision.

This document is the entry point for application architecture knowledge. It states the
framework's default architectural shape, and links to dedicated topic documents for
areas substantial enough to stand on their own.

## Default stack

Unless an application's own architecture states otherwise, the default starting stack
for a small application built on this framework is:
- a TypeScript Node.js backend using Express;
- a REST-style JSON API;
- PostgreSQL persistence;
- a browser frontend using React and TypeScript, built with Vite and served as static assets by the backend;
- a single deployable application process.

## Rationale

A single-process architecture keeps the first implementation small while retaining
explicit API and persistence boundaries, appropriate when business intent is narrow and
does not establish scale, distributed deployment, or integration requirements.

PostgreSQL is the default application database because most business applications
require durable relational data, using a database service configured through
environment variables.

No authentication mechanism is assumed by default; introduce one, and the identity/role
model it requires, once the business intent defines differentiated user identities or
access (see `architecture-defaults/domain-and-access.md`).

## 1. Architectural shape

### 1.1 Capability-oriented boundaries

Organize business-facing implementation around meaningful business capabilities or coherent vertical slices where practical. Capability boundaries should remain understandable from business specifications through API, UI, and tests.

Do not force capability isolation where a shared cross-cutting service is the clearer design.

### 1.2 Layering and dependency boundaries

Keep business/domain behavior distinct from transport, presentation, and persistence concerns.

A normal dependency direction is:

```text
UI / transport
    ↓
application / use-case orchestration
    ↓
domain behavior
    ↓
ports / persistence abstractions
    ↓
infrastructure implementations
```

Exact folders and class names are implementation choices, not architectural requirements.

For the default stack, the boundaries are:

```text
Browser UI (React)
   ↓ HTTP/JSON
Express API / application operations
   ↓
PostgreSQL data access
```

Business validation is enforced by backend application operations. The frontend may provide early validation but is not authoritative.

### 1.3 Cross-cutting concerns

Identity, authorization, validation, error handling, logging, transactions, observability, configuration, and security should be handled consistently rather than reinvented independently in each feature.

### 1.4 Architecture communication

Maintain an architecture overview. Diagrams are explanatory views of architecture, not a separate source of truth.

Every application maintains the mandatory diagram set defined in
`framework/method/metamodel/architecture.md` (§Diagrams), kept consistent with the
application as it evolves. See `architecture/diagrams.md` and `design/diagrams.md` for
an application's current diagrams.

## Topic documents

- Domain, application behavior, identity, and access control: `architecture-defaults/domain-and-access.md`
- API architecture: `architecture-defaults/api.md`
- Persistence architecture: `architecture-defaults/persistence.md`
- Web UI architecture and design realization: `architecture-defaults/ui.md`
- Testing architecture: `architecture-defaults/testing.md`
- Deployment architecture: `architecture-defaults/deployment.md`
- Architecture validation: `architecture-defaults/validation.md`
- Governance: `architecture-defaults/governance.md`
- Observability and request identity: `architecture-defaults/observability-and-identity.md`

## 10. Documentation architecture

Documentation should be generated or maintained from durable application knowledge where practical. Avoid parallel descriptions that drift independently.

User-facing help, API documentation, operational documentation, and developer documentation must be updated when behavior or architecture changes materially affect their audience. Online help (§10.1) and operator install/setup help (§10.2) are mandatory deliverables of the application, not optional documentation.

Documentation is not considered complete merely because a file exists; it must remain consistent with the application.

### 10.1 Online help

The application must provide online help for end users, accessible from within the application UI, covering how to use each page and complete the supported use cases. Online help must be kept consistent with current page behavior and use cases as they change.

### 10.2 Operator install/setup help

The application must provide operator-facing documentation covering installation and setup: required environment variables and `.env` configuration, database creation and migration, seed/reference data loading in dev/test environments, and how to start and verify the running application. This documentation must be kept consistent with the deployment and persistence architecture as they change.

## 11. Architecture evolution rule

These are defaults, not immutable rules.

When implementation needs require a material architectural choice:

1. determine whether the choice is already established here or in another architecture specification;
2. if not, make or obtain the decision;
3. persist the durable decision in the application's own architecture before or while implementing it;
4. update the relevant topic document or the application's overview, or split a topic into a dedicated architecture document when the subject becomes substantial;
5. do not preserve an obsolete default merely because it was originally generated.

## Consequences

- The default optimizes for clarity and local execution rather than distributed scale.
- Authentication, advanced authorization, and integration requirements are not assumed by default; an application introduces them once its business intent requires them.
- An application may replace PostgreSQL, React, or any other default-stack choice without changing this framework's defaults for other applications.
