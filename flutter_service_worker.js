'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ce4f401ad87f1ef2c35af44531f6a5ae",
"index.html": "2b4d208c55d85e045c72ad9dc0a0a072",
"/": "e59ff97941044f85df5297e1c302d260",
"main.dart.js": "083eb61c92b8e46cea7aff02c2a6c2e9",
"README.md": "405d262e95c0a25a90b35585f3b29456",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "54c02166a0a57324276bd93c8cd31929",
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
"assets/AssetManifest.json": "b56746d0b514614899741bed154bf0fc",
"assets/NOTICES": "c51e806aa086d29e7f5c4db9b0d920bc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/lib/lyrics/bhajane-4.txt": "8c1173444d77b3d31f08eebe3e319f67",
"assets/lib/lyrics/bhajane-5.txt": "fe86c33f6343e5d331899d7ee3efe1df",
"assets/lib/lyrics/bhajane-7.txt": "87b509049de49bcc719065b91323d0da",
"assets/lib/lyrics/bhajane-6.txt": "a84fb5d1e8ecac9dc8e84aff7ec7fc70",
"assets/lib/lyrics/bhajane-2.txt": "7c12fea9f8cf03d4dda5e470c646fb5b",
"assets/lib/lyrics/bhajane-3.txt": "6e3791fccf4b855d70c928f6b424e92f",
"assets/lib/lyrics/bhajane-1.txt": "a4d539079322319c7b64512cd3d084f7",
"assets/lib/lyrics/bhajane-15.txt": "5192490e40eb0e0dcad1a4483726a903",
"assets/lib/lyrics/bhajane-14.txt": "b585f306d876f65f9d3dbb54f7c62f9a",
"assets/lib/lyrics/bhajane-13.txt": "bb6aeec246c56110ff5c14a9b60ab4c0",
"assets/lib/lyrics/bhajane-12.txt": "74dc258e9e357b3ac77662542cb303a7",
"assets/lib/lyrics/bhajane-10.txt": "b935b1b2f3b110ea40d9743c6df9d918",
"assets/lib/lyrics/bhajane-8.txt": "c4d90f50ac769e61151d77037342b11b",
"assets/lib/lyrics/bhajane-9.txt": "491807356151c2c420f19985e560dd54",
"assets/lib/lyrics/bhajane-11.txt": "08bff2937062b3e118d5716d37734581",
"assets/lib/assets/images/lord-rama.jpeg": "9e1ecb8e4829353eb821852fa5e55ed8",
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
