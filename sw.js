function loadScript(src, callback) {
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
}

loadScript('https://www.googletagmanager.com/gtag/js?id=G-MNDGKLC9EV', function () {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
     dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'G-MNDGKLC9EV');
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('sw.js').then(
      function (registration) {
        console.log('Service worker registered: ', registration.scope);
      },
      function (err) {
        console.log('Service worker registration failed: ', err);
      }
    );
  });
}

