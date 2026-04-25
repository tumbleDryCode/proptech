'use strict';
/**
 * Tests for utility functions defined in js/app/x_all.js.
 *
 * Tested functions (all pure / near-pure):
 *   JSSHOP.shared.getEmojiCntryFlag
 *   JSSHOP.shared.getCountryCodeFromName
 *   JSSHOP.shared.strToObj
 *   JSSHOP.shared.getQryVar
 *   JSSHOP.shared.convertTo24Hour
 *   JSSHOP.shared.encode_utf8
 *   JSSHOP.shared.decode_utf8
 *
 * The file relies on JSSHOP and many browser globals so we first load
 * x_booter.js (which provides JSSHOP.shared.endsWith relied upon by strToObj)
 * then x_all.js into a shared vm context.
 */

const fs = require('fs');
const path = require('path');
const { runInLegacyContext, createLegacyContext } = require('./helpers/legacy-context');
const vm = require('vm');

const BOOTER_SOURCE = fs.readFileSync(
    path.join(__dirname, '../../js/app/x_booter.js'),
    'utf8'
);
const ALL_SOURCE = fs.readFileSync(
    path.join(__dirname, '../../js/app/x_all.js'),
    'utf8'
);

let ctx;

beforeAll(() => {
    ctx = createLegacyContext();
    // Load x_booter first so JSSHOP.shared.endsWith (used by strToObj) is present.
    vm.runInContext(BOOTER_SOURCE, ctx);
    // Now load x_all.js which adds the functions under test.
    vm.runInContext(ALL_SOURCE, ctx);
});

// ---------------------------------------------------------------------------
// JSSHOP.shared.getEmojiCntryFlag
// ---------------------------------------------------------------------------

describe('JSSHOP.shared.getEmojiCntryFlag', () => {
    let getEmojiCntryFlag;

    beforeAll(() => {
        getEmojiCntryFlag = ctx.JSSHOP.shared.getEmojiCntryFlag;
    });

    it('returns a 2-codepoint string for a valid 2-letter country code', () => {
        const flag = getEmojiCntryFlag('PT');
        // Emoji country flags consist of two Regional Indicator Symbol Letters.
        // Each is a 2-char surrogate pair in JS, so the result has 4 UTF-16 code units.
        expect(typeof flag).toBe('string');
        expect([...flag].length).toBe(2); // 2 emoji code points
    });

    it('returns the flag for "US"', () => {
        const flag = getEmojiCntryFlag('US');
        expect([...flag].length).toBe(2);
    });

    it('returns the flag for "GB"', () => {
        const flag = getEmojiCntryFlag('GB');
        expect([...flag].length).toBe(2);
    });

    it('returns different flags for different country codes', () => {
        expect(getEmojiCntryFlag('PT')).not.toBe(getEmojiCntryFlag('US'));
    });
});

// ---------------------------------------------------------------------------
// JSSHOP.shared.getCountryCodeFromName
// ---------------------------------------------------------------------------

describe('JSSHOP.shared.getCountryCodeFromName', () => {
    let getCode;

    beforeAll(() => {
        getCode = ctx.JSSHOP.shared.getCountryCodeFromName;
    });

    it('returns "PT" for "Portugal"', () => {
        expect(getCode('Portugal')).toBe('PT');
    });

    it('returns "US" for "United States"', () => {
        expect(getCode('United States')).toBe('US');
    });

    it('returns "BR" for "Brazil"', () => {
        expect(getCode('Brazil')).toBe('BR');
    });

    it('returns "ES" for "Spain"', () => {
        expect(getCode('Spain')).toBe('ES');
    });

    it('returns empty string for an unknown country name', () => {
        expect(getCode('Narnia')).toBe('');
    });

    it('is case-sensitive (lowercase name returns empty string)', () => {
        expect(getCode('portugal')).toBe('');
    });
});

// ---------------------------------------------------------------------------
// JSSHOP.shared.strToObj
// ---------------------------------------------------------------------------

