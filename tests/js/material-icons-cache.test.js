/**
 * Tests for js/app/material-icons-cache.js
 *
 * MaterialIconsCache uses class syntax, fetch, localStorage and the DOM, so
 * we configure a jest-environment-jsdom environment for this file and mock
 * the external dependencies.
 *
 * @jest-environment jsdom
 */
'use strict';

const fs = require('fs');
const path = require('path');

const SOURCE = fs.readFileSync(
    path.join(__dirname, '../../js/app/material-icons-cache.js'),
    'utf8'
);

// Suppress the DOMContentLoaded listener side-effect by evaluating in
// a context where window.MaterialIconsCache will be set.
beforeAll(() => {
    // Mock fetch globally so constructor's async cacheFont calls won't make
    // real network requests.
    global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        arrayBuffer: () => Promise.resolve(new ArrayBuffer(8)),
    });

    // Indirect eval evaluates in global scope (window in jsdom), making
    // MaterialIconsCache available as a global.
    // eslint-disable-next-line no-eval
    (0, eval)(SOURCE); // NOSONAR
});

afterEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
});

describe('MaterialIconsCache – isLocalStorageAvailable', () => {
    it('returns true when localStorage is accessible', () => {
        const cache = new MaterialIconsCache(); // eslint-disable-line no-undef
        expect(cache.isLocalStorageAvailable()).toBe(true);
    });

    it('returns false when localStorage.setItem throws', () => {
        const original = Object.getOwnPropertyDescriptor(window, 'localStorage');
        Object.defineProperty(window, 'localStorage', {
            configurable: true,
            get() {
                throw new Error('SecurityError');
            },
        });

        const cache = Object.create(MaterialIconsCache.prototype); // eslint-disable-line no-undef
        expect(cache.isLocalStorageAvailable()).toBe(false);

        // Restore
        if (original) {
            Object.defineProperty(window, 'localStorage', original);
        }
    });
});

describe('MaterialIconsCache – getCachedFonts / saveCachedFonts', () => {
    it('getCachedFonts returns empty array when nothing is cached', () => {
        const cache = new MaterialIconsCache(); // eslint-disable-line no-undef
        localStorage.clear();
        expect(cache.getCachedFonts()).toEqual([]);
    });

    it('saveCachedFonts persists fonts and getCachedFonts retrieves them', () => {
        const cache = new MaterialIconsCache(); // eslint-disable-line no-undef
        const fonts = ['fonts/materialicons/mi.woff2', 'fonts/materialicons/mi.woff'];
        cache.saveCachedFonts(fonts);
        expect(cache.getCachedFonts()).toEqual(fonts);
    });

    it('saveCachedFonts overwrites previous list', () => {
        const cache = new MaterialIconsCache(); // eslint-disable-line no-undef
        cache.saveCachedFonts(['a.woff2']);
        cache.saveCachedFonts(['b.woff2', 'c.woff']);
        expect(cache.getCachedFonts()).toEqual(['b.woff2', 'c.woff']);
    });
});

describe('MaterialIconsCache – arrayBufferToBase64', () => {
    it('converts an ArrayBuffer to a Base64 string', () => {
        const cache = new MaterialIconsCache(); // eslint-disable-line no-undef
        // Build a small buffer: bytes 72 101 108 108 111 = "Hello"
        const buf = new Uint8Array([72, 101, 108, 108, 111]).buffer;
        const b64 = cache.arrayBufferToBase64(buf);
        expect(b64).toBe(btoa('Hello'));
    });

    it('handles an empty ArrayBuffer', () => {
        const cache = new MaterialIconsCache(); // eslint-disable-line no-undef
        expect(cache.arrayBufferToBase64(new ArrayBuffer(0))).toBe('');
    });
});

describe('MaterialIconsCache – getCachedFontDataUrl', () => {
    let cache;

    beforeEach(() => {
        localStorage.clear();
        // Bypass the constructor to avoid async font-caching side effects.
        cache = Object.create(MaterialIconsCache.prototype); // eslint-disable-line no-undef
        cache.cacheKey = 'material-icons-cache';
    });

    it('returns null when font is not in localStorage', () => {
        expect(cache.getCachedFontDataUrl('fonts/materialicons/mi.woff2')).toBeNull();
    });

    it('returns a woff2 data URL for a cached .woff2 font', () => {
        localStorage.setItem('font-fonts/materialicons/mi.woff2', 'AAAA');
        const dataUrl = cache.getCachedFontDataUrl('fonts/materialicons/mi.woff2');
        expect(dataUrl).toBe('data:font/woff2;base64,AAAA');
    });

    it('returns a woff data URL for a cached .woff font', () => {
        localStorage.setItem('font-fonts/materialicons/mi.woff', 'BBBB');
        const dataUrl = cache.getCachedFontDataUrl('fonts/materialicons/mi.woff');
        expect(dataUrl).toBe('data:font/woff;base64,BBBB');
    });

    it('returns a ttf data URL for a cached .ttf font', () => {
        localStorage.setItem('font-fonts/materialicons/mi.ttf', 'CCCC');
        const dataUrl = cache.getCachedFontDataUrl('fonts/materialicons/mi.ttf');
        expect(dataUrl).toBe('data:font/ttf;base64,CCCC');
    });
});

describe('MaterialIconsCache – getFontFormat', () => {
    let cache;

    beforeEach(() => {
        cache = new MaterialIconsCache(); // eslint-disable-line no-undef
    });

    it('returns "woff2" for .woff2 URLs', () => {
        expect(cache.getFontFormat('fonts/mi.woff2')).toBe('woff2');
    });

    it('returns "woff" for .woff URLs', () => {
        expect(cache.getFontFormat('fonts/mi.woff')).toBe('woff');
    });

    it('returns "truetype" for .ttf URLs', () => {
        expect(cache.getFontFormat('fonts/mi.ttf')).toBe('truetype');
    });

    it('defaults to "woff2" for unknown extensions', () => {
        expect(cache.getFontFormat('fonts/mi.otf')).toBe('woff2');
    });
});

describe('MaterialIconsCache – cacheKey and fontUrls defaults', () => {
    it('uses the expected localStorage key', () => {
        const cache = new MaterialIconsCache(); // eslint-disable-line no-undef
        expect(cache.cacheKey).toBe('material-icons-cache');
    });

    it('includes the expected font file paths', () => {
        const cache = new MaterialIconsCache(); // eslint-disable-line no-undef
        expect(cache.fontUrls).toContain('fonts/materialicons/mi.woff2');
        expect(cache.fontUrls).toContain('fonts/materialicons/mi.ttf');
    });
});
