/**
 * Google Tag Manager Analytics Utilities
 * Provides helper functions for tracking events through GTM dataLayer
 *
 * GTM Container ID: GTM-M2Z9THQF
 * Google Ads Conversion ID: AW-11471696489
 */

/**
 * Initialize dataLayer if it doesn't exist
 */
export const initializeDataLayer = () => {
  window.dataLayer = window.dataLayer || [];
};

/**
 * Track page views in GTM
 * @param {string} path - Current page path
 * @param {string} title - Page title
 */
export const trackPageView = (path, title) => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'pageview',
      page: {
        path: path,
        title: title,
        url: window.location.href
      }
    });
  }
};

/**
 * Track CTA button clicks
 * @param {string} ctaName - Name/label of the CTA button
 * @param {string} ctaLocation - Where the CTA is located (e.g., 'hero', 'footer')
 * @param {string} ctaUrl - Destination URL if applicable
 */
export const trackCTAClick = (ctaName, ctaLocation, ctaUrl = '') => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'cta_click',
      cta: {
        name: ctaName,
        location: ctaLocation,
        url: ctaUrl
      }
    });
  }
};

/**
 * Track PDF/document downloads
 * @param {string} fileName - Name of the downloaded file
 * @param {string} fileUrl - URL of the file
 * @param {string} fileType - Type of file (pdf, doc, etc.)
 */
export const trackFileDownload = (fileName, fileUrl, fileType = 'pdf') => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'file_download',
      file: {
        name: fileName,
        url: fileUrl,
        type: fileType
      }
    });
  }
};

/**
 * Track phone link clicks
 * @param {string} phoneNumber - Phone number clicked
 * @param {string} location - Where the phone link is located
 */
export const trackPhoneClick = (phoneNumber, location = '') => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'phone_click',
      contact: {
        type: 'phone',
        value: phoneNumber,
        location: location
      }
    });
  }
};

/**
 * Track email link clicks
 * @param {string} email - Email address clicked
 * @param {string} location - Where the email link is located
 */
export const trackEmailClick = (email, location = '') => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'email_click',
      contact: {
        type: 'email',
        value: email,
        location: location
      }
    });
  }
};

/**
 * Track social media link clicks
 * @param {string} platform - Social media platform (facebook, instagram, etc.)
 * @param {string} location - Where the social link is located
 */
export const trackSocialClick = (platform, location = '') => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'social_click',
      social: {
        platform: platform,
        location: location
      }
    });
  }
};

/**
 * Track form submissions (already handled in form components, but available for other uses)
 * @param {string} formName - Name of the form
 * @param {string} formType - Type of form (contact, quote, etc.)
 */
export const trackFormSubmission = (formName, formType) => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'form_submission',
      form: {
        name: formName,
        type: formType
      }
    });
  }
};

/**
 * Track custom events
 * @param {string} eventName - Custom event name
 * @param {object} eventData - Additional event data
 */
export const trackCustomEvent = (eventName, eventData = {}) => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventData
    });
  }
};

/**
 * Track Google Ads conversions (maintains backward compatibility with existing form code)
 * @param {string} conversionLabel - Conversion label from Google Ads
 * @param {number} value - Conversion value
 * @param {string} currency - Currency code (default: MXN)
 */
export const trackConversion = (conversionLabel, value = 1.0, currency = 'MXN') => {
  if (window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': `AW-11471696489/${conversionLabel}`,
      'value': value,
      'currency': currency
    });
  }
};
