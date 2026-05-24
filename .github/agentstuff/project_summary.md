# Project Summary

This repository is a legacy PHP + vanilla JavaScript real-estate web app (single-site, SPA-like behavior on top of a server-rendered `index.html`).

## What It Is

- Product: property listing/management platform for small-medium agencies.
- Main entry page: `/index.html` (executed as PHP via `.htaccess`).
- Backend: PHP scripts + MySQL.
- Frontend: large custom JS app (`JSSHOP` namespace) with page-module loading.

## Key Technologies

- PHP 5+ style code (procedural, includes-based)
- MySQL (schema in `/_p/developers.sql`)
- Vanilla JS + jQuery
- UI/libs: Bootstrap, Leaflet, SortableJS, Swiper, TinyMCE, CCapture
- Mapping/3D integrations: Leaflet + Google Maps APIs
- No modern build pipeline (no npm/composer app setup in repo)

## High-Level Structure

- `/index.html`: main shell (header/footer, dynamic content container, core JS includes)
- `/include/`: shared PHP fragments/config
	- `db_config.php`: DB connection constants
	- `html_header.php`, `header.php`, `footer.php`, `html_footer.php`
- `/_p/`: backend endpoints/utilities
	- `do.php`: central AJAX/data endpoint
	- upload/image helpers, DB helpers, SQL dump
- `/js/app/`: core application logic (custom SPA system)
	- `x_allinit.js`: global state/constants
	- `x_all.js`: shared utilities/core
	- `x_booter.js`: boot + routing/module loading
	- `x_<pid>.js`: page modules (for example, `x_aa-show-prop.js`, `x_aa-edit-user.js`)
- `/tplates/`: HTML templates loaded dynamically (`aa-*.html`, `index_main.html`, etc.)
- `/css/`: styling files (`main.css`, custom `x_*.css`)
- `/images`, `/fonts`, `/skins`, `/webfonts`: assets

## Runtime Flow

1. Request hits `index.html` (parsed as PHP).
2. Shared includes load config + UI shell.
3. JS boot chain runs: `x_allinit.js` -> `x_all.js` -> `x_booter.js`.
4. Router reads query params (`?pid=...`).
5. App loads:
	 - template: `tplates/<pid>.html`
	 - script: `js/app/x_<pid>.js`
6. Module may override `fnishCntLoad` hook for post-load behavior.
7. Data operations go to `/_p/do.php` (query/caching/file-related behavior).
