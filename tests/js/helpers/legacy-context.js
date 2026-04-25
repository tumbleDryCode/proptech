'use strict';
/**
 * Builds a minimal vm context that satisfies the globals required by the
 * legacy x_booter.js and x_all.js script files so that we can extract and
 * test individual utility functions without a real browser.
 */
const vm = require('vm');

function createLegacyContext(overrides) {
    const JSSHOP = {
        shared: {},
        user: {},
        cookies: {
            getCookie: () => null,
            setCookie: () => {},
            deleteCookie: () => {},
            deleteAllCookies: () => {},
            getAllCookies: () => {},
            clearAllCookies: () => {},
        },
        ajax: {
            doNuAjaxPipe: () => {},
            doAjaxGVals: () => {},
            doRequestPrep: () => {},
        },
        core: {},
        hookloader: {},
        jndroid: {},
        ui: {
            popAndFillLbox: () => {},
            closeLbox: () => {},
            addEvent: () => {},
            setDefFval: () => {},
            setLblHighlight: () => {},
            doAtvtyDefCB: () => {},
        },
        ads: { clearAllPrtsPrefCC: () => {} },
        shop: {},
        logJSdbug: () => {},
        logJSerror: () => {},
        getUnixMiliStamp: () => Date.now(),
        getUnixTimeStamp: () => Math.floor(Date.now() / 1000),
        startNuIntrvlEvnt: () => {},
        stopNuIntrvlEvnt: () => {},
        startIntervalEvent: () => {},
        stopIntervalEvent: () => {},
        checkLoader: () => {},
        loadScript: () => {},
    };

    const document = {
        location: { href: 'http://localhost/?pid=test' },
        cookie: '',
        createElement: () => ({
            style: {},
            setAttribute: () => {},
            appendChild: () => {},
            getElementsByTagName: () => [],
        }),
        getElementsByTagName: () => [{ appendChild: () => {} }],
        getElementById: () => null,
        head: { appendChild: () => {} },
        body: { clientHeight: 600, clientWidth: 800 },
        documentElement: { clientHeight: 600, clientWidth: 800 },
        compatMode: 'CSS1Compat',
        styleSheets: [],
    };

    const navigator = { userAgent: 'TestAgent' };
    const window = {};

    const LZString = {
        compressToEncodedURIComponent: (s) => encodeURIComponent(s || ''),
        decompressFromEncodedURIComponent: (s) => decodeURIComponent(s || ''),
        compress: (s) => s,
        decompress: (s) => s,
    };

    const ctx = Object.assign(
        {
            JSSHOP,
            document,
            navigator,
            window,
            LZString,
            alert: () => {},
            console,
            localStorage: null,
            // Globals referenced at load time in x_allinit / x_booter
            jscssprefix: '',
            isJavaFx: 'no',
            isJApp: 'no',
            isPhP: 'y',
            currUrlArr: {},
            currPlaceObj: {},
            currWebHome: 'http://localhost/',
            stxt: [],
            quid: 0,
            cuid: 0,
            shopDir: 'http://localhost/',
            pid: 'index_main',
            // App native bridge (JavaFX / Android WebView) – not needed in tests
            app: {
                isJApp: () => false,
                doDB: () => {},
                getWVScrollPoint: () => {},
                doscrllVwToTop: () => {},
                doWVScrollY: () => 0,
                getCurrPageVars: () => '',
                setPagePopUp: () => {},
            },
            // Functions referenced by some load-time branches
            removeDiacritics: (s) => s,
            goHome: () => {},
            eindex: () => {},
            getTestUsers: () => {},
            removeArrElement: (arr, idx) => arr.filter((_, i) => i !== idx),
            switchOccurrences: (s) => s,
            nuDW: () => {},
            encodeURIComponent,
            decodeURIComponent,
            unescape,
            escape,
            String,
            Math,
            JSON,
            Object,
            Array,
            setTimeout: () => {},
            clearTimeout: () => {},
            setInterval: () => {},
            clearInterval: () => {},
        },
        overrides || {}
    );

    // window should point to the context itself (browser globals are on window)
    ctx.window = ctx;
    return vm.createContext(ctx);
}

/**
 * Run a JS source string inside a legacy context and return the context.
 * Syntax errors are re-thrown immediately.  Runtime errors are swallowed so
 * that globals defined earlier in the file are still accessible in tests.
 */
function runInLegacyContext(source, overrides) {
    const ctx = createLegacyContext(overrides);
    try {
        // Compile first so syntax errors surface clearly.
        const script = new vm.Script(source);
        script.runInContext(ctx);
    } catch (e) {
        if (e instanceof SyntaxError) {
            throw e;
        }
        // Runtime errors (ReferenceError for missing optional globals, etc.)
        // are logged but do not prevent already-defined functions from being
        // tested.
    }
    return ctx;
}

module.exports = { createLegacyContext, runInLegacyContext };
