'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "48e012e7c7a20d1209fdbdb083cd7f0a",
"version.json": "884ddbdae26a85ce73477ff1ea76b0ee",
"index.html": "bc3d61f0fe78b9fabb98fb3282ca684f",
"/": "bc3d61f0fe78b9fabb98fb3282ca684f",
"main.dart.js": "dd4376e3f3c1d17384d4eb4394aac7e7",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "a337e885440b854aeee39321e34ab47a",
"icons/Icon-192.png": "1127bbe9eefc0d985f12df89ab39fb37",
"icons/Icon-maskable-192.png": "1127bbe9eefc0d985f12df89ab39fb37",
"icons/Icon-maskable-512.png": "15d5e3e83290b457ca3c1b20465fb474",
"icons/Icon-512.png": "15d5e3e83290b457ca3c1b20465fb474",
"manifest.json": "5773807a54b7f8ad07ee96c1877e62f7",
"assets/AssetManifest.json": "8a65e3d83ab75c1c88bdfc85a7c3fbf9",
"assets/NOTICES": "c1604fe4edaf4d891230e212120dc4cf",
"assets/FontManifest.json": "04d0612e094a982ef2f1dfad21b560a2",
"assets/AssetManifest.bin.json": "3883c317e9a8254ad22b56d00003f544",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "278c391115d0e1047fe8034cedfbb15e",
"assets/fonts/MaterialIcons-Regular.otf": "8ea08ea2444cc58ec5807fd7669e488f",
"assets/assets/giias/shell.png": "82966a782d412c6ae3e2be3409989b32",
"assets/assets/giias/visko_4.png": "73ba97a21d5f4a5b860779b007c1f3ce",
"assets/assets/giias/visko_2.png": "3672e0c9a6715482d69d1af77cfe18f8",
"assets/assets/giias/visko_3.png": "f6751d4528acd55a79f82ac4b71c4bc5",
"assets/assets/giias/visko_1.png": "d3cf53b58daaf43f79479d2a307e1202",
"assets/assets/giias/giias.png": "9d3ee2656298ba3f77604fd2f638a5f7",
"assets/assets/giias/bg.png": "6d6c412eb1b591b74d145d07dcafeb5a",
"assets/assets/oli2_r.png": "d9ae77f2fcf9f7e4f6eb4f9c29573086",
"assets/assets/intro/icon.png": "b06f1e49301ff9ab0f5078d074879131",
"assets/assets/intro/how_to_text.png": "bdee24e682df44dd35e9298e07cd974e",
"assets/assets/intro/mixmatch.png": "ee73cc9e9ffa54d5a2fd8846ae0f3e0c",
"assets/assets/oli4_r.png": "441637815f1012a035a35cc2f261217b",
"assets/assets/button_mulai.png": "4155f83a978f86f23e9c0e4de130e0a4",
"assets/assets/oli3_r.png": "d932c88b64bd7c34e964e671c261221c",
"assets/assets/oli1_r.png": "e36b9f65f7f5acd0060ff330b2b053c9",
"assets/assets/oli4.png": "cb80fbb8462bc542f8ab6e0b36af0246",
"assets/assets/countdown.png": "0abb63cdfac2d9a40d8b1464ac1ab13d",
"assets/assets/intro.png": "f42bb56b78a606898a24c5e3bda412c4",
"assets/assets/kelebihan_soal/kelebihan_4.png": "709dda8cee32c946418a72548d6dd2c4",
"assets/assets/kelebihan_soal/kelebihan_2.png": "24af4d891ce4738919f0fc63a316c1ce",
"assets/assets/kelebihan_soal/kelebihan_3.png": "e078ff8a25209b94346a13709666b731",
"assets/assets/kelebihan_soal/kelebihan_1.png": "ee6639b19485e1756fe35ec864016f02",
"assets/assets/oli1.png": "b5a077ab9cc0511b629363c137b456de",
"assets/assets/oli3.png": "3b68512160edf24a943285e05537c161",
"assets/assets/oli2.png": "9ebd7f41fc7ec53cf09713a8249da492",
"assets/assets/kelebihan_jawaban/kelebihan_2_r.png": "461e8c90236644e011f54c7be60c21c4",
"assets/assets/kelebihan_jawaban/kelebihan_4_r.png": "d0be8f274a2ebda75c6a507a14549cda",
"assets/assets/kelebihan_jawaban/kelebihan_1_r.png": "6aa214d76abae3c2465540e5383ddaf4",
"assets/assets/kelebihan_jawaban/kelebihan_3_r.png": "7d9048d1ef12c7091ee399ba3261ab2b",
"assets/assets/modal_4.png": "b768fbeddede9c6af48cc11c1e1d11f4",
"assets/assets/button_berikutnya.png": "87318f521508975fea06c08d8fde5590",
"assets/assets/modal_2.png": "27cac0291915cf0f4efd006f451b3d75",
"assets/assets/modal_3.png": "39183a1cb5eb6bb483d6d86a7dc98916",
"assets/assets/modal_1.png": "da167064dad2584b8f8c59663dbf1b56",
"assets/assets/frame_name.png": "e3cdf3fef1c0038a74b7c173b059e427",
"assets/assets/thanks.png": "a8399f8a5e20f8598dd03d26a229eae4",
"assets/assets/fonts/Futura-Bold.ttf": "4c62644b159530ff6214336f8cfb1d32",
"assets/assets/fonts/Futura-Medium.ttf": "ee64fb9d3f1ba2333e1b489283925bce",
"assets/assets/fonts/ShellMedium.ttf": "4ef52e056d2e37a8d4c8e00cf9010bb2",
"assets/assets/back.png": "823ed90c875b3fb4670caf4650828111",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
