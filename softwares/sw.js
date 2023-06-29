//CACHING FILES//
const filesToCache = [
  './',
  './offline.html',
  './vendor/bootstrap/css/bootstrap.min.css',
  './vendor/fontawesome-free/css/all.min.css',
  './css/black.css',
  './css/blue.css',
  './css/darkmode.css',
  './css/green.css',
  './css/purple.css',
  './css/red.css',
  './vendor/owl-carousel/owl.carousel.css',
  './vendor/owl-carousel/owl.theme.css',
  './vendor/sweetalert/sweetalert.min.css',
  './vendor/jqueryui/jquery-ui.css',
  './vendor/player/css/default.css',
  './vendor/player/css/plugins/pip.css',
  './vendor/jquery/jquery.min.js',
  './vendor/jquery-easing/jquery.easing.min.js',
  './vendor/owl-carousel/owl.carousel.js',
  './vendor/sweetalert/sweetalert.min.js',
  './js/push_notice.js',
  './js/custom.js',
  './vendor/jqueryui/jquery-ui.min.js',
  './vendor/player/js/video.min.js',
  './vendor/player/js/volume.js',
];

const staticCacheName = 'pages-cache-v2';

self.addEventListener('install', event => {
  console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open(staticCacheName)
    .then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

//LOADING FILES WHEN OFFLINE//
// self.addEventListener('fetch', event => {
//   console.log('Fetch event for ', event.request.url);
//   event.respondWith(
//     caches.match(event.request)
//     .then(response => {
//       if (response) {
//         console.log('Found ', event.request.url, ' in cache');
//         return response;
//       }
//       console.log('Network request for ', event.request.url);
//       return fetch(event.request)
//
//         .then(response => {
//           // TODO 5 - Respond with custom 404 page
//           return caches.open(staticCacheName).then(cache => {
//             cache.put(event.request.url, response.clone());
//             return response;
//           });
//         });
//
//
//     }).catch(error => {
//       console.log('Error, ', error);
//       return caches.match('./offline.html');
//     })
//   );
// });

self.addEventListener('fetch', (event) => {
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());
});

// TODO 6 - Respond with custom offline page

self.addEventListener('activate', event => {
  console.log('Activating new service worker...');

  const cacheWhitelist = [staticCacheName];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});