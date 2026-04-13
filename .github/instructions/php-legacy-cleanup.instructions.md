---
description: "Use when cleaning legacy PHP pages, include flows, form handlers, and shared template fragments in this project."
applyTo: "**/*.php"
---
# PHP Legacy Cleanup Rules

- Preserve request parameter names and response shape unless explicitly requested.
- Keep include order stable unless there is a verified initialization issue.
- Prefer tiny extraction functions over large structural rewrites.
- Avoid changing SQL semantics during stylistic cleanup.
- Keep backward-compatible redirects and session checks intact.
- Use explicit null/isset guards around external input and superglobals.
- Do not remove dated variant pages until references are validated.

## Required Checks
- Run `php -l` on every edited PHP file.
- Use `rg` to confirm include/require paths before moving shared fragments.
