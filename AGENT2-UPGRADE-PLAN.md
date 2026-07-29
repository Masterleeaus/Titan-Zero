# Agent 2 — PWA, Interaction Engine and Five-Tier AI Offline Upgrade Plan

## Goal

Transform the existing Titan Zero Chatbot PWA into a device-first operational node while preserving WorkCore as the sole owner of operational truth.

## Architectural boundary

- The PWA calls Agent 1's local WorkCore device contracts first.
- Interaction definitions and AI agents invoke governed WorkCore capabilities only.
- No PWA, Interaction Engine, AI tier, extension or service worker directly mutates WorkCore storage.
- Network access is reserved for sync, external providers, heavy AI and cloud publication.
- Deterministic operation remains available without an LLM, WebGPU, BYO key or network.

## Stage 1 — Repository and source reconciliation

1. Treat the PASS12 host-boundary-fixed archive as the canonical PWA base.
2. Inventory application shell, routes, role screens, local stores, WorkCore client, AI runtime, Interaction Engine, service worker and extension loading.
3. Classify every subsystem as operational, partial, unwired, duplicate, drifted, placeholder, broken, dormant, missing dependency or superseded by Agent 1.
4. Record duplicate IndexedDB authorities and eliminate PWA-local operational business logic.
5. Produce a source-of-truth and donor-source manifest before merging optional packs.

## Stage 2 — WorkCore device boundary

1. Integrate Agent 1 action/read contracts behind one `DeviceWorkCore` facade.
2. Add typed capability results: completed, validation_failed, permission_denied, approval_required, online_required, deferred, conflict and unavailable.
3. Enforce tenant, device, actor, lease, permissions, approval and financial limits before execution.
4. Replace HTTP-first operational actions with local WorkCore action execution.
5. Add contract tests proving no direct table or IndexedDB mutation from Agent 2 code.

## Stage 3 — Interaction Engine device runtime

1. Reconcile the existing Interaction Engine code with the `packages/interaction-device` layout.
2. Compile signed offline bundles for forms, checklists, SOPs, wizards and approvals.
3. Persist encrypted resumable sessions, drafts, repeatable sections, timers and validation state.
4. Route every operational step through the WorkCore capability facade.
5. Add restart, update, sleep, network-loss, conflict and deferred-capability tests.

## Stage 4 — Five-tier local intelligence

1. Implement a deterministic Tier 0 router using intent rules, active screen, interaction state, entity context, connectivity and capability availability.
2. Register role-scoped Tier 1 managers.
3. Register deterministic Tier 2 assistants and specialists with optional local-model enhancement.
4. Implement governed Tier 3 agents that issue WorkCore actions only.
5. Register Tier 4 device and online providers with explicit availability and deferred states.
6. Separate confidence from authority and preserve an explainability trace.

## Stage 5 — Role packs and application shell

1. Generate owner, manager, dispatcher, cleaner, customer and kiosk navigation from signed role manifests.
2. Intersect role, enabled domains, permissions, device capabilities and offline availability.
3. Lazy-load only role-relevant domains and records.
4. Preserve permission enforcement behind every visible or hidden action.
5. Build recovery, offline, sync and revoked-device shell states.

## Stage 6 — Generative UI, search, knowledge and voice

1. Validate and render a versioned Titan UI schema.
2. Use only real local WorkCore query results for business cards, forms and tables.
3. Build tenant-scoped local search and incremental knowledge-pack retrieval.
4. Unify text and voice through the same deterministic execution pipeline.
5. Provide transcript editing and confirmation before destructive actions.

## Stage 7 — Vault, attachments and device tools

1. Consolidate provider keys, sensitive prompts, attachment metadata and interaction state under Titan Vault policy.
2. Implement encrypted camera, file, signature, barcode, QR and location capture.
3. Preserve unsynchronised attachments across restart and update.
4. Add storage pressure, export, local wipe, privacy-mode and device-revocation UX.
5. Verify service-worker caches contain no keys, plaintext operational databases or protected attachments.

## Stage 8 — Sync and conflict centre

1. Display precise local, pending, synchronising, accepted, conflict, failed and retry states.
2. Never label remote-queued work as cloud-saved.
3. Build field-level conflict comparison, audit timeline and permission-aware resolution.
4. Preserve both versions until a governed resolution is accepted.
5. Test acceptance, rejection, lease expiry, permission expiry and revoked-device responses.

## Stage 9 — Extension SDK integration

1. Reconcile the Titan Zero Extension SDK with the PWA loader.
2. Validate signatures and declared domain, permission, role, network, data and device access.
3. Block direct WorkCore storage access and undeclared capabilities.
4. Support remote disablement without deleting unsynchronised operational work.
5. Classify AI, base-system, creative and BOS packs as candidates rather than auto-enabling all donors.

## Stage 10 — Verification and release preparation

1. Run TypeScript, PHP/Laravel, package and architecture tests that are available in the merged base.
2. Execute offline cleaner, dispatcher, manager, owner and customer workflows.
3. Test install, update, rollback, database migration, airplane mode, restart, eviction pressure and low storage.
4. Audit cross-company lookup, hidden action invocation, expired lease, revoked device, extension permissions, provider-key caches and unsafe exports.
5. Produce role/domain, capability, offline/online, Agent 1 dependency, MagicAI handoff, change-manifest and remaining-risk reports.
6. Assign one evidence-based final readiness state; never infer readiness from file presence or mocked tests.

## Source placement

- Root application paths contain the extracted PASS12 PWA source.
- `packages/agent2-device-runtime/` contains the isolated Agent 2 runtime overlay for controlled integration.
- `reference/specifications/` contains authoritative architecture and extension documents.
- `reference/sdk/` contains the Extension SDK source archive.
- Large donor archives are catalogued outside executable source and must be extracted only when a defined integration task requires them.

## Immediate next implementation pass

Begin with a filesystem and runtime inventory of PASS12, identify all WorkCore and IndexedDB authorities, map existing service-worker and route entry points, and produce the reconciliation matrix before changing operational behavior.
