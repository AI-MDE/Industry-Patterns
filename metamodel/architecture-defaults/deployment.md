---
type: architecture
---

# Deployment Architecture

Deployment architecture is an application decision, not a method feature.

Record the selected deployment model when known. Possible models include:
- conventional server/folder deployment;
- cloud platform deployment;
- containerized deployment;
- orchestrated/container-cluster deployment.

Do not implement multiple deployment models unless required. Once selected, document runtime topology, configuration, secrets handling, database connectivity, base paths, health/readiness behavior, and operational constraints relevant to that model.

By default, a new application uses a single deployable application process (conventional server/folder deployment) as its initial model.

## Configuration and secrets

Application tools, integrations, and external connections (database connection strings, third-party API credentials, and similar) are configured through environment variables loaded from a `.env` file, not hardcoded or committed to source control. `app/.env.example` documents the required variables without real values. Each developer or deployment environment supplies its own `.env` with actual credentials.
