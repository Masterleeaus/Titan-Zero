# PASS12 Source Inventory

- Files: **1542**
- Bytes: **5,838,608**

## Top-level distribution

- `System`: 1003
- `resources`: 317
- `database`: 60
- `tests`: 46
- `docs`: 30
- `public`: 4
- `config`: 3
- root reports, manifests and notices: 79

## Extension distribution

- `.php`: 1106
- `.json`: 197
- `.md`: 111
- `.js`: 66
- extensionless: 18
- `.png`: 15
- `.txt`: 8
- `.scss`: 5
- `.css`: 4
- `.mjs`: 3
- other: 9

## Runtime signals

- IndexedDB/local database references: 11 files.
- Service-worker and update-lifecycle references: 34 files.
- WorkCore references: 470 files.
- Direct WorkCore HTTP calls detected: 3 files.
- Broad database-access patterns detected: 105 files requiring classification.
- Interaction/wizard references: present across PHP, JS and documentation.
- Five-tier AI references: present in both legacy PASS12 and the Agent 2 overlay.

## Important paths

### Local storage authorities

- `resources/pwa/chatbot-pwa/device-db.js`
- `resources/pwa/chatbot-pwa/crypto-vault.js`
- `resources/pwa/chatbot-pwa/workcore/database.js`
- `resources/pwa/chatbot-pwa/workcore/attachments.js`
- `resources/pwa/chatbot-pwa/workcore/client.js`

### WorkCore HTTP/provider boundary

- `resources/pwa/chatbot-pwa/workcore/knowledge.js`
- `resources/pwa/chatbot-pwa/workcore/offline-packs.js`
- `resources/pwa/chatbot-pwa/workcore/network.js`

### PWA entry points

- `resources/pwa/chatbot.webmanifest`
- `resources/pwa/chatbot-sw.js`
- `resources/pwa/chatbot-pwa/runtime.js`
- `resources/pwa/chatbot-pwa/register.js`
- `resources/views/frame.blade.php`
- `resources/views/index.blade.php`
- `resources/js/titan-shell-builder.js`
- `resources/js/titan-operational-screens.js`

## Stage 1 interpretation

PASS12 is a substantial real codebase rather than a shell, but it contains overlapping local runtime authorities. The first implementation change must define one operational WorkCore boundary before any Interaction Engine or AI overlay is activated.