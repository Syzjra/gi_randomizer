'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a6041be9d9d62fba36a7b08950fed167",
"assets/assets/characters/icon/ALBEDO.png": "5ea919e563c37af000cb8c69b22a4e0a",
"assets/assets/characters/icon/ALOY.png": "79496e57b52f824b7095bc0d3e4cf1e1",
"assets/assets/characters/icon/AMBER.png": "5b485364766df8c31b00909a6461fbde",
"assets/assets/characters/icon/ARATAKI%2520ITTO.png": "960403731b786238cc9f3e11121bb24c",
"assets/assets/characters/icon/BARBARA.png": "8b0a61c6dc241fbfb45ee736159a9df8",
"assets/assets/characters/icon/BEIDOU.png": "2205006a2a2edd71d0913d2c5fec8493",
"assets/assets/characters/icon/BENNETT.png": "309aa18c59ce6fd29b9ec5baebfcd291",
"assets/assets/characters/icon/CHONGYUN.png": "58375bd187c155a398f77753e1f9aba3",
"assets/assets/characters/icon/DILUC.png": "6e6f57317ce859314331bded68c335e7",
"assets/assets/characters/icon/DIONA.png": "457c28876c3a5cdd8760cad2e8b6c492",
"assets/assets/characters/icon/EULA.png": "cf3e6e54b4b19fe1a5916af980dc0744",
"assets/assets/characters/icon/FISCHL.png": "8067f15d8de5da98dbb6ce5112598b58",
"assets/assets/characters/icon/GANYU.png": "d19557e3e8f92e8090204aa3af7e668d",
"assets/assets/characters/icon/GOROU.png": "fdfa6fea7dc9e628328183183e0541ac",
"assets/assets/characters/icon/HU%2520TAO.png": "6a54af5aca341883859f5d24da3000fe",
"assets/assets/characters/icon/JEAN.png": "eb631369e43ffca5aa89fbfb227f7d39",
"assets/assets/characters/icon/KAEDEHARA%2520KAZUHA.png": "b38f80e18a0c6c2d56541dc06deffe9b",
"assets/assets/characters/icon/KAEYA.png": "9090035286a247b8fffef754cd0491f9",
"assets/assets/characters/icon/KAMISATO%2520AYAKA.png": "ecdcd83eb984597f2fd097ef800545e8",
"assets/assets/characters/icon/KAMISATO%2520AYATO.png": "6713b70c875d723eb22c9effda407377",
"assets/assets/characters/icon/KEQING.png": "70f0ba30832d1ef4fc947cff3a9cf5b7",
"assets/assets/characters/icon/KLEE.png": "0eec919f6330d704248dc00eb73ec6ae",
"assets/assets/characters/icon/KUJOU%2520SARA.png": "f04ebfd37c69bd19fab182ae4d4505b6",
"assets/assets/characters/icon/LISA.png": "963e92d0a4a8c039c08db5be687d728a",
"assets/assets/characters/icon/LUMINE%2520AETHER.png": "04f769b0b1671b5ffbbafefd7286b4b2",
"assets/assets/characters/icon/LUMINE.png": "360b0ae9305d213c8b8cf6a2dfb00810",
"assets/assets/characters/icon/MONA.png": "5ddec58ede0a4193d1bd72f0f792b4fa",
"assets/assets/characters/icon/NINGGUANG.png": "3e20148475a514c274ab317b1b295ad6",
"assets/assets/characters/icon/NOELLE.png": "3aac2c7f25ef15dcd540fe2c3fed99b3",
"assets/assets/characters/icon/QIQI.png": "a8d9152cbec315bd3af1b81ab38bcbb8",
"assets/assets/characters/icon/RAIDEN%2520SHOGUN.png": "70d18b215d0f6f721d3f619743b71a5e",
"assets/assets/characters/icon/RARITY_4.png": "7a6c584130342f6d81bc676499d18ec1",
"assets/assets/characters/icon/RARITY_5.png": "1ff411a0ea00625e406769827dcbfcb1",
"assets/assets/characters/icon/RAZOR.png": "911d75007d943edf93cf5ad1cd683ea6",
"assets/assets/characters/icon/ROSARIA.png": "e4939091b20308d7d430f845bed40959",
"assets/assets/characters/icon/SANGONOMIYA%2520KOKOMI.png": "c4e18b636cbe869264f4f5875bc438d9",
"assets/assets/characters/icon/SAYU.png": "9281e270c104ef7fe6f9424364d95a9f",
"assets/assets/characters/icon/SHENHE.png": "792ade60a3f8305c919f0d09daf70097",
"assets/assets/characters/icon/SUCROSE.png": "f527aa0b45df57842fb097b8c38bf169",
"assets/assets/characters/icon/TARTAGLIA.png": "10cd31b9230b7f5704b5700986fc8b0c",
"assets/assets/characters/icon/THOMA.png": "7b2bf5075e91258d81d2a0586bb5e527",
"assets/assets/characters/icon/VENTI.png": "3223bc2038ec73ad9ea8919492e4b326",
"assets/assets/characters/icon/XIANGLING.png": "1b510cb569d7ad2688a8c4e05c872283",
"assets/assets/characters/icon/XIAO.png": "94ee09c802353c613165f1b4cbfa2da4",
"assets/assets/characters/icon/XINGQIU.png": "4ee7dbc175a319eca4bf0ae111335c58",
"assets/assets/characters/icon/XINYAN.png": "b82dd7741e6bd8eaa99d2ee3aee7f408",
"assets/assets/characters/icon/YAE%2520MIKO.png": "ff80940ea6d2f7c29f3c833714caaa23",
"assets/assets/characters/icon/YANFEI.png": "7699695e87e15431680aaefdadcab4e1",
"assets/assets/characters/icon/YELAN.png": "76cfc9a21e196fd316070196c1396950",
"assets/assets/characters/icon/YOIMIYA.png": "e3ed7ec7de2a2c069870fb20f6a3770f",
"assets/assets/characters/icon/YUN%2520JIN.png": "bfb0624ad7e512723c1f4e6a8ea42ad4",
"assets/assets/characters/icon/ZHONGLI.png": "cfa364293021672c5a65c6a174b873b2",
"assets/assets/visions/ANEMO.png": "6b5c0d861fd1b4791bd602d3e7296598",
"assets/assets/visions/CRYO.png": "157c22f5fd473d3c1684c6ee981540b6",
"assets/assets/visions/ELECTRO.png": "16d344b6abbc369a2db9d46d6f31305b",
"assets/assets/visions/GEO.png": "9c4cd6e14b87fc262cca36e6d0e9bdb0",
"assets/assets/visions/HYDRO.png": "f54c8f0dae23fced358c28126f220a11",
"assets/assets/visions/PYRO.png": "ac3123b42bf631685287e76c8c834a6c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "7046cd409b999b689851fc2a7215e02c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "57987acf713d94c947831cfaa912da00",
"/": "57987acf713d94c947831cfaa912da00",
"main.dart.js": "c42a4245cb214439e2523a9470d45cb9",
"manifest.json": "772c1fc99fa8bdb6535e347f4b058015",
"version.json": "c815e7ee5e95b6f957a6a162ae417353"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
