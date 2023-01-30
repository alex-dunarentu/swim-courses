// use workbox to configure the `gtag.js` script to be cached and used offline
self.importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.3/workbox-sw.js');

workbox.googleAnalytics.initialize({
  parameterOverrides: {
    cd1: 'offline',
  },
  hitFilter: (params) => {
    const queueTimeInSeconds = Math.round(Date.now() / 1000) - params.queueTime;
    params.cd1 = queueTimeInSeconds;
    return true;
  },
});

// register a route for the `gtag.js` script using Workbox
workbox.routing.registerRoute(
  new RegExp('https://www.googletagmanager.com/gtag/js'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'gtag-js',
  })
);

// cache resources
const addResourcesToCache = async (resources) => {
  const cache = await caches.open('v1');
  await cache.addAll(resources);
};

self.addEventListener('install', (event) => {
  event.waitUntil(
    addResourcesToCache([
      '/assets/fonts/Baloo2-Bold.ttf',
      '/assets/fonts/Baloo2-Regular.ttf',
      '/assets/fonts/Baloo2-SemiBold.ttf',
      '/assets/fonts/Baloo2-Medium.ttf',
      '/assets/images/logo.svg',
      'https://www.googletagmanager.com/gtag/js?id=G-MNDGKLC9EV',
    ])
  );
});

// serve the response from the cache instead of making a network request
self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('https://www.googletagmanager.com/gtag/js?id=G-MNDGKLC9EV')) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});
