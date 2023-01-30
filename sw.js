const loadScript = (src, callback) => {
  var script = document.createElement('script');
  script.src = src;
  script.async = true;
  script.onreadystatechange = script.onload = function () {
    var state = script.readyState;
    if (!callback.done && (!state || /loaded|complete/.test(state))) {
      callback.done = true;
      callback();
    }
  };
  document.querySelector('head').appendChild(script);
};
console.log('test2');
const registerServiceWorker = async () => {
 console.log('test1');
  if ('serviceWorker' in navigator) {
    console.log('test');
    try {
      const registration = await navigator.serviceWorker.register('./sw.js', {
        scope: '/',
      });
      if (registration.installing) {
        console.log('Service worker installing');
      } else if (registration.waiting) {
        console.log('Service worker installed');
      } else if (registration.active) {
        console.log('Service worker active');
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

const addResourcesToCache = async (resources) => {
  const cache = await caches.open('v1');
  await cache.addAll(resources);
};

registerServiceWorker();

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

loadScript('https://www.googletagmanager.com/gtag/js?id=G-MNDGKLC9EV', function () {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'G-MNDGKLC9EV');
});
