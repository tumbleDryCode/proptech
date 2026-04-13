---
description: "Use when cleaning legacy JavaScript, especially js/app files, duplicated utility logic, global namespace collisions, and inline script migration."
applyTo: "js/app/**/*.js"
---
# JavaScript App Cleanup Rules

- Keep behavior identical unless the task explicitly asks for functional changes.
- Treat files outside `js/app/**` as third-party libraries and avoid edits unless explicitly requested.
- Assume most `x_aa-*`/feature modules depend on the core chain: `x_all.js` -> `x_booter.js` -> `x_allinit.js`; avoid breaking initialization order.
- Treat `x_allinit.js` as first-load initializer for globals and essential functions; avoid moving these initializers downstream.
- Preserve pid routing contract: `?pid=<name>` loads `js/app/x_<name>.js` with template `tplates/<name>.html`.
- Preserve module lifecycle hook pattern where modules override `fnishCntLoad` and may return/use `dmyFnishCntLoad`.
- Keep AJAX DB flow compatible with `_p/do.php` callback conventions used by `doQComm(...)`.
- Preserve existing public globals consumed by PHP templates.
- Replace copy-pasted blocks with small shared helpers only when reuse is obvious (2+ call sites).
- Normalize naming for new symbols with `x_` compatibility wrappers when needed.
- Move magic strings to top-level constants within the same file before considering cross-file extraction.
- Keep DOM selectors centralized and avoid repeating long selector strings.
- Guard against missing nodes before DOM writes.
- Avoid introducing new dependencies unless there is a clear maintenance win.

## Required Checks
- Run `node --check` for each edited JS file.
- Verify likely usage references with `rg` before deleting or renaming exported globals.
