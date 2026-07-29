# Stage 1 Reconciliation Matrix

## Canonical sources

| Area | Canonical source | Status | Action |
|---|---|---|---|
| PWA host and shell | PASS12 host-boundary-fixed archive | Partial | Keep as application base; repair in place |
| Operational records and commands | Agent 1 WorkCore Device Runtime | External dependency | Consume contracts only; do not duplicate |
| Interaction runtime | Agent 2 TypeScript overlay | Staging | Merge behind PWA bootstrap after contract reconciliation |
| Five-tier device AI | Agent 2 overlay plus existing PASS12 runtime | Duplicate/partial | Select one deterministic runtime and remove parallel authorities |
| Service worker | PASS12 PWA worker stack | Partial | Consolidate cache/update ownership; preserve local stores |
| Extension loading | Titan Zero Extension SDK v2 | Staging | Integrate only after manifest and signature validation |
| Cloud backend | MagicAI + WorkCore merged archive | Reference only | Use for handoff contracts, not as PWA host |

## Initial findings

| Subsystem | Classification | Evidence | Required change |
|---|---|---|---|
| Application shell | Operational/partial | Blade views, shell builder and operational screens exist | Map routes and remove HTTP-first operational actions |
| IndexedDB authority | Duplicate | Device DB, crypto vault, WorkCore database, attachments and client each manage local state | Define one operational store owner under Agent 1; retain separate UI/session stores only |
| WorkCore client | Partial/drifted | 470 files reference WorkCore; three runtime files call WorkCore HTTP endpoints | Replace operational HTTP-first calls with local capability facade |
| Interaction Engine | Partial/unwired | Wizard and interaction references exist without one signed device-bundle authority | Adopt `packages/interaction-device` runtime and compiled bundle registry |
| Five-tier AI | Partial/duplicate | Existing PHP/JS AI layers overlap with Agent 2 runtime | Keep deterministic Tier 0 and governed Tier 3 boundary; classify legacy layers before activation |
| Generative UI | Operational/partial | Existing integration documents and renderer code present | Require schema validation and real WorkCore query data |
| Service worker | Partial | Multiple worker/runtime references and update reports | Consolidate update states and secret/cache exclusions |
| Conflict handling | Partial | Sync and resilience files exist | Verify field-level recovery and truthful status labels |
| Voice | Partial | Existing voice code and PWA hooks | Route through the same deterministic text pipeline |
| Extensions | Unwired | SDK exists separately from host | Add signed manifest loader with declared-access enforcement |

## Boundary defects requiring Stage 2 repair

1. `resources/pwa/chatbot-pwa/workcore/knowledge.js` contains WorkCore network calls.
2. `resources/pwa/chatbot-pwa/workcore/offline-packs.js` contains WorkCore network calls.
3. `resources/pwa/chatbot-pwa/workcore/network.js` is an HTTP authority and must remain sync/provider-only.
4. PWA-local operational IndexedDB logic must not become a second WorkCore implementation.
5. Existing AI and interaction handlers must never write operational stores directly.

## Stage 1 exit criteria

- PASS12 remains the only PWA host.
- Agent 1 remains the only operational domain authority.
- Donor packs are catalogued but not auto-enabled.
- Every local store and runtime entry point is mapped before behavior changes.
- Stage 2 begins with a single `DeviceWorkCore` contract facade.