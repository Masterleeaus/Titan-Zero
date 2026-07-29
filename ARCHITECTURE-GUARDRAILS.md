# Titan Zero Architecture Guardrails

## Authority boundaries

- **Titan Zero:** conversation, intent, planning, delegation, interaction state and orchestration.
- **Interaction Engine:** governed workflows shared by humans and AI, local decision support, rules, evidence, confidence and action planning.
- **WorkCore:** structured operational truth, validation, permissions, transactions, audit and domain events.
- **Titan Money / ZeroPay:** payments, settlement, reconciliation and finance-authority actions.
- **Titan Vault:** credentials, API keys and protected local data.

## Non-negotiable rules

1. Titan Zero and AI agents never write WorkCore records directly.
2. Host WorkCore classes and providers take precedence over embedded or donor fallbacks.
3. Every operational action carries tenant, user, device, actor, conversation, correlation and idempotency context.
4. Offline actions are provisional until synchronised and accepted by the authoritative host.
5. Cached authority has an issuance time, expiry, policy version and integrity check.
6. No silent conflict overwrite; conflicting versions and resolution evidence are preserved.
7. High-risk, irreversible or financial actions require current authority and explicit policy.
8. Extensions must use canonical manifests, lifecycle hooks, permissions and dependency declarations.
9. Duplicate migrations, models, routes, providers, local stores and sync engines are defects—not harmless copies.
10. Service workers must not cache secrets, credentials or sensitive API responses.

## Expected execution path

```text
User or authorised AI
  → Chat / Voice / Generative UI
  → Interaction Engine
  → Authority + confidence + risk gates
  → Governed action envelope
  → WorkCore / Titan Money / other canonical authority
  → Domain event + audit
  → Response and local reconciliation
```

These rules follow the canonical WorkCore specification: WorkCore owns operational records, while Titan Zero provides the conversational and intelligent interface.
