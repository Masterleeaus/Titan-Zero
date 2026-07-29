# Source Intake and Provenance

This directory preserves supplied source material before canonicalisation.

## Rules

1. Every source archive is immutable after import.
2. Each archive receives its own directory or retained archive object.
3. No archive is flattened over another archive.
4. Extraction and merge decisions are recorded under `reports/`.
5. Original paths, file counts and SHA-256 hashes are authoritative.
6. ZIP size is never used as a correctness metric.
7. Every substantive file is classified before migration.
8. Donor or legacy code is preserved even when excluded from runtime.

## Planned source groups

- `application-host/`
- `chatbot-pwa/`
- `titan-core/`
- `titan-zero-interaction-kernel/`
- `workcore/`
- `extensions/base-app/`
- `extensions/ai-system/`
- `extensions/marketing-creative/`
- `modules/titan-bos/`
- `sdk/titan-zero-extension-sdk/`
- `donors/mobile-app-builder/`
- `donors/mobile-ui-kit/`
- `donors/website-app-builder/`
- `references/`

## Current supplied source names

- `Base App System Extensions.zip`
- `AI System Extensions.zip`
- `Marketing & Creative Extensions.zip`
- `Modules for Titan BOS.zip`
- `Extension System.txt`
- `Workcore.txt`
- `TitanZero-Extension-SDK-v2.0.0(1).zip`
- `WorkCore Technical Architecture Specification.txt`
- `MagicAI-v10.91-WORKCORE-MERGED.zip`
- `aipowered-nocode-mobile-app-builder-saas-platform.zip`
- `mobilekit-bootstrap-4-based-mobile-ui-kit-template.zip`
- `online-app-builder-from-website.zip`
- `Titan-Zero-Chatbot-PWA-PASS12-HOST-BOUNDARY-FIXED(1).zip`
- `TitanCore-Phase1-Production-Ready.zip`
- `Titan-Zero-Interaction-Kernel-Checkpoint-Batch-4.zip`

Binary archives will be imported only through a verified binary-safe path. Until then, their names and planned destinations remain recorded here so no source is silently omitted.
