# Titan Zero — Multi-Step Upgrade Plan

Branch: `agent/interaction-engine-pwa-upgrade`

## Objective

Prepare the clean Titan Zero repository as the authoritative working branch for the latest chatbot PWA with the Interaction Engine integrated, while preserving strict boundaries between Titan Zero orchestration, WorkCore operational authority, Titan Money/ZeroPay finance authority, and device-local offline execution.

## Authoritative source order

1. `Titan-Zero-Chatbot-PWA-PASS12-HOST-BOUNDARY-FIXED(1).zip` — primary chatbot/PWA base.
2. `MagicAI-v10.91-WORKCORE-MERGED.zip` — host application and canonical WorkCore integration reference.
3. `TitanZero-Extension-SDK-v2.0.0(1).zip` — extension contracts, manifests, lifecycle and compatibility rules.
4. `AI System Extensions.zip` — AI-facing extensions and five-tier workforce capabilities.
5. `Base App System Extensions.zip` — core platform extensions.
6. `Marketing & Creative Extensions.zip` — creative and marketing capabilities.
7. `Modules for Titan BOS.zip` — BOS/Nwidart modules and reusable bounded systems.
8. `WorkCore Technical Architecture Specification.txt`, `Workcore.txt`, and `Extension System.txt` — architectural constraints and reconciliation references.
9. App-builder and mobile UI donor archives — reference-only unless a concrete missing capability is verified.

## Architectural rules

- WorkCore remains the only authority permitted to modify operational business records.
- Titan Zero owns conversation, intent, planning, delegation, interaction state and orchestration.
- The Interaction Engine is shared by human-only, human-plus-AI and authorised AI-operated workflows.
- Offline execution must use local projections, rules, knowledge, workflow state and a governed outbox; it must never impersonate live authority.
- Finance actions route through Titan Money/ZeroPay rather than guessed WorkCore model writes.
- Existing host implementations take precedence over embedded fallbacks.
- Merge only verified missing or newer code; do not bulk-overlay older cumulative archives.
- Preserve tenant, user, device, company, conversation and correlation identifiers through every action.
- No duplicate service providers, routes, migrations, models, IndexedDB stores or sync engines.

## Phase 1 — Repository preparation

- Initialise clean repository and isolated branch.
- Add root plan, source manifest, architecture guardrails and ignore rules.
- Extract the Pass 12 chatbot source into the repository root without retaining an unnecessary wrapper directory.
- Record source ZIP hashes, file counts and extraction paths.
- Exclude donor ZIPs, generated reports, caches, dependencies and secrets from source control.

## Phase 2 — Baseline inventory and health audit

- Identify Laravel/package/PWA roots and extension boundaries.
- Generate directory, namespace, route, provider, migration and asset inventories.
- Run PHP syntax checks, Composer autoload validation, TypeScript checks and available tests.
- Trace chat input through online and offline execution paths.
- Record confirmed defects, probable defects, architectural risks, dormant code and intentional placeholders separately.

## Phase 3 — Interaction Engine integration audit

- Verify service-provider registration, configuration, routes and container bindings.
- Trace runtime selection for user-only, user-plus-AI and AI-operated modes.
- Confirm authority is evaluated before confidence or autonomous execution.
- Verify workflow persistence, resumability, evidence graphs, constraint evaluation, abstention and explanations.
- Confirm no Interaction Engine path writes directly to WorkCore models.

## Phase 4 — Browser-local offline runtime

- Prove the PWA invokes a local Interaction Engine path when offline.
- Reconcile PHP and TypeScript contracts through serialisable interaction definitions.
- Add or repair local intent matching, entity resolution, workflow execution, confidence gating, explanation composition and generative UI.
- Persist active entities, pending questions, confirmations, workflows and local actions across restarts.
- Add local knowledge-pack versioning, integrity checks and tenant/device scoping.

## Phase 5 — WorkCore and host-boundary hardening

- Verify all operational writes use canonical WorkCore actions/services.
- Remove or quarantine namespace-shadowing fallbacks and direct model-write paths.
- Reconcile device registration, sync cursors, attachments, change feeds, knowledge feeds, conflicts and action envelopes.
- Ensure idempotency, optimistic concurrency, audit metadata and fail-closed behaviour.
- Keep finance actions unresolved until Titan Money/ZeroPay contracts are explicitly available.

## Phase 6 — Extension-system reconciliation

- Inventory the SDK and all extension archives.
- Compare extension IDs, versions, manifests, providers, routes, permissions, migrations, UI registrations and dependencies.
- Merge only missing or superior implementations into canonical extension locations.
- Prevent duplicate extensions and parallel runtimes.
- Add compatibility and architecture tests for extension discovery and lifecycle operations.

## Phase 7 — Five-tier AI and agent orchestration

- Reconcile managers, assistants/specialists and action agents with the Interaction Engine.
- Ensure every agent has explicit tools, delegated authority, risk class, offline policy and audit metadata.
- Wire deterministic local capabilities before cloud-model fallback.
- Add online provider selection, BYO-key support and privacy-aware context packaging.

## Phase 8 — UI, settings and generative interface

- Preserve the current chatbot-first visual language.
- Keep the persistent chat bar as the main interaction surface.
- Add settings behind the header gear rather than a primary navigation item.
- Wire device vault, providers, keys, sync, offline data, knowledge packs, permissions and diagnostics.
- Make offline generated UI useful for jobs, customers, schedules, checklists, evidence, conflicts and approvals.

## Phase 9 — Security, privacy and data integrity

- Audit tenant scoping, authorization, CSRF, CORS, upload validation, secret storage and service-worker caching.
- Confirm credentials and sensitive API responses are never cached by the service worker.
- Verify encrypted local storage and safe key lifecycle.
- Add revoked-device, stale-policy, replay, tampering and cross-tenant tests.

## Phase 10 — Verification and release preparation

- Run syntax, static, unit, integration, browser and architecture tests.
- Verify online, offline, reconnect, conflict and multi-device scenarios.
- Produce a clean source manifest and change report.
- Keep generated audit output outside the production runtime package where possible.
- Prepare commits in reviewable slices and open a draft pull request only after the branch baseline is complete.

## Initial branch deliverables

- Extracted Pass 12 source as the baseline.
- Root `UPGRADE-PLAN.md`.
- Root `SOURCE-MANIFEST.md` with archive lineage and hashes.
- Root `ARCHITECTURE-GUARDRAILS.md`.
- Appropriate `.gitignore` and repository hygiene files.
- Baseline audit report and test results.
