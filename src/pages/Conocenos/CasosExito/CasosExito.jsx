import React from 'react';
import { Container } from 'react-bootstrap';
import { SEO, seoConfig } from '../../../components/SEO';
import './CasosExito.scss';

const CasosExito = () => {
  return (
    <div className="casos-exito-page">
      <SEO {...seoConfig.casosExito} />

      {/* Hero Section */}
      <section className="casos-hero">
        <Container>
          <h1 className="casos-hero__title">Casos de Éxito</h1>
          <div className="casos-hero__description">
            <p>
              Cada proyecto es una oportunidad de transformar ideas en realidades que superan expectativas.
              A lo largo de estos años, hemos tenido el privilegio de trabajar junto a empresas y clientes
              visionarios que confían en nuestra capacidad de innovar y en nuestro compromiso por brindar
              soluciones sustentables y de alta calidad.
            </p>
            <p>
              Nuestros casos de éxito son más que logros; son testimonios de nuestra dedicación y pasión por crear
              espacios que marcan una diferencia real. Nos llena de orgullo haber sido parte de proyectos que no
              solo resuelven necesidades inmediatas, sino que también aportan valor duradero a la comunidad y al
              medio ambiente.
            </p>
            <p>
              Seguiremos creciendo, aprendiendo y evolucionando junto a nuestros clientes, impulsados por el deseo de
              construir un futuro más sustentable y significativo para todos.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default CasosExito;
