# Source-of-Truth and Donor Manifest

## Authoritative

- `Titan-Zero-Chatbot-PWA-PASS12-HOST-BOUNDARY-FIXED(1).zip`: canonical PWA application base.
- Agent 1 WorkCore contract and device-runtime packages: canonical operational API and local domain authority.
- `WorkCore Technical Architecture Specification.txt`: architecture constraint reference.
- `TitanZero-Extension-SDK-v2.0.0(1).zip`: extension contract reference.

## Controlled staging overlay

- `Titan-Zero-Chatbot-PWA-AGENT2-DEVICE-INTEGRATION-STAGING-OVERLAY.zip`: TypeScript device-runtime candidate.

## Donor/reference only

- `AI System Extensions.zip`
- `Base App System Extensions.zip`
- `Marketing & Creative Extensions.zip`
- `Modules for Titan BOS.zip`
- `MagicAI-v10.91-WORKCORE-MERGED.zip`
- mobile and app-builder archives

No donor archive is enabled or merged merely because files exist. Each donor must pass ownership, licensing, dependency, security and architecture checks before selected code is copied.

## Merge rule

Executable source must remain traceable to one of three categories:

1. canonical base;
2. controlled Agent 2 implementation;
3. explicitly selected donor code with a recorded reason and test.

Anything else remains reference material and is excluded from runtime registration.