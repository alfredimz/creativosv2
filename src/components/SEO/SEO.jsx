import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SEO Component - Based on production creativosespacios.mx
 * Provides comprehensive meta tags, Open Graph, Twitter Card, and structured data
 */
const SEO = ({
  title = 'Creativos Espacios',
  description = 'Venta, renta y modificación de contenedores marítimos en oficinas, casas, sanitarios, bodegas, comedores, negocios, comercios, dormitorios, fast food, piscinas',
  keywords = 'Venta de contenedores marítimos, renta de contenedores marítimos, modificación de contenedores marítimos',
  canonical = 'https://www.creativosespacios.mx',
  ogImage = 'https://www.creativosespacios.mx/creativos-images/creativos-espacios.png',
  ogType = 'website',
  structuredData = null,
}) => {
  const fullTitle = title.includes('Creativos Espacios') ? title : `${title} | Creativos Espacios`;
  const ogUrl = canonical;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang="es-MX" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      {/* Title */}
      <title>{fullTitle}</title>

      {/* SEO Meta Tags */}
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="all, index, follow" />
      <meta name="googlebot" content="all, index,follow" />
      <meta name="author" content="https://aptery.net/" />
      <meta name="rating" content="General" />
      <meta name="subject" content="Creativos Espacios" />
      <meta name="distribution" content="Global" />
      <meta name="copyright" content="https://www.creativosespacios.mx" />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:description" content={description} />
      <meta property="og:determiner" content="auto" />
      <meta property="og:locale" content="es_MX" />
      <meta property="og:locale:alternate" content="es_MX" />
      <meta property="og:site_name" content="Creativos Espacios" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@creaespaciosmx" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:creator" content="Surftware" />
      <meta name="twitter:url" content={ogUrl} />
      <meta name="twitter:image" content={ogImage} />

      {/* Links */}
      <link rel="canonical" href={canonical} />
      <link rel="alternate" href={canonical} hrefLang="es-mx" />
      <link rel="dns-prefetch" href="https://www.creativosespacios.mx" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
