const CACHE="strasse-scorekeeper-v4-1";
const FILES=[
  "./","./index.html","./manifest.webmanifest?v=4.1",
  "./strasse-icon-v4.svg","./strasse-icon-192-v4.png",
  "./strasse-icon-512-v4.png","./strasse-icon-maskable-512-v4.png"
];
self.addEventListener("install",event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)));
  self.skipWaiting();
});
self.addEventListener("activate",event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))));
  self.clients.claim();
});
self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET")return;
  event.respondWith(fetch(event.request,{cache:"no-store"}).then(response=>{
    const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));return response;
  }).catch(()=>caches.match(event.request).then(cached=>cached||caches.match("./index.html"))));
});