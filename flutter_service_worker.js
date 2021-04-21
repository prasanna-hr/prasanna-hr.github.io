'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ce4f401ad87f1ef2c35af44531f6a5ae",
"index.html": "e52bcf051ab729a61352b398ea85ee24",
"/": "e59ff97941044f85df5297e1c302d260",
"main.dart.js": "de7c5ee9e18153dee8bbc9acd11c2c81",
"README.md": "405d262e95c0a25a90b35585f3b29456",
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
".git/config": "4a7b852a8e5c38ece8d88a7054014399",
".git/objects/7c/09ed037421bc40cf6ac44f7ee30c8711fff81f": "63b592ccb56f1a2c5d8fc6f80e791abd",
".git/objects/4f/b0e9787821405a8eb14c941c65f41101e34933": "a33640de4e82c5564d7879a4877fba0a",
".git/objects/76/6c608c8fcd62227d32e73c699b376379ab1041": "68d8f552c993a459de0a0e697f5ef1e5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b975840ed55cfb85dea83a2e151fb9bb",
".git/logs/refs/heads/main": "d78cd50144d265c9c04d2f369585e912",
".git/logs/refs/remotes/origin/main": "f57b9bc05f5952620e0cf41bfbd4bf73",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "e417f933d7bd4237eaed8388ab9b3c3c",
".git/refs/remotes/origin/main": "e417f933d7bd4237eaed8388ab9b3c3c",
".git/index": "bf867a4f04e2bd266a3e50e4aa95a826",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "fe719c6d9f69b9836b2ba453de7adde8",
"assets/NOTICES": "c51e806aa086d29e7f5c4db9b0d920bc",
"assets/FontManifest.json": "7e301bd9623e529395da662210bbd185",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/lib/lyrics/bhajane_10.txt": "23609b168f3987bfd1113b43c7e458ff",
"assets/lib/lyrics/bhajane_6.txt": "3cf3c4f31c3549a684fc358bce43e62e",
"assets/lib/lyrics/bhajane_11.txt": "83303e3d53ef5cb49dca2cca5983d007",
"assets/lib/lyrics/bhajane_13.txt": "07131cdaa9c4fd8b58b946989bb116a3",
"assets/lib/lyrics/bhajane_5.txt": "ed86dab39ad9dbdacd582d13966d0d99",
"assets/lib/lyrics/bhajane_4.txt": "ded0647b5871bfb6fccf484597eeddaa",
"assets/lib/lyrics/bhajane_12.txt": "9c227541c2c659483204afdcae9a798e",
"assets/lib/lyrics/bhajane_16.txt": "5192490e40eb0e0dcad1a4483726a903",
"assets/lib/lyrics/bhajane_1.txt": "453d419ff73e42383ac40d559f7cbc0c",
"assets/lib/lyrics/bhajane_17.txt": "88a763bddc217bb9b04dc9253f89565a",
"assets/lib/lyrics/bhajane_15.txt": "4d20112e97f86fc9ed645763250f07d4",
"assets/lib/lyrics/bhajane_2.txt": "0092a2441415635703914048edaa2041",
"assets/lib/lyrics/bhajane_19.txt": "1d7df9e84c56588afeff33a5a5bb0ba8",
"assets/lib/lyrics/shloka-6.txt": "a44a10070b7818653d9e28f0342f020c",
"assets/lib/lyrics/shloka-4.txt": "8f23c419d2f3f45880c7192e3b161be9",
"assets/lib/lyrics/shloka-5.txt": "3a3af408bb0b2aca1d226ee5ac38aa6a",
"assets/lib/lyrics/shloka-1.txt": "2154ba609b47c440c0a8df974052033a",
"assets/lib/lyrics/bhajane_9.txt": "c841a749d9d26b82b21bc473148b3322",
"assets/lib/lyrics/bhajane_8.txt": "4e3cc5459d3c218cc73d65df69f40c8c",
"assets/lib/lyrics/shloka-2.txt": "243472020b1fb181c152fbc3e25e6fb4",
"assets/lib/lyrics/shloka-3.txt": "47e67e626c48c0c2e9ce5e4038587256",
"assets/lib/lyrics/bhajane_21.txt": "d7fea8f548bc5caf47d9344ff5036617",
"assets/lib/assets/images/lord-rama.jpeg": "c523628420f358a13915ed4e0f58aae2",
"assets/lib/assets/fonts/lohitkannada.ttf": "73c007c19087ead858e1005a06b42324",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"prasanna-hr.github.io/index.html": "e59ff97941044f85df5297e1c302d260",
"prasanna-hr.github.io/.git/config": "d464fa91f0daee582083f06e559cc06a",
"prasanna-hr.github.io/.git/objects/d0/b12f5072373083b9ff66495d70b82b2c260da0": "0c23739761ee182393e96ad0a638910d",
"prasanna-hr.github.io/.git/objects/55/7db03de997c86a4a028e1ebd3a1ceb225be238": "8860a360209f66ea0340a3c3a9aed75b",
"prasanna-hr.github.io/.git/objects/ef/bd263bc3503e5ebc193a8051ee264b461f89bf": "37ee5cfe1b27b5ae32ba45a74648d083",
"prasanna-hr.github.io/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"prasanna-hr.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"prasanna-hr.github.io/.git/logs/HEAD": "debba0606221ddb6d5b584886f97c099",
"prasanna-hr.github.io/.git/logs/refs/heads/master": "debba0606221ddb6d5b584886f97c099",
"prasanna-hr.github.io/.git/logs/refs/remotes/origin/master": "6b5a12487ee66f82d3b3ab7aa058f3b3",
"prasanna-hr.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"prasanna-hr.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"prasanna-hr.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"prasanna-hr.github.io/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"prasanna-hr.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"prasanna-hr.github.io/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"prasanna-hr.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"prasanna-hr.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"prasanna-hr.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"prasanna-hr.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"prasanna-hr.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"prasanna-hr.github.io/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"prasanna-hr.github.io/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"prasanna-hr.github.io/.git/refs/heads/master": "70dd428e952a83f67617742f172b41fb",
"prasanna-hr.github.io/.git/refs/remotes/origin/master": "70dd428e952a83f67617742f172b41fb",
"prasanna-hr.github.io/.git/index": "dfb897bcb11744261750f253f4e5a989",
"prasanna-hr.github.io/.git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
