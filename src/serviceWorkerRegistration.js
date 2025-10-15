/**
 * Service Worker Registration for Creativos Espacios PWA
 *
 * This file handles:
 * - Service worker registration
 * - Update detection and notification
 * - Installation and activation events
 * - Error handling
 */

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
  window.location.hostname === '[::1]' ||
  window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

/**
 * Configuration object for service worker callbacks
 */
export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);

    if (publicUrl.origin !== window.location.origin) {
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        checkValidServiceWorker(swUrl, config);
        navigator.serviceWorker.ready.then(() => {
          console.log(
            'Esta app está siendo servida con cache-first por un service worker. ' +
            'Para más información, visita https://cra.link/PWA'
          );
        });
      } else {
        registerValidSW(swUrl, config);
      }
    });
  }
}

/**
 * Register valid service worker
 */
function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      console.log('[SW] Service Worker registrado:', registration);

      registration.onupdatefound = () => {
        const installingWorker = registration.installing;

        if (installingWorker == null) {
          return;
        }

        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // Nueva versión disponible
              console.log('[SW] Nuevo contenido disponible; por favor, actualiza.');

              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // Contenido cacheado para uso offline
              console.log('[SW] Contenido cacheado para uso offline.');

              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch((error) => {
      console.error('[SW] Error durante el registro del Service Worker:', error);
    });
}

/**
 * Check if service worker exists and is valid
 */
function checkValidServiceWorker(swUrl, config) {
  fetch(swUrl, {
    headers: { 'Service-Worker': 'script' }
  })
    .then((response) => {
      const contentType = response.headers.get('content-type');

      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // Service worker no encontrado, recargar página
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker encontrado, proceder normalmente
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log('[SW] No hay conexión a Internet. La app se ejecuta en modo offline.');
    });
}

/**
 * Unregister service worker
 */
export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
        console.log('[SW] Service Worker desregistrado');
      })
      .catch((error) => {
        console.error('[SW] Error al desregistrar:', error.message);
      });
  }
}

/**
 * Update service worker
 * Forces the waiting service worker to become active
 */
export function update() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.update();
        console.log('[SW] Buscando actualizaciones...');
      })
      .catch((error) => {
        console.error('[SW] Error al actualizar:', error);
      });
  }
}

/**
 * Skip waiting and activate new service worker immediately
 */
export function skipWaiting() {
  if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
    console.log('[SW] Activando nueva versión...');
  }
}

/**
 * Check for updates periodically
 */
export function checkForUpdates(intervalMinutes = 60) {
  if ('serviceWorker' in navigator) {
    setInterval(() => {
      navigator.serviceWorker.ready
        .then((registration) => {
          registration.update();
          console.log('[SW] Verificación automática de actualizaciones');
        })
        .catch((error) => {
          console.error('[SW] Error en verificación automática:', error);
        });
    }, intervalMinutes * 60 * 1000);
  }
}
