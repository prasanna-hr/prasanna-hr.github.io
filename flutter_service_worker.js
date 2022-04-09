'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "763091f2be66bfc3c47ab723382635cd",
"index.html": "915e628eef02a01fedf73ef60f113682",
"/": "915e628eef02a01fedf73ef60f113682",
"main.dart.js": "02d3097552fc96d1cf77f8b7d1bf67fd",
"icons/favicon-16x16.png": "f82a3ba9252c3d6a274c15c9ef0fddcf",
"icons/favicon.ico": "b2761937ac02f2160ff99e2633803892",
"icons/apple-icon.png": "f32b9e809cf18a91c184e9ca40a94bc1",
"icons/apple-icon-144x144.png": "73de7049567da24123c066aa6fa9fde8",
"icons/android-icon-192x192.png": "4044ade03e2ef29c5bc3e7b361fd61fb",
"icons/apple-icon-precomposed.png": "f32b9e809cf18a91c184e9ca40a94bc1",
"icons/apple-icon-114x114.png": "f46439859a24fff7da94a3ad127aba42",
"icons/ms-icon-310x310.png": "93751c9b876b28c69259b7d1c158d233",
"icons/ms-icon-144x144.png": "73de7049567da24123c066aa6fa9fde8",
"icons/apple-icon-57x57.png": "6073a19b7430ae9170afa3d9bac1947d",
"icons/apple-icon-152x152.png": "47416622fd6f15612aba286086d177a7",
"icons/ms-icon-150x150.png": "7b45a0f412e038d551daa278d7e0d0fd",
"icons/android-icon-72x72.png": "1340928adc610806eb255977a0cacc0d",
"icons/android-icon-96x96.png": "50ec0a52f41a62da3c791dba64bb86e1",
"icons/android-icon-36x36.png": "b4e814fbbe61edbe8cf3544ddb1b8a97",
"icons/apple-icon-180x180.png": "3276a3e86b13e3b1b424d1e780f56b83",
"icons/favicon-96x96.png": "50ec0a52f41a62da3c791dba64bb86e1",
"icons/android-icon-48x48.png": "84beb6803e91e34a29223aa683de829a",
"icons/apple-icon-76x76.png": "69c7e85fc9d104a7a49daf8beb034ccf",
"icons/apple-icon-60x60.png": "aef5d9c5e9f6f573f279259e23a01a3f",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/android-icon-144x144.png": "73de7049567da24123c066aa6fa9fde8",
"icons/apple-icon-72x72.png": "1340928adc610806eb255977a0cacc0d",
"icons/apple-icon-120x120.png": "c66048b55e5beedc3292028a2cd557c2",
"icons/favicon-32x32.png": "d51a5c7cc0a53fd1247903a3357b6bf5",
"icons/ms-icon-70x70.png": "fa5837ddf676f69af630e208e77c32f8",
"manifest.json": "8382dc49d7ef2712eb0a6489a8e44271",
"assets/AssetManifest.json": "c40e93c41f382fa5a4efb1bbf339620f",
"assets/NOTICES": "6b62655be6d938bdb41ce352268d661d",
"assets/FontManifest.json": "7e301bd9623e529395da662210bbd185",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/lib/lyrics/bhajane_10.txt": "23609b168f3987bfd1113b43c7e458ff",
"assets/lib/lyrics/bhajane_6.txt": "3cf3c4f31c3549a684fc358bce43e62e",
"assets/lib/lyrics/bhajane_11.txt": "83303e3d53ef5cb49dca2cca5983d007",
"assets/lib/lyrics/bhajane_13.txt": "cdd65763799800c3574082ec786a9a12",
"assets/lib/lyrics/bhajane_5.txt": "ed86dab39ad9dbdacd582d13966d0d99",
"assets/lib/lyrics/bhajane_4.txt": "ded0647b5871bfb6fccf484597eeddaa",
"assets/lib/lyrics/bhajane_12.txt": "9c227541c2c659483204afdcae9a798e",
"assets/lib/lyrics/bhajane_16.txt": "5192490e40eb0e0dcad1a4483726a903",
"assets/lib/lyrics/bhajane_1.txt": "453d419ff73e42383ac40d559f7cbc0c",
"assets/lib/lyrics/bhajane_17.txt": "88a763bddc217bb9b04dc9253f89565a",
"assets/lib/lyrics/bhajane_15.txt": "4d20112e97f86fc9ed645763250f07d4",
"assets/lib/lyrics/bhajane_3.txt": "74d464462ac0a4a61badad0e8ad8b4d1",
"assets/lib/lyrics/bhajane_2.txt": "0092a2441415635703914048edaa2041",
"assets/lib/lyrics/bhajane_19.txt": "1d7df9e84c56588afeff33a5a5bb0ba8",
"assets/lib/lyrics/bhajane_18.txt": "d0003b8ad53c79a4b6127d5cb612ad40",
"assets/lib/lyrics/bhajane_23.txt": "8475442b6b6e5f295551fcdf76923539",
"assets/lib/lyrics/bhajane_9.txt": "c841a749d9d26b82b21bc473148b3322",
"assets/lib/lyrics/bhajane_8.txt": "4e3cc5459d3c218cc73d65df69f40c8c",
"assets/lib/lyrics/bhajane_22.txt": "07131cdaa9c4fd8b58b946989bb116a3",
"assets/lib/lyrics/bhajane_20.txt": "2aed2572d4047d375f394906f0cc0522",
"assets/lib/lyrics/bhajane_21.txt": "d7fea8f548bc5caf47d9344ff5036617",
"assets/lib/lyrics/shloka_5.txt": "3a3af408bb0b2aca1d226ee5ac38aa6a",
"assets/lib/lyrics/shloka_4.txt": "8f23c419d2f3f45880c7192e3b161be9",
"assets/lib/lyrics/shloka_6.txt": "a44a10070b7818653d9e28f0342f020c",
"assets/lib/lyrics/shloka_7.txt": "f90131b84ce714181b1e02f36fbb465c",
"assets/lib/lyrics/shloka_3.txt": "47e67e626c48c0c2e9ce5e4038587256",
"assets/lib/lyrics/shloka_2.txt": "243472020b1fb181c152fbc3e25e6fb4",
"assets/lib/lyrics/shloka_1.txt": "2154ba609b47c440c0a8df974052033a",
"assets/lib/assets/images/lord-rama.jpeg": "c523628420f358a13915ed4e0f58aae2",
"assets/lib/assets/fonts/lohitkannada.ttf": "73c007c19087ead858e1005a06b42324",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
