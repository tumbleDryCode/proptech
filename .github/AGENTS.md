# Incasa Project Guidelines

## Mission
- Modernize and stabilize this legacy real-estate codebase in small, reversible changes.
- Prioritize behavior-preserving cleanup before visual redesign or feature expansion.

## Preferred Workflow
1. Start with an audit pass: identify duplicated logic, dead assets, risky globals, and inline scripts.
2. Propose a narrow cleanup slice (one page or one module family).
3. Implement minimal edits.
4. Run cheap validation for touched files.
5. Summarize risk, rollback path, and follow-up slices.

## File Area Priorities
- Highest priority: `js/app/**` and top-level property/search pages.
- Medium priority: shared includes in `include/**` and `_p/**` handlers.
- Lower priority: archived/dated variants (`*_aug*`, `*_jul*`, `_old`, `trash/**`).
- Third-party/vendor JavaScript: everything under `js/**` outside `js/app/**` is treated as external library code and should be read-only unless explicitly requested.

## Runtime Contract
- Main entry page is `index.html` (PHP-parsed in this project) and pulls common includes from `include/**` such as header/footer/meta and JS library loaders.
- `pid` is the primary route variable: `?pid=<name>` maps to `js/app/x_<name>.js` and `tplates/<name>.html`.
- Module lifecycle contract: page modules commonly wrap and override `fnishCntLoad` with `dmyFnishCntLoad`; preserve this pattern unless explicitly migrating all callers.
- `x_booter.js` drives URL parsing and `eindex(...)` routing, including iframe-based history/back-button behavior via `eindex.html`; preserve parent/iframe variable relay semantics.
- Database calls are AJAX-driven through `_p/do.php` with callback functions; preserve callback signatures and response-shape assumptions.

## Safety Rules
- Avoid changing data contracts without explicit request.
- Do not remove files until all references are verified.
- Keep function and variable renames scoped and validated.
- Prefer extracting helper functions over broad rewrites.
- Do not refactor bundled/minified/vendor library files in `js/**` outside `js/app/**` during cleanup work.
- Treat `js/app/x_all.js`, `js/app/x_booter.js`, and `js/app/x_allinit.js` as core runtime dependencies for many `x_aa-*` and similar modules; preserve load-order contracts when refactoring.
- Canonical load order rule: `js/app/x_allinit.js` loads first and seeds global variables/essential functions; cleanup must preserve this initialization role.

## Validation Commands
- JavaScript syntax check (single file): `node --check js/app/<file>.js`
- PHP syntax check (single file): `php -l <file>.php`
- Fast reference search: `rg "symbol_or_filename"`

## Agent Routing Hints
- Use the JS cleanup agent for `js/app/**` decomposition, dedupe, and module boundary cleanup.
- Use the PHP cleanup agent for page/controller includes and legacy form flow cleanup.
- Use the audit agent first when task scope is unclear.
