self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open("book").then(cache=>{
      return cache.addAll([
        "index.html"
      ]);
    })
  );
});
