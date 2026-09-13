---
type: architecture
---

# API Architecture

## 4.1 Capability-aligned API boundary

APIs should expose meaningful application/business operations and data at stable boundaries. Avoid leaking persistence mechanics or arbitrary internal structure directly into public contracts.

By default, the API is implemented as a REST-style JSON API on a TypeScript/Express backend, exposing collection and mutation operations for the application's business entities. Contracts are defined under `specs/design/api/`.

## 4.2 Endpoint contracts

Every externally consumed API operation must have a clear contract for request, response, validation, authorization, and failure behavior. Application-specific contracts belong under `specs/design/api/`.

## 4.3 Request and response validation

Validate untrusted request data at system boundaries. Validate or structurally guarantee responses where doing so protects external contracts or prevents silent contract drift.

## 4.4 Business-rule responses

Business-rule rejection is a normal domain/application outcome and should be distinguishable from infrastructure failures and malformed requests. Return useful, stable error information that allows UI and integrations to respond correctly.

## 4.5 Status and error discipline

Use protocol status codes consistently. Do not return successful protocol statuses for failed operations merely to simplify client handling.

Error responses should follow a consistent application-wide shape.
