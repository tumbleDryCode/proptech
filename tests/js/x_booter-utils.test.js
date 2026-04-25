'use strict';
/**
 * Tests for utility functions defined in js/app/x_booter.js.
 *
 * Tested functions (all pure / near-pure):
 *   JSSHOP.shared.endsWith
 *   JSSHOP.shared.objToUrl
 *   JSSHOP.user.encPrefCky
 *   JSSHOP.user.decPrefCky
 *
 * The file uses global variables and browser APIs, so we run it inside a
 * minimal vm context provided by the legacy-context helper.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { runInLegacyContext } = require('./helpers/legacy-context');

const SOURCE = fs.readFileSync(
    path.join(__dirname, '../../js/app/x_booter.js'),
    'utf8'
);

let ctx;

beforeAll(() => {
    ctx = runInLegacyContext(SOURCE);
});

// ---------------------------------------------------------------------------
// JSSHOP.shared.endsWith
// ---------------------------------------------------------------------------

describe('JSSHOP.shared.endsWith', () => {
    let endsWith;

    beforeAll(() => {
        endsWith = ctx.JSSHOP.shared.endsWith;
    });

    it('returns true when string ends with the given suffix', () => {
        expect(endsWith('hello[]', '[]')).toBe(true);
    });

    it('returns true when string equals the suffix', () => {
        expect(endsWith('abc', 'abc')).toBe(true);
    });

    it('returns false when string does not end with suffix', () => {
        expect(endsWith('hello', '[]')).toBe(false);
    });

    it('returns false when suffix is longer than the string', () => {
        expect(endsWith('hi', 'hello')).toBe(false);
    });

    it('returns true for empty suffix on any string', () => {
        expect(endsWith('anything', '')).toBe(true);
    });

    it('is case-sensitive', () => {
        expect(endsWith('Hello', 'hello')).toBe(false);
        expect(endsWith('Hello', 'Hello')).toBe(true);
    });
});

// ---------------------------------------------------------------------------
// JSSHOP.shared.objToUrl
// ---------------------------------------------------------------------------

describe('JSSHOP.shared.objToUrl', () => {
    let objToUrl;

    beforeAll(() => {
        objToUrl = ctx.JSSHOP.shared.objToUrl;
    });

    it('converts a simple object to a query string', () => {
        const result = objToUrl({ pid: 'aa-show-prop', tpid: '123' });
        expect(result).toContain('pid=aa-show-prop');
        expect(result).toContain('tpid=123');
    });

    it('URI-encodes special characters in values', () => {
        const result = objToUrl({ q: 'hello world', lang: 'pt_pt' });
        expect(result).toContain('q=hello%20world');
    });

    it('returns empty string for an empty object', () => {
        expect(objToUrl({})).toBe('');
    });

    it('starts each key with an ampersand', () => {
        const result = objToUrl({ a: '1' });
        expect(result.startsWith('&')).toBe(true);
    });
});

// ---------------------------------------------------------------------------
// JSSHOP.user.encPrefCky / decPrefCky  (roundtrip)
// ---------------------------------------------------------------------------

describe('JSSHOP.user.encPrefCky and decPrefCky', () => {
    let enc, dec;

    beforeAll(() => {
        enc = ctx.JSSHOP.user.encPrefCky;
        dec = ctx.JSSHOP.user.decPrefCky;
    });

    const SAMPLE_PREF = '[{"prfDspLmenu":false,"scv":"g","sAL":"y","sAT":"y","sia":"y"}]';

    it('encodes a preference JSON string', () => {
        const encoded = enc(SAMPLE_PREF);
        // The encoded form must not contain the raw JSON delimiters
        expect(encoded).not.toContain('[{"');
        expect(encoded).not.toContain('":"');
    });

    it('decodes an encoded preference string back to original', () => {
        const encoded = enc(SAMPLE_PREF);
        expect(dec(encoded)).toBe(SAMPLE_PREF);
    });

    it('roundtrip: encode then decode restores original', () => {
        const prefs = [
            '[{"prfDspLmenu":true,"scv":"l","sAL":"n","sAT":"y","sia":"y"}]',
            '[{"layout":"default","alayout":"default","sia":"n"}]',
        ];
        prefs.forEach((pref) => {
            expect(dec(enc(pref))).toBe(pref);
        });
    });

    it('encodes a string that has no special tokens without error', () => {
        expect(() => enc('simple')).not.toThrow();
    });

    it('decodes a string that has no encoded tokens without error', () => {
        expect(() => dec('simple')).not.toThrow();
    });
});

// ---------------------------------------------------------------------------
// JSSHOP.shared.urlToArray  (simple key=value form without removeDiacritics)
// ---------------------------------------------------------------------------

describe('JSSHOP.shared.urlToArray', () => {
    let urlToArray;

    beforeAll(() => {
        urlToArray = ctx.JSSHOP.shared.urlToArray;
    });

    it('parses a simple query string into an object', () => {
        const result = urlToArray('http://localhost/?pid=aa-show-prop&tpid=42');
        expect(result.pid).toBe('aa-show-prop');
        expect(result.tpid).toBe('42');
    });

    it('returns an object with a single key', () => {
        const result = urlToArray('http://localhost/?lang=pt_pt');
        expect(result.lang).toBe('pt_pt');
    });

    it('handles array parameters (key[])', () => {
        const result = urlToArray('http://localhost/?tags[]=a&tags[]=b');
        expect(Array.isArray(result.tags)).toBe(true);
        expect(result.tags).toContain('a');
        expect(result.tags).toContain('b');
    });
});
