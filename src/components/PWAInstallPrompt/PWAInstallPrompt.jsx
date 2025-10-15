import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Alert } from 'react-bootstrap';
import { FaDownload, FaTimes, FaMobileAlt } from 'react-icons/fa';
import './PWAInstallPrompt.scss';

/**
 * PWA Install Prompt Component
 * Shows an install prompt when the app can be installed as a PWA
 *
 * Features:
 * - Detects beforeinstallprompt event
 * - Provides install button
 * - Handles installation flow
 * - Tracks installations in analytics
 * - Can be dismissed
 * - Respects user preferences (localStorage)
 */
const PWAInstallPrompt = () => {
  const [installPrompt, setInstallPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      return;
    }

    // Check if user has dismissed the prompt before
    const hasUserDismissed = localStorage.getItem('pwa-install-dismissed');
    if (hasUserDismissed === 'true') {
      return;
    }

    // Check if iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    setIsIOS(isIOSDevice);

    // Listen for beforeinstallprompt event (Android/Desktop)
    const handleBeforeInstallPrompt = (e) => {
      // Prevent the mini-infobar from appearing
      e.preventDefault();

      // Save the event for later use
      setInstallPrompt(e);
      setShowPrompt(true);

      console.log('[PWA] Install prompt available');

      // Track prompt shown in analytics
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'pwa_install_prompt_shown',
          pwa: {
            platform: 'android_desktop'
          }
        });
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // For iOS, show manual install instructions after a delay
    if (isIOSDevice && !window.navigator.standalone) {
      const timer = setTimeout(() => {
        setShowPrompt(true);

        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'pwa_install_prompt_shown',
            pwa: {
              platform: 'ios'
            }
          });
        }
      }, 5000); // Show after 5 seconds

      return () => {
        clearTimeout(timer);
        window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      };
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  // Listen for app installed event
  useEffect(() => {
    const handleAppInstalled = () => {
      console.log('[PWA] App installed successfully');
      setIsInstalled(true);
      setShowPrompt(false);

      // Track installation in analytics
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'pwa_installed',
          pwa: {
            platform: isIOS ? 'ios' : 'android_desktop'
          }
        });
      }
    };

    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, [isIOS]);

  const handleInstallClick = async () => {
    if (!installPrompt) {
      return;
    }

    // Show the install prompt
    installPrompt.prompt();

    // Wait for the user to respond
    const { outcome } = await installPrompt.userChoice;

    console.log(`[PWA] User response: ${outcome}`);

    // Track user choice in analytics
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'pwa_install_response',
        pwa: {
          outcome,
          platform: 'android_desktop'
        }
      });
    }

    if (outcome === 'accepted') {
      console.log('[PWA] User accepted the install prompt');
      setShowPrompt(false);
    } else {
      console.log('[PWA] User dismissed the install prompt');
      handleDismiss();
    }

    // Clear the saved prompt
    setInstallPrompt(null);
  };

  const handleDismiss = () => {
    setShowPrompt(false);

    // Save dismissal to localStorage (don't show again for 7 days)
    localStorage.setItem('pwa-install-dismissed', 'true');
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 7);
    localStorage.setItem('pwa-install-dismissed-expiry', expiryDate.toISOString());

    // Track dismissal in analytics
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'pwa_install_dismissed',
        pwa: {
          platform: isIOS ? 'ios' : 'android_desktop'
        }
      });
    }
  };

  // Check if dismissal has expired
  useEffect(() => {
    const checkDismissalExpiry = () => {
      const expiryDate = localStorage.getItem('pwa-install-dismissed-expiry');
      if (expiryDate) {
        const expiry = new Date(expiryDate);
        const now = new Date();

        if (now > expiry) {
          localStorage.removeItem('pwa-install-dismissed');
          localStorage.removeItem('pwa-install-dismissed-expiry');
        }
      }
    };

    checkDismissalExpiry();
  }, []);

  // Don't show if already installed or dismissed
  if (isInstalled || !showPrompt) {
    return null;
  }

  // iOS Install Instructions
  if (isIOS && !installPrompt) {
    return (
      <Alert variant="info" className="pwa-install-prompt pwa-install-prompt--ios" dismissible onClose={handleDismiss}>
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={9}>
              <div className="pwa-install-prompt__content">
                <FaMobileAlt className="pwa-install-prompt__icon" aria-hidden="true" />
                <div className="pwa-install-prompt__text">
                  <h5 className="pwa-install-prompt__title">
                    Instala la app en tu iPhone/iPad
                  </h5>
                  <p className="pwa-install-prompt__description">
                    Toca el botón de compartir <span className="pwa-install-prompt__share-icon">⎙</span> y
                    luego "Añadir a pantalla de inicio" para acceso rápido.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={3} className="text-md-end">
              <Button
                variant="link"
                onClick={handleDismiss}
                className="pwa-install-prompt__dismiss"
                aria-label="Cerrar notificación"
              >
                <FaTimes />
              </Button>
            </Col>
          </Row>
        </Container>
      </Alert>
    );
  }

  // Android/Desktop Install Prompt
  return (
    <Alert variant="primary" className="pwa-install-prompt" dismissible onClose={handleDismiss}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={9}>
            <div className="pwa-install-prompt__content">
              <FaDownload className="pwa-install-prompt__icon" aria-hidden="true" />
              <div className="pwa-install-prompt__text">
                <h5 className="pwa-install-prompt__title">
                  Instala Creativos Espacios
                </h5>
                <p className="pwa-install-prompt__description">
                  Accede más rápido y recibe notificaciones. Funciona sin conexión.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={3} className="text-md-end">
            <Button
              variant="success"
              onClick={handleInstallClick}
              className="pwa-install-prompt__button"
              aria-label="Instalar aplicación"
            >
              <FaDownload aria-hidden="true" />
              <span className="d-none d-md-inline ms-2">Instalar</span>
            </Button>
          </Col>
        </Row>
      </Container>
    </Alert>
  );
};

export default PWAInstallPrompt;
