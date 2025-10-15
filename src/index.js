import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './index.scss';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// Register service worker for PWA functionality
serviceWorkerRegistration.register({
  onSuccess: (registration) => {
    console.log('✅ Contenido cacheado para uso offline');

    // Track PWA install in analytics
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'pwa_cached',
        pwa: {
          status: 'cached',
          scope: registration.scope
        }
      });
    }
  },
  onUpdate: (registration) => {
    console.log('🔄 Nueva versión disponible');

    // Show update notification to user
    const updateMessage = '¡Nueva versión disponible! Recarga la página para actualizar.';

    // Track update available in analytics
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'pwa_update_available',
        pwa: {
          status: 'update_available'
        }
      });
    }

    // Create update notification
    if ('Notification' in window && Notification.permission === 'granted') {
      const notification = new Notification('Creativos Espacios', {
        body: updateMessage,
        icon: '/logo192.png',
        badge: '/logo192.png',
        tag: 'app-update',
        requireInteraction: true,
        actions: [
          { action: 'update', title: 'Actualizar ahora' },
          { action: 'dismiss', title: 'Más tarde' }
        ]
      });

      notification.onclick = () => {
        // Skip waiting and reload to activate new service worker
        if (registration.waiting) {
          registration.waiting.postMessage({ type: 'SKIP_WAITING' });
          window.location.reload();
        }
      };
    } else {
      // Fallback: Show console message and browser notification
      console.log(updateMessage);

      // Could also show an in-app banner here
      // For now, we'll rely on the service worker update mechanism
    }
  }
});

// Check for updates every hour
serviceWorkerRegistration.checkForUpdates(60);