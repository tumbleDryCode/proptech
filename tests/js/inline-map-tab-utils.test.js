/**
 * Tests for js/app/inline-map-tab-utils.js
 *
 * The file defines a single global helper function `setInlineMapTabsEnabled`
 * that manipulates nav-link elements inside #dvInlinePTypeTabs.
 *
 * @jest-environment jsdom
 */
'use strict';

const fs = require('fs');
const path = require('path');

const SOURCE = fs.readFileSync(
    path.join(__dirname, '../../js/app/inline-map-tab-utils.js'),
    'utf8'
);

beforeAll(() => {
    // Indirect eval evaluates in global scope (window in jsdom), making
    // setInlineMapTabsEnabled available as a global.
    // eslint-disable-next-line no-eval
    (0, eval)(SOURCE); // NOSONAR
});

/** Helper – create a mock tab container with N nav-link elements. */
function buildTabContainer(count) {
    const container = document.createElement('div');
    container.id = 'dvInlinePTypeTabs';

    for (let i = 0; i < count; i++) {
        const link = document.createElement('a');
        link.className = 'nav-link';
        container.appendChild(link);
    }

    document.body.appendChild(container);
    return container;
}

afterEach(() => {
    // Remove the container so each test gets a clean DOM.
    const existing = document.getElementById('dvInlinePTypeTabs');
    if (existing) existing.parentNode.removeChild(existing);
});

describe('setInlineMapTabsEnabled', () => {
    it('disables all nav-links by setting pointer-events and opacity', () => {
        buildTabContainer(3);
        setInlineMapTabsEnabled(false); // eslint-disable-line no-undef

        const links = document.querySelectorAll('#dvInlinePTypeTabs .nav-link');
        links.forEach((link) => {
            expect(link.style.pointerEvents).toBe('none');
            expect(link.style.opacity).toBe('0.65');
        });
    });

    it('re-enables all nav-links by clearing pointer-events and opacity', () => {
        const container = buildTabContainer(3);

        // First disable them so there is something to clear.
        const links = container.querySelectorAll('.nav-link');
        links.forEach((l) => {
            l.style.pointerEvents = 'none';
            l.style.opacity = '0.65';
        });

        setInlineMapTabsEnabled(true); // eslint-disable-line no-undef

        links.forEach((link) => {
            expect(link.style.pointerEvents).toBe('');
            expect(link.style.opacity).toBe('');
        });
    });

    it('works when the container has zero nav-links (no-op)', () => {
        buildTabContainer(0);
        expect(() => setInlineMapTabsEnabled(true)).not.toThrow(); // eslint-disable-line no-undef
        expect(() => setInlineMapTabsEnabled(false)).not.toThrow(); // eslint-disable-line no-undef
    });

    it('works when the container element is absent (no-op)', () => {
        // No container appended → querySelectorAll returns empty NodeList.
        expect(() => setInlineMapTabsEnabled(true)).not.toThrow(); // eslint-disable-line no-undef
    });

    it('disables exactly the nav-link elements, not other children', () => {
        const container = buildTabContainer(2);
        const span = document.createElement('span');
        span.className = 'other-class';
        container.appendChild(span);

        setInlineMapTabsEnabled(false); // eslint-disable-line no-undef

        // The extra span should not have received any style changes.
        expect(span.style.pointerEvents).toBe('');
        expect(span.style.opacity).toBe('');
    });
});
