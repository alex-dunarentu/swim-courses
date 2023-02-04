const VERSION = '1.1'; // 04-02-2023

const addResourcesToCache = async (resources) => {
  const cache = await caches.open(`v${VERSION}`);
  try {
    await cache.addAll(resources);
  } catch (error) {
    console.log(error);
  }
};

self.addEventListener('install', (event) => {
  event.waitUntil(
    addResourcesToCache([
      '/assets/fonts/Baloo2-Bold.ttf',
      '/assets/fonts/Baloo2-Regular.ttf',
      '/assets/fonts/Baloo2-SemiBold.ttf',
      '/assets/fonts/Baloo2-Medium.ttf',
      '/assets/images/favicon.png',
      '/assets/images/logo.svg',
      '/assets/images/reviews.svg',
      '/assets/images/home-1.jpg',
      '/assets/images/home-2.jpg',
      '/assets/images/home-3.jpg',
      '/assets/images/slide-1.jpeg',
      '/assets/images/slide-2.jpeg',
      '/assets/images/slide-3.jpeg',
    ])
  );
});
