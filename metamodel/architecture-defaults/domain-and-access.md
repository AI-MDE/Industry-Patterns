---
type: architecture
---

# Domain, Application Behavior, and Access Control

## 2. Domain and application behavior

### 2.1 Business operations

Business behavior should be expressed through meaningful entity/domain operations or application operations rather than spread unpredictably through controllers, pages, database code, or UI event handlers.

Business rules should be enforced in the authoritative application/domain path, not only in the UI.

### 2.2 Transaction boundaries

Define transactions around coherent business operations. A business operation that must succeed or fail atomically should execute within one transaction boundary where the chosen persistence technology supports it.

Avoid transaction ownership leaking into UI code.

### 2.3 Concurrency

Use an explicit concurrency strategy for mutable records when lost updates matter. Optimistic locking/version checks are the default for normal business application editing unless another strategy is justified.

Concurrency conflicts should produce a recognizable application/API outcome rather than silently overwriting another user's change.

## 3. Identity and access control

### 3.1 User identity

Represent authenticated user identity through a shared application-level identity context rather than having individual features independently decode or reinterpret authentication information.

By default, when an application requires authentication, it authenticates users against a local User entity (username and salted/hashed password) and establishes a server-side session on successful sign-in. Passwords are never returned by an API response or written to logs. An application's own roles and their differentiated permissions are defined in its business specifications, not here.

### 3.2 Authorization enforcement

Authorization must be enforced on the authoritative server/application boundary. Hiding or disabling controls in the UI is a usability measure, not a security boundary.

Use a shared access-enforcement mechanism so permission logic is applied consistently.

All application API operations other than sign-in, the development-only user switch, and static assets require an active session; a request without one is rejected at the authoritative server boundary, not merely hidden in the UI.

### 3.3 Business authorization

When authorization depends on business state or relationships, model it as durable business/application knowledge and enforce it through the same authoritative operation path as the business action.

### 3.4 Development/test identity switching

In non-production environments only, a developer or tester may select any seeded user directly and establish a session without providing a password, to make the application easy to exercise under different identities. This bypass must be unavailable when `NODE_ENV=production`. If an application implements this, it should be modeled as its own use case (e.g. "Switch User (Development Only)").
