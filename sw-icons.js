// Service Worker for caching Material Icons fonts
const CACHE_NAME = 'material-icons-cache-v1';
const FONT_URLS = [
  '/fonts/materialicons/mi.woff2',
  '/fonts/materialicons/mi.woff',
  '/fonts/materialicons/mi.ttf',
  '/fonts/materialicons/mio.woff2',
  '/fonts/materialicons/mio.woff',
  '/fonts/materialicons/mitt.woff2',
  '/fonts/materialicons/mitt.woff'
];

// Install event - cache fonts immediately
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching Material Icons fonts...');
        return cache.addAll(FONT_URLS);
      })
      .catch(error => {
        console.error('Failed to cache fonts:', error);
      })
  );
});

// Fetch event - serve cached fonts
self.addEventListener('fetch', event => {
  if (event.request.url.includes('/fonts/materialicons/')) {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          if (response) {
            return response; // Return cached version
          }
          // If not in cache, fetch and cache
          return fetch(event.request).then(response => {
            if (response.status === 200) {
              const responseClone = response.clone();
              caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, responseClone);
              });
            }
            return response;
          });
        })
        .catch(() => {
          console.error('Font fetch failed');
        })
    );
  }
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});