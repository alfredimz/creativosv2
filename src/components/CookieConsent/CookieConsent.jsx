import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCookie, FaTimes } from 'react-icons/fa';
import './CookieConsent.scss';

/**
 * Cookie Consent Banner Component
 * GDPR compliant with GTM Consent Mode integration
 *
 * Features:
 * - Default consent state (denied) until user accepts
 * - Granular cookie categories
 * - GTM Consent Mode v2 integration
 * - Persistent consent storage
 * - Accessibility compliant (WCAG 2.1 AA)
 */

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  // Cookie consent preferences
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    personalization: false
  });

  // Check if consent was already given
  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      const savedConsent = JSON.parse(consent);
      setPreferences(savedConsent.preferences);
      setConsentGiven(true);
      updateGTMConsent(savedConsent.preferences);
    } else {
      // Show banner if no consent yet
      setShowBanner(true);
      // Set default GTM consent to denied
      setDefaultGTMConsent();
    }
  }, []);

  /**
   * Set default GTM Consent Mode (all denied except necessary)
   * Called on first page load before user consent
   */
  const setDefaultGTMConsent = () => {
    if (window.gtag) {
      window.gtag('consent', 'default', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'personalization_storage': 'denied',
        'functionality_storage': 'granted', // Necessary cookies
        'security_storage': 'granted' // Necessary cookies
      });
    }

    // Also update dataLayer for GTM Consent Mode
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'consent_default',
        consent: {
          analytics_storage: 'denied',
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          personalization_storage: 'denied'
        }
      });
    }
  };

  /**
   * Update GTM Consent Mode based on user preferences
   */
  const updateGTMConsent = (prefs) => {
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': prefs.analytics ? 'granted' : 'denied',
        'ad_storage': prefs.marketing ? 'granted' : 'denied',
        'ad_user_data': prefs.marketing ? 'granted' : 'denied',
        'ad_personalization': prefs.marketing ? 'granted' : 'denied',
        'personalization_storage': prefs.personalization ? 'granted' : 'denied',
        'functionality_storage': 'granted',
        'security_storage': 'granted'
      });
    }

    // Also push to dataLayer for GTM
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'consent_update',
        consent: {
          analytics_storage: prefs.analytics ? 'granted' : 'denied',
          ad_storage: prefs.marketing ? 'granted' : 'denied',
          ad_user_data: prefs.marketing ? 'granted' : 'denied',
          ad_personalization: prefs.marketing ? 'granted' : 'denied',
          personalization_storage: prefs.personalization ? 'granted' : 'denied'
        }
      });
    }
  };

  /**
   * Save consent preferences to localStorage
   */
  const saveConsent = (prefs) => {
    const consentData = {
      preferences: prefs,
      timestamp: new Date().toISOString(),
      version: '1.0'
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    updateGTMConsent(prefs);
  };

  /**
   * Accept all cookies
   */
  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      personalization: true
    };
    setPreferences(allAccepted);
    saveConsent(allAccepted);
    setConsentGiven(true);
    setShowBanner(false);
    setShowSettings(false);
  };

  /**
   * Accept only necessary cookies (reject all optional)
   */
  const acceptNecessary = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      personalization: false
    };
    setPreferences(onlyNecessary);
    saveConsent(onlyNecessary);
    setConsentGiven(true);
    setShowBanner(false);
    setShowSettings(false);
  };

  /**
   * Save custom preferences
   */
  const saveCustomPreferences = () => {
    saveConsent(preferences);
    setConsentGiven(true);
    setShowBanner(false);
    setShowSettings(false);
  };

  /**
   * Toggle individual cookie category
   */
  const togglePreference = (category) => {
    if (category === 'necessary') return; // Cannot disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  /**
   * Open settings modal
   */
  const openSettings = () => {
    setShowSettings(true);
  };

  /**
   * Close settings modal
   */
  const closeSettings = () => {
    setShowSettings(false);
  };

  // Don't render if consent already given and settings not open
  if (consentGiven && !showBanner && !showSettings) {
    return null;
  }

  return (
    <>
      {/* Cookie Consent Banner */}
      {showBanner && (
        <div
          className="cookie-consent"
          role="dialog"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-description"
        >
          <div className="cookie-consent__content">
            <div className="cookie-consent__icon">
              <FaCookie aria-hidden="true" />
            </div>
            <div className="cookie-consent__text">
              <h3 id="cookie-consent-title" className="cookie-consent__title">
                Este sitio usa cookies
              </h3>
              <p id="cookie-consent-description" className="cookie-consent__description">
                Usamos cookies para mejorar tu experiencia, analizar el tráfico del sitio y personalizar contenido.
                Al hacer clic en "Aceptar todo", aceptas nuestro uso de cookies.{' '}
                <Link to="/privacidad" className="cookie-consent__link">
                  Aviso de Privacidad
                </Link>
              </p>
            </div>
            <div className="cookie-consent__actions">
              <button
                className="cookie-consent__button cookie-consent__button--primary"
                onClick={acceptAll}
                aria-label="Aceptar todas las cookies"
              >
                Aceptar todo
              </button>
              <button
                className="cookie-consent__button cookie-consent__button--secondary"
                onClick={acceptNecessary}
                aria-label="Aceptar solo cookies necesarias"
              >
                Solo necesarias
              </button>
              <button
                className="cookie-consent__button cookie-consent__button--tertiary"
                onClick={openSettings}
                aria-label="Configurar preferencias de cookies"
              >
                Configurar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div
          className="cookie-settings-overlay"
          onClick={closeSettings}
          role="dialog"
          aria-labelledby="cookie-settings-title"
          aria-modal="true"
        >
          <div
            className="cookie-settings"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="cookie-settings__close"
              onClick={closeSettings}
              aria-label="Cerrar configuración de cookies"
            >
              <FaTimes aria-hidden="true" />
            </button>

            <h2 id="cookie-settings-title" className="cookie-settings__title">
              Configuración de Cookies
            </h2>
            <p className="cookie-settings__intro">
              Personaliza tus preferencias de cookies. Las cookies necesarias siempre están habilitadas
              para garantizar el funcionamiento básico del sitio.
            </p>

            <div className="cookie-settings__categories">
              {/* Necessary Cookies */}
              <div className="cookie-category">
                <div className="cookie-category__header">
                  <label className="cookie-category__toggle">
                    <input
                      type="checkbox"
                      checked={preferences.necessary}
                      disabled
                      aria-label="Cookies necesarias (siempre activas)"
                    />
                    <span className="cookie-category__slider cookie-category__slider--disabled"></span>
                  </label>
                  <div className="cookie-category__info">
                    <h3 className="cookie-category__title">Necesarias</h3>
                    <span className="cookie-category__badge">Siempre activas</span>
                  </div>
                </div>
                <p className="cookie-category__description">
                  Estas cookies son esenciales para el funcionamiento del sitio web y no se pueden desactivar.
                  Se utilizan para funciones como navegación, seguridad y acceso a áreas seguras.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="cookie-category">
                <div className="cookie-category__header">
                  <label className="cookie-category__toggle">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={() => togglePreference('analytics')}
                      aria-label="Cookies de análisis"
                    />
                    <span className="cookie-category__slider"></span>
                  </label>
                  <div className="cookie-category__info">
                    <h3 className="cookie-category__title">Análisis</h3>
                  </div>
                </div>
                <p className="cookie-category__description">
                  Estas cookies nos ayudan a entender cómo los visitantes interactúan con el sitio web,
                  recopilando información de forma anónima para mejorar nuestros servicios.
                  (Google Analytics, Google Tag Manager)
                </p>
              </div>

              {/* Marketing Cookies */}
              <div className="cookie-category">
                <div className="cookie-category__header">
                  <label className="cookie-category__toggle">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={() => togglePreference('marketing')}
                      aria-label="Cookies de marketing"
                    />
                    <span className="cookie-category__slider"></span>
                  </label>
                  <div className="cookie-category__info">
                    <h3 className="cookie-category__title">Marketing</h3>
                  </div>
                </div>
                <p className="cookie-category__description">
                  Estas cookies se utilizan para mostrar anuncios relevantes y medir la efectividad
                  de nuestras campañas publicitarias. (Google Ads, Facebook Pixel)
                </p>
              </div>

              {/* Personalization Cookies */}
              <div className="cookie-category">
                <div className="cookie-category__header">
                  <label className="cookie-category__toggle">
                    <input
                      type="checkbox"
                      checked={preferences.personalization}
                      onChange={() => togglePreference('personalization')}
                      aria-label="Cookies de personalización"
                    />
                    <span className="cookie-category__slider"></span>
                  </label>
                  <div className="cookie-category__info">
                    <h3 className="cookie-category__title">Personalización</h3>
                  </div>
                </div>
                <p className="cookie-category__description">
                  Estas cookies permiten que el sitio recuerde tus elecciones (como idioma o región)
                  para proporcionarte una experiencia más personalizada.
                </p>
              </div>
            </div>

            <div className="cookie-settings__actions">
              <button
                className="cookie-settings__button cookie-settings__button--primary"
                onClick={saveCustomPreferences}
                aria-label="Guardar preferencias de cookies"
              >
                Guardar preferencias
              </button>
              <button
                className="cookie-settings__button cookie-settings__button--secondary"
                onClick={acceptAll}
                aria-label="Aceptar todas las cookies"
              >
                Aceptar todo
              </button>
            </div>

            <p className="cookie-settings__footer">
              Para más información, consulta nuestro{' '}
              <Link to="/privacidad" className="cookie-settings__link">
                Aviso de Privacidad
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
