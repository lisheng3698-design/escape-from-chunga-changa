(function () {
  'use strict';

  const frame = document.getElementById('game-frame');
  const iframe = document.getElementById('game-embed');
  const fullscreenButton = document.getElementById('fullscreen-game');
  const reloadButton = document.getElementById('reload-game');
  const gameSource = 'https://app-563425.cdn.games.yandex.net/563425/g6wgsnftjhogb751y35zlzw549yv98my/index.html?language=en&sdk=%2Fsdk%2F_%2Fv2.f2ff990a6aa0cd73a7bd.js#origin=https%3A%2F%2Fyandex.com&app-id=563425&device-type=desktop';

  function track(eventName, details) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({ event: eventName }, details || {}));
    window.dispatchEvent(new CustomEvent('site:event', { detail: Object.assign({ event: eventName }, details || {}) }));
  }

  document.querySelectorAll('[data-year]').forEach(function (element) {
    element.textContent = String(new Date().getFullYear());
  });

  if (iframe) {
    iframe.addEventListener('load', function () {
      track('game_embed_loaded', { provider: 'yandex_games', app_id: '563425' });
    });
  }

  if (fullscreenButton && frame) {
    fullscreenButton.addEventListener('click', function () {
      track('game_fullscreen_clicked', { provider: 'yandex_games' });
      if (frame.requestFullscreen) {
        frame.requestFullscreen().catch(function () {
          window.open('https://yandex.com/games/app/563425?language=en', '_blank', 'noopener,noreferrer');
        });
      } else {
        window.open('https://yandex.com/games/app/563425?language=en', '_blank', 'noopener,noreferrer');
      }
    });
  }

  if (reloadButton && iframe) {
    reloadButton.addEventListener('click', function () {
      track('game_reload_clicked', { provider: 'yandex_games' });
      iframe.src = gameSource;
      iframe.focus();
    });
  }

  document.querySelectorAll('a[href="/how-to-play/"]').forEach(function (link) {
    link.addEventListener('click', function () {
      track('guide_opened', { source: window.location.pathname });
    });
  });
})();
