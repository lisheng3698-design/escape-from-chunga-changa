(function () {
  'use strict';

  function track(eventName, details) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({ event: eventName }, details || {}));
    window.dispatchEvent(new CustomEvent('site:event', { detail: Object.assign({ event: eventName }, details || {}) }));
  }

  document.querySelectorAll('[data-year]').forEach(function (element) {
    element.textContent = String(new Date().getFullYear());
  });

  document.querySelectorAll('[data-game-launch]').forEach(function (link) {
    link.addEventListener('click', function () {
      track('official_game_opened', {
        provider: 'yandex_games',
        app_id: '563425',
        source: window.location.pathname
      });
    });
  });

  document.querySelectorAll('a[href="/how-to-play/"]').forEach(function (link) {
    link.addEventListener('click', function () {
      track('guide_opened', { source: window.location.pathname });
    });
  });
})();
