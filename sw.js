/* cache resources */
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
    ])
  );
});

/* load google analytics */
importScripts('https://www.googletagmanager.com/gtag/js?id=G-MNDGKLC9EV');

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-MNDGKLC9EV');

self.addEventListener('fetch', function (event) {
  event.respondWith(
    fetch(event.request).then(function (response) {
      if (response.status === 200) {
        gtag('config', 'G-MNDGKLC9EV', {
          page_path: event.request.url,
        });
      }
      return response;
    })
  );
});
