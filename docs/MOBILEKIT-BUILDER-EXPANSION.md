# MobileKit Builder Expansion

## Goal

Use the supplied MobileKit v2.9.1 interaction patterns to expand the Titan Zero chatbot builder without replacing the current design system or bypassing Interaction Engine and WorkCore governance.

## New builder capabilities

### Mobile navigation
- Bottom navigation with 2–5 labelled destinations
- Safe-area support
- Bound badges for pending jobs, messages and sync conflicts
- Role-aware destinations

### Guided workflows
- Offline-resumable multi-step forms
- Step validation through Interaction Engine rules
- Draft persistence per user, tenant, device and workflow
- Final action emitted as a governed intent

### Contextual overlays
- Action sheets for compact mobile choices
- Off-canvas inspectors, filters and entity details
- Risk-aware confirmation before medium/high-risk actions
- Focus trapping, Escape handling and focus restoration

### Local discovery
- Full-screen mobile search
- Local indexes for customers, properties, jobs, knowledge and recent entities
- Confidence-based entity resolution
- Online enrichment when connectivity exists

### Feedback and state
- Toast stack for local saves, queued actions, sync results and conflicts
- Connectivity state component showing offline, syncing, reconciled and blocked states
- Skeleton and preloader variants that never obscure unsynchronised work

## Required implementation layers

1. Builder component definitions under `resources/builder/components/mobile/`.
2. Blade renderers under `resources/views/components/titan-builder/mobile/`.
3. A TypeScript controller for overlay state, focus management and offline draft handling.
4. Generative UI schema registration and validation.
5. Interaction Engine adapters for workflow transitions, confidence and authority decisions.
6. Browser tests at mobile, tablet and desktop widths.
7. Offline tests proving refresh/restart recovery and later WorkCore reconciliation.

## Explicit exclusions

- Do not copy MobileKit's full demo application shell.
- Do not add a second Bootstrap runtime if the host already provides one.
- Do not import sample branding, product images or demo content.
- Do not permit browser components to write operational data directly.
- Do not make cached permissions permanent authority.

## Acceptance criteria

- New components appear in the chatbot builder catalogue.
- AI-generated specifications can select them through the validated component registry.
- The same workflow can be completed by a user, user plus AI, or delegated AI agent.
- Offline progress survives refresh and device restart.
- High-risk actions stop for confirmation or authoritative online validation.
- Every operational outcome is reconciled through WorkCore and produces an audit event.
