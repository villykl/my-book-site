const CACHE = "books-safe-v1";

const ASSETS = [
  "./index.html",
  "./manifest.json"
];

self.addEventListener("install", e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", e => {
  e.respondWith(
    fetch(e.request).catch(() =>
      caches.match(e.request)
    )
  );
});