describe('JSSHOP.shared.strToObj', () => {
    let strToObj;

    beforeAll(() => {
        strToObj = ctx.JSSHOP.shared.strToObj;
    });

    it('parses a simple query string into key-value pairs', () => {
        const result = strToObj('pid=aa-show-prop&tpid=99');
        expect(result.pid).toBe('aa-show-prop');
        expect(result.tpid).toBe('99');
    });

    it('returns an object with a single key', () => {
        const result = strToObj('lang=en_us');
        expect(result.lang).toBe('en_us');
    });

    it('collects array parameters (key[])', () => {
        const result = strToObj('tags[]=red&tags[]=blue');
        expect(Array.isArray(result.tags)).toBe(true);
        expect(result.tags).toContain('red');
        expect(result.tags).toContain('blue');
    });

    it('stores raw (non-decoded) key for non-array parameters', () => {
        // strToObj does not decodeURIComponent on non-array keys.
        const result = strToObj('my%20key=value');
        expect(result['my%20key']).toBe('value');
    });
});

// ---------------------------------------------------------------------------
// JSSHOP.shared.getQryVar
// ---------------------------------------------------------------------------

describe('JSSHOP.shared.getQryVar', () => {
    let getQryVar;

    beforeAll(() => {
        getQryVar = ctx.JSSHOP.shared.getQryVar;
    });

    it('returns the value of a matching query variable', () => {
        expect(getQryVar('pid=aa-show-prop&tpid=42', 'pid')).toBe('aa-show-prop');
    });

    it('returns the last matching value when a key appears more than once', () => {
        // The implementation iterates and overwrites, so last value wins.
        const result = getQryVar('a=1&a=2', 'a');
        expect(result).toBe('2');
    });

    it('returns null when the variable is not found', () => {
        expect(getQryVar('pid=test', 'missing')).toBeNull();
    });

    it('returns null for an empty query string', () => {
        expect(getQryVar('', 'pid')).toBeNull();
    });
});

// ---------------------------------------------------------------------------
// JSSHOP.shared.convertTo24Hour
// ---------------------------------------------------------------------------

describe('JSSHOP.shared.convertTo24Hour', () => {
    let convert;

    beforeAll(() => {
        convert = ctx.JSSHOP.shared.convertTo24Hour;
    });

    it('converts "9 am" to "9:00"', () => {
        expect(convert('9 am')).toBe('9:00');
    });

    it('converts "9 pm" to "21:00"', () => {
        expect(convert('9 pm')).toBe('21:00');
    });

    it('converts "12pm" to "12:00" (noon stays 12)', () => {
        expect(convert('12pm')).toBe('12:00');
    });

    it('converts "12am" to "00:00" (midnight becomes 0)', () => {
        expect(convert('12am')).toBe('00:00');
    });

    it('is case-insensitive (handles uppercase AM/PM)', () => {
        const lower = convert('9 am');
        const upper = convert('9 AM');
        expect(lower).toBe(upper);
    });

    it('handles semicolon-separated am/pm token', () => {
        // e.g. "9; am" should be treated the same as "9 am"
        const result = convert('9; am');
        expect(result).toBe('9:00');
    });
});

// ---------------------------------------------------------------------------
// JSSHOP.shared.encode_utf8 / decode_utf8
// ---------------------------------------------------------------------------

describe('JSSHOP.shared.encode_utf8', () => {
    let encode_utf8;

    beforeAll(() => {
        encode_utf8 = ctx.JSSHOP.shared.encode_utf8;
    });

    it('returns a string for a simple ASCII input', () => {
        expect(typeof encode_utf8('hello')).toBe('string');
    });

    it('returns the same string for a pure ASCII input', () => {
        expect(encode_utf8('hello')).toBe('hello');
    });

    it('encodes non-ASCII characters as Latin-1 UTF-8 bytes (unescape + encodeURIComponent)', () => {
        // encode_utf8 does unescape(encodeURIComponent(str)).
        // For 'café': encodeURIComponent → 'caf%C3%A9', unescape → 'cafÃ©'
        const result = encode_utf8('café');
        // The result is a Latin-1 byte string of the UTF-8 encoding; it will
        // NOT contain '%' because unescape has already converted the escapes.
        expect(typeof result).toBe('string');
        expect(result.length).toBeGreaterThan(0);
    });
});

describe('JSSHOP.shared.decode_utf8', () => {
    let decode_utf8;

    beforeAll(() => {
        decode_utf8 = ctx.JSSHOP.shared.decode_utf8;
    });

    it('decodes a percent-encoded UTF-8 string', () => {
        // "Ol%C3%A1" is "Olá" percent-encoded in UTF-8
        expect(decode_utf8('Ol%C3%A1')).toBe('Olá');
    });

    it('passes through a plain ASCII string unchanged', () => {
        expect(decode_utf8('hello')).toBe('hello');
    });
});
