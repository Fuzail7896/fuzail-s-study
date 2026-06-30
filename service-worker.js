const CACHE_NAME = "fuzail-study-v1";

const urlsToCache = [
  "/fuzail-s-study/",
  "/fuzail-s-study/index.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
