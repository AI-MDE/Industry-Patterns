# Observability and Request Identity

## Decision
Every application request or business transaction must execute with explicit identity and trace context so that its activity can be followed from entry through completion.

The application distinguishes:

- **Principal Identity** — identifies the actor or calling principal responsible for the activity. It remains stable for the authenticated or application session where a session exists.
- **Correlation ID** — uniquely identifies one request or business transaction. A new correlation ID is created at the application boundary when one is not supplied by a trusted upstream caller.
- **Session ID** — identifies the application session when sessions are used. A session may contain many requests and therefore many correlation IDs.

These identifiers serve different purposes and must not be conflated.

## Principal Identity
Every request must carry a principal context. When authentication exists, the principal ID must identify the authenticated principal using a stable application identity rather than a display name. When unauthenticated use is intentional, the principal context must explicitly represent an anonymous or session-scoped principal rather than silently omitting identity.

## Correlation ID
Every inbound request must have exactly one correlation ID for that request or transaction. Unless a trusted upstream boundary explicitly supplies one, the application generates a globally unique identifier at request entry, preserves it for the entire request, includes it in operational logs, and returns it to the caller in protocol metadata. A correlation ID is not a database primary key or business-object identity.

## Logging
The application must use a consistent structured logging facility rather than scattered console calls as its operational logging strategy. Request logs include, where applicable: timestamp, level, correlation ID, principal ID, session ID, route or operation, outcome/status, duration, and safe diagnostic information for failures.

Passwords, access tokens, session secrets, and unnecessary sensitive business data must not be logged.

## Request Lifecycle
At minimum the operational trace must make it possible to reconstruct request receipt, identity/context establishment, correlation assignment, the invoked route or operation, failure when one occurs, and completion status and duration.

## Business Audit vs Operational Logging
Operational logs diagnose system behavior and do not replace business audit history. When a business-significant operation requires durable accountability, audit information must identify who performed it, what changed, and when, and should carry principal and correlation identity.

## Consequences
Every request is traceable end-to-end; support can use the correlation ID to locate related operational events; and future integrations can propagate trace context without changing business specifications.
