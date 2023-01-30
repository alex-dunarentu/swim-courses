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
