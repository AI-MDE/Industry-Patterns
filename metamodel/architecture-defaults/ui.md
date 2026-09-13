---
type: architecture
---

# Web UI Architecture

## 6.1 Live application behavior

Production UI pages should operate against real application APIs/data rather than static mock datasets except in explicit prototypes or tests.

## 6.2 Actions map to application operations

Actionable controls should invoke explicit application operations. Do not bury durable business rules only inside click handlers or page-local state.

## 6.3 UI states

Pages and controls should account for meaningful states such as loading, empty, ready, validation failure, business rejection, authorization denial, concurrency conflict, and unexpected failure where applicable.

## 6.4 Navigation and routing

Navigation should be stable and intentional. Applications deployed beneath a base path must not assume root hosting when the deployment architecture says otherwise.

## 6.5 Reference display

Human-facing UI should normally display meaningful labels for referenced business objects rather than opaque database identifiers.

## 6.6 Governed values

Enumerations, allowed choices, statuses, and other governed values should come from authoritative business/application knowledge or APIs, not be inconsistently duplicated across pages.

## 6.7 Design-system consistency

Use a coherent design system or shared styling conventions. Reusable behavior and presentation should be implemented consistently across pages rather than forked per feature.

## 6.8 Stable selectors

Where automated UI testing requires selectors, provide stable semantic selectors that do not depend on fragile styling or DOM position.

## 6.9 Frontend implementation

By default, the frontend is a React + TypeScript single-page application, built with Vite and served as static assets by the Express backend, with navigation covering the application's capabilities and list and create/edit interactions sufficient to execute its specified use cases.

Source lives in `app/web/` (Vite project) and builds to `app/public/`, which the backend serves unchanged from its existing static-file handling; no separate frontend server process is introduced in production. `app/web/` may run its own dev server with a proxy to the backend API for local development convenience only.

## 7. UI design realization

Page specifications belong under `specs/design/pages/` and should describe page purpose, information, actions, states, and navigation without dictating unnecessary component-level implementation.

Pages may be composed from reusable panels/components. Default pages may be inferred from business entities and use cases, but inferred design must be persisted when it becomes an intentional application design decision.

Maintain a UI catalog only when it provides durable value across multiple pages; do not create one as paperwork.
