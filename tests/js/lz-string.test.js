'use strict';
/**
 * Tests for js/app/lz-string.js
 *
 * lz-string.js ships its own CommonJS export path, so it can be required
 * directly in Node without any browser shim.
 */
const LZString = require('../../js/app/lz-string.js');

describe('LZString – compress / decompress (raw)', () => {
    it('roundtrip: compress then decompress returns the original string', () => {
        const original = 'Hello, World!';
        const compressed = LZString.compress(original);
        expect(LZString.decompress(compressed)).toBe(original);
    });

    it('roundtrip with a longer, repetitive string', () => {
        const original = 'abcabc'.repeat(200);
        const compressed = LZString.compress(original);
        expect(LZString.decompress(compressed)).toBe(original);
    });

    it('roundtrip with unicode characters', () => {
        const original = 'Leilão é ótimo – Avenida 🏠';
        const compressed = LZString.compress(original);
        expect(LZString.decompress(compressed)).toBe(original);
    });

    it('compress(null) returns empty string', () => {
        expect(LZString.compress(null)).toBe('');
    });

    it('decompress(null) returns empty string', () => {
        expect(LZString.decompress(null)).toBe('');
    });

    it('decompress("") returns null', () => {
        expect(LZString.decompress('')).toBeNull();
    });
});

describe('LZString – compressToBase64 / decompressFromBase64', () => {
    it('roundtrip', () => {
        const original = 'Para venda - Imóvel';
        const b64 = LZString.compressToBase64(original);
        expect(LZString.decompressFromBase64(b64)).toBe(original);
    });

    it('compressToBase64(null) returns empty string', () => {
        expect(LZString.compressToBase64(null)).toBe('');
    });

    it('decompressFromBase64(null) returns empty string', () => {
        expect(LZString.decompressFromBase64(null)).toBe('');
    });

    it('decompressFromBase64("") returns null', () => {
        expect(LZString.decompressFromBase64('')).toBeNull();
    });

    it('produces valid Base64 (length multiple of 4)', () => {
        const b64 = LZString.compressToBase64('test string');
        expect(b64.length % 4).toBe(0);
    });
});

describe('LZString – compressToUTF16 / decompressFromUTF16', () => {
    it('roundtrip', () => {
        const original = 'UTF-16 test — for sale';
        const compressed = LZString.compressToUTF16(original);
        expect(LZString.decompressFromUTF16(compressed)).toBe(original);
    });

    it('compressToUTF16(null) returns empty string', () => {
        expect(LZString.compressToUTF16(null)).toBe('');
    });

    it('decompressFromUTF16(null) returns empty string', () => {
        expect(LZString.decompressFromUTF16(null)).toBe('');
    });
});

describe('LZString – compressToEncodedURIComponent / decompressFromEncodedURIComponent', () => {
    it('roundtrip with plain text', () => {
        const original = 'pid=aa-show-prop&tpid=12345&lang=pt_pt';
        const encoded = LZString.compressToEncodedURIComponent(original);
        expect(LZString.decompressFromEncodedURIComponent(encoded)).toBe(original);
    });

    it('roundtrip with JSON payload', () => {
        const original = JSON.stringify({ pid: 'aa-show-prop', tpid: 42, lang: 'en_us' });
        const encoded = LZString.compressToEncodedURIComponent(original);
        expect(LZString.decompressFromEncodedURIComponent(encoded)).toBe(original);
    });

    it('spaces in input are handled (replaced with +)', () => {
        const original = 'hello world test';
        const encoded = LZString.compressToEncodedURIComponent(original);
        // Introduce a space as browsers sometimes convert + back to space
        const withSpace = encoded.replace(/\+/g, ' ');
        expect(LZString.decompressFromEncodedURIComponent(withSpace)).toBe(original);
    });

    it('compressToEncodedURIComponent(null) returns empty string', () => {
        expect(LZString.compressToEncodedURIComponent(null)).toBe('');
    });

    it('decompressFromEncodedURIComponent(null) returns empty string', () => {
        expect(LZString.decompressFromEncodedURIComponent(null)).toBe('');
    });

    it('decompressFromEncodedURIComponent("") returns null', () => {
        expect(LZString.decompressFromEncodedURIComponent('')).toBeNull();
    });
});

describe('LZString – compressToUint8Array / decompressFromUint8Array', () => {
    it('roundtrip', () => {
        const original = 'Uint8Array roundtrip test 123';
        const buf = LZString.compressToUint8Array(original);
        expect(buf).toBeInstanceOf(Uint8Array);
        expect(LZString.decompressFromUint8Array(buf)).toBe(original);
    });

    it('decompressFromUint8Array(null) falls back gracefully', () => {
        // null/undefined should return the decompressed value of null (which is "")
        expect(LZString.decompressFromUint8Array(null)).toBe('');
    });
});

describe('LZString – compression actually reduces size', () => {
    it('compresses a repetitive string to fewer characters', () => {
        const original = 'aaaa'.repeat(100);
        const compressed = LZString.compress(original);
        expect(compressed.length).toBeLessThan(original.length);
    });
});
