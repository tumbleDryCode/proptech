// Material Icons Font Caching Utility
// This provides additional caching using localStorage for browsers that support it

class MaterialIconsCache {
  constructor() {
    this.cacheKey = 'material-icons-cache';
    this.fontUrls = [
      'fonts/materialicons/mi.woff2',
      'fonts/materialicons/mi.woff',
      'fonts/materialicons/mi.ttf',
      'fonts/materialicons/mio.woff2',
      'fonts/materialicons/mio.woff',
      'fonts/materialicons/mitt.woff2',
      'fonts/materialicons/mitt.woff'
    ];
    this.init();
  }

  init() {
    // Check if localStorage is available
    if (this.isLocalStorageAvailable()) {
      this.checkAndCacheFonts();
    }
  }

  isLocalStorageAvailable() {
    try {
      const test = '__localStorage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }

  async checkAndCacheFonts() {
    const cachedFonts = this.getCachedFonts();

    for (const fontUrl of this.fontUrls) {
      if (!cachedFonts.includes(fontUrl)) {
        try {
          await this.cacheFont(fontUrl);
        } catch (error) {
          console.warn('Failed to cache font:', fontUrl, error);
        }
      }
    }
  }

  async cacheFont(fontUrl) {
    const response = await fetch(fontUrl);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const base64 = this.arrayBufferToBase64(arrayBuffer);

    const cachedFonts = this.getCachedFonts();
    cachedFonts.push(fontUrl);
    this.saveCachedFonts(cachedFonts);

    // Store the font data
    localStorage.setItem(`font-${fontUrl}`, base64);
    console.log('Font cached:', fontUrl);
  }

  getCachedFonts() {
    const cached = localStorage.getItem(this.cacheKey);
    return cached ? JSON.parse(cached) : [];
  }

  saveCachedFonts(fonts) {
    localStorage.setItem(this.cacheKey, JSON.stringify(fonts));
  }

  arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  // Method to get cached font as data URL
  getCachedFontDataUrl(fontUrl) {
    const base64 = localStorage.getItem(`font-${fontUrl}`);
    if (!base64) return null;

    // Determine MIME type based on file extension
    let mimeType = 'font/woff2';
    if (fontUrl.endsWith('.woff')) mimeType = 'font/woff';
    if (fontUrl.endsWith('.ttf')) mimeType = 'font/ttf';

    return `data:${mimeType};base64,${base64}`;
  }

  // Method to inject cached fonts into CSS
  injectCachedFonts() {
    const cachedFonts = this.getCachedFonts();
    if (cachedFonts.length === 0) return;

    let style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'Material Icons Cached';
        src: ${cachedFonts.map(url => `url('${this.getCachedFontDataUrl(url)}') format('${this.getFontFormat(url)}')`).join(', ')};
        font-display: swap;
      }
    `;
    document.head.appendChild(style);

    // Update CSS to use cached font family as fallback
    const existingRules = Array.from(document.styleSheets)
      .flatMap(sheet => Array.from(sheet.cssRules || []))
      .filter(rule => rule.selectorText && rule.selectorText.includes('material-icons'));

    existingRules.forEach(rule => {
      if (rule.style && rule.style.fontFamily) {
        rule.style.fontFamily = `"Material Icons", "Material Icons Cached", ${rule.style.fontFamily}`;
      }
    });
  }

  getFontFormat(url) {
    if (url.endsWith('.woff2')) return 'woff2';
    if (url.endsWith('.woff')) return 'woff';
    if (url.endsWith('.ttf')) return 'truetype';
    return 'woff2';
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new MaterialIconsCache();
});

// Export for manual usage
window.MaterialIconsCache = MaterialIconsCache;