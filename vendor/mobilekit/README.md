# MobileKit Reference Pack

Source supplied by the project owner from `mobilekit-bootstrap-4-based-mobile-ui-kit-template.zip` (MobileKit v2.9.1).

This directory records the MobileKit patterns selected for adaptation into the Titan Zero chatbot builder. The original commercial template is not treated as the application authority and must not overwrite Titan Zero, Interaction Engine, WorkCore, PWA, security, or builder files.

## Selected patterns

- App bottom navigation
- Action sheets
- Off-canvas panels
- Multi-step form wizard
- Numeric stepper
- Sticky grouped list
- Search overlay/results
- Toast notifications
- Mobile timeline
- Skeleton/loading states
- Online/offline state indicators
- Add-to-home prompt

## Integration rules

1. Components are rewritten as Titan Builder definitions and native Blade/JS implementations.
2. No MobileKit demo page writes operational records.
3. All business mutations emit declarative intents through the Interaction Engine.
4. WorkCore remains the only authority for operational records.
5. Offline UI state may be stored locally, but operational truth is reconciled through WorkCore.
6. Third-party plugin notices are retained in `THIRD_PARTY_NOTICES.md`.
7. macOS metadata, duplicate demos, sample branding and unused image assets are excluded.

## Builder expansion

The adapted catalogue lives under `resources/builder/components/mobile/` and is registered by `resources/builder/mobilekit-extension.json`.
