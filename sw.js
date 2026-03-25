const CACHE_NAME = 'olja-portfolio-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/new/new-index.html',
  '/assets/css/styles.css',
  '/new/assets/css/style.css',
  '/assets/js/main.js',
  '/new/assets/js/main.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});