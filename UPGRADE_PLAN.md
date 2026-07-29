# Titan Zero — Multi-Step Upgrade Plan

Branch: `agent/titan-zero-interaction-kernel-upgrade`

## Objective

Prepare the clean Titan Zero repository for a controlled, zero-loss integration of the Titan Zero Interaction Kernel, canonical Titan Core client boundary, WorkCore integration contracts, chatbot PWA, extensions, SDK material, and selected donor UI/app-builder code.

The permanent authority split is:

- **Meetup Chat** owns communication, conversations, channels, presence, attachments, voice/video transport, notifications and realtime delivery.
- **Titan Zero Interaction Kernel** owns the user-facing Titan Zero persona, conversational coordination, clarification, presentation, channel-neutral UI schemas, streaming, interruption/resumption and delegation narration.
- **Titan Core** owns capability discovery, trusted execution context, deterministic planning, signed plan previews, approval policy, governed memory, execution governance, audit and transactional outbox.
- **TitanAgentSystem** owns the Zero/Uno/Duo/Trio/Quattro workforce hierarchy and authorised specialist execution.
- **WorkCore** exclusively owns structured operational records, business rules, tenancy, validation, transactions, operational audit and domain events.

Titan Zero must never directly write WorkCore records.

---

## Phase 0 — Repository and Source Preservation

1. Keep `main` immutable during integration.
2. Work only on this branch.
3. Import every supplied source archive into a separate `sources/` directory without flattening or overwriting.
4. Generate SHA-256 inventories and file-count reports for every source pack.
5. Record each source’s purpose, authority and intended disposition.
6. Never validate by ZIP size; use paths, file counts and hashes.

Expected source groups:

- canonical application/base archive;
- Titan Zero chatbot PWA;
- WorkCore technical and architecture references;
- WorkCore/MagicAI merged application;
- Base App System Extensions;
- AI System Extensions;
- Marketing & Creative Extensions;
- Modules for Titan BOS;
- TitanZero Extension SDK;
- no-code/mobile-app-builder donors;
- mobile UI kit donor;
- website-to-app-builder donor;
- Interaction Kernel checkpoint archives;
- Titan Core Phase 1 package.

---

## Phase 1 — Canonical Host Selection and Baseline

1. Inspect all candidate host archives.
2. Select the largest coherent MagicAI/WorkCore host as the canonical Laravel base.
3. Record the selected archive, file count, framework versions and database authority.
4. Extract the host to repository root while preserving donor archives under `sources/`.
5. Establish Composer, Node, PHP and database baseline.
6. Add CI for syntax, dependency installation, tests and architecture checks.

Deliverables:

- `reports/host-selection.md`
- `reports/original-inventory.csv`
- `reports/source-authority.md`
- bootable baseline commit.

---

## Phase 2 — Titan Core Foundation Integration

1. Import the canonical Titan Core implementation only.
2. Reject duplicate capability registries, planners, memory repositories, execution engines and outboxes.
3. Wire typed WorkCore and TitanAgentSystem capability sources.
4. Repair company, actor and conversation context resolution.
5. Add signed queue-context restoration and revalidation.
6. Add deterministic capability availability diagnostics.
7. Add tests for boot order, duplicate IDs, tenant isolation and malformed definitions.

Deliverables:

- canonical `app/TitanCore/`;
- provider and configuration wiring;
- verification command;
- architecture boundary tests.

---

## Phase 3 — Titan Zero Interaction Kernel Repair and Completion

1. Import the current Interaction Kernel checkpoint.
2. Resolve duplicated `ConversationSession` and `InteractionSession` state authority.
3. Persist interaction transitions and active plan IDs.
4. add migrations for interaction-only tables.
5. add typed Titan Core transport and local client adapter.
6. add clarification, presentation, UI schema, streaming and persona subsystems.
7. add Meetup channel adapter without duplicating Meetup models.
8. enforce that no execute route or direct WorkCore mutation exists.

Deliverables:

- canonical `app/TitanZero/`;
- interaction migrations;
- provider bindings;
- feature and architecture tests.

---

## Phase 4 — WorkCore Canonicalisation

1. Apply the zero-loss extraction protocol.
2. Partition WorkCore into canonical runtime and remainder archive.
3. Account for every original file by path and SHA-256.
4. Select one namespace/provider authority.
5. repair migrations, vertical paths, missing dependencies and module boot order.
6. remove active runtime duplication while preserving all donors in the remainder.
7. preserve the architectural rule that WorkCore alone writes operational records.

Deliverables:

- canonical WorkCore runtime;
- WorkCore remainder archive;
- file manifest and hash verification;
- authority and dependency reports.

---

## Phase 5 — Commercial Domain Repair

1. Consolidate commercial lifecycle code under `app/Domains/WorkCore/Commercial`.
2. separate operational finance from Titan platform billing.
3. implement deterministic money arithmetic and lifecycle state machines.
4. reconcile quotes, contracts, invoices, payments, credits, expenses, purchasing and reporting.
5. expose governed actions/read models/AI tools only.
6. integrate Titan Money and accounting/payment providers through contracts only.
7. publish stable events through the WorkCore transactional outbox.

---

## Phase 6 — PWA and Meetup Integration

1. Import the chatbot PWA as the device-facing shell.
2. preserve privacy-first, device-first and BYO-key architecture.
3. integrate Meetup conversations and Titan Zero interaction views.
4. connect local interaction state without duplicating WorkCore operational truth.
5. implement safe offline queues, encrypted local storage and sync contracts.
6. add settings via top-corner gear and maintain template-aware navigation.

---

## Phase 7 — Extension and SDK Reconciliation

1. Inventory Base App, AI, Marketing/Creative and BOS extensions.
2. classify each extension as canonical, adapter, donor, legacy or reference.
3. migrate reusable code into canonical modules rather than parallel apps.
4. update the TitanZero Extension SDK to target the canonical boundaries.
5. ensure extensions cannot bypass Titan Core or WorkCore governance.
6. preserve unused/legacy extension files in source archives and manifests.

---

## Phase 8 — UI and App-Builder Donor Extraction

1. inspect no-code/mobile app-builder archives and UI kit.
2. extract reusable mobile shell, form, preview, renderer and PWA components.
3. do not import competing authentication, billing, tenancy or app-builder runtimes blindly.
4. document licensing and provenance for every retained donor asset.
5. integrate only code compatible with the canonical Laravel/PWA architecture.

---

## Phase 9 — Security, Privacy and Offline Hardening

1. enforce company scope at every query and interaction boundary.
2. validate Meetup participation before creating sessions.
3. sanitize attachments and presentation metadata.
4. prevent chain-of-thought, signing secrets, credentials and internal schemas from reaching channels.
5. encrypt local sensitive data and secrets through Titan Vault contracts.
6. implement conflict-safe, versioned sync without silent overwrite.
7. add audit correlation and causation IDs across layers.

---

## Phase 10 — Verification and Release Preparation

1. run PHP syntax checks, Composer validation, Laravel boot, route/config cache and migration tests.
2. run unit, feature, integration, tenancy and architecture tests.
3. verify no direct WorkCore writes from Titan Zero or TitanAgentSystem.
4. verify no duplicate runtime authorities.
5. regenerate manifests, directory listings and dependency graphs.
6. create a draft PR only after branch verification passes.

Required release reports:

- `reports/file-count-report.md`
- `reports/hash-verification.csv`
- `reports/classification-report.md`
- `reports/dependency-graph.json`
- `reports/architecture-boundaries.md`
- `reports/security-verification.md`
- `reports/release-readiness.md`

---

## Immediate Branch Preparation

This branch will initially contain:

- this plan;
- `sources/README.md`;
- source inventories and provenance metadata;
- extracted source packs in isolated directories;
- no premature merge into the root application until host selection is complete.

The first implementation checkpoint is complete when all supplied archives are uploaded or represented by manifests and the canonical host has been selected with evidence.
