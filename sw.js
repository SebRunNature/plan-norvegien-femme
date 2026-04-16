const CACHE = 'srn-plan-femme-v5';
const FILES = [
  '/plan-norvegien-femme/',
  '/plan-norvegien-femme/index.html',
  '/plan-norvegien-femme/manifest.json'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll(FILES);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
