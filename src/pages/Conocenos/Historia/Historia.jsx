import React from 'react';
import { Container } from 'react-bootstrap';
import { SEO, seoConfig } from '../../../components/SEO';
import './Historia.scss';

const Historia = () => {
  return (
    <div className="historia-page">
      <SEO {...seoConfig.historia} />

      {/* Hero Section */}
      <section className="historia-hero">
        <Container>
          <h1 className="historia-hero__title">Historia</h1>
          <div className="historia-hero__description">
            <p>
              Creativos Espacios nació en 2010, impulsada por un grupo de emprendedores apasionados que buscaban
              transformar el sector de la construcción. Desde el primer día, nos comprometimos a crear soluciones
              de construcción más rápidas, con un menor impacto ambiental y un fuerte enfoque en la sostenibilidad.
              Esta visión nos ha guiado durante más de 14 años, en los que hemos colaborado con grandes empresas
              nacionales e internacionales, ofreciendo servicios que van desde la venta, renta y construcción hasta
              transporte, maniobras especializadas, diseño arquitectónico y acabados interiores y exteriores.
            </p>
            <p>
              Desde nuestros inicios, hemos sido parte activa de incubadoras y ferias de emprendimiento, donde
              nuestro proyecto ha sido reconocido por su impacto y valor. En 2010, éramos pioneros en la oferta de
              soluciones integrales en el sector de los contenedores marítimos; hoy, somos un referente consolidado,
              con alianzas estratégicas que abarcan distintas industrias.
            </p>
            <p>
              Nuestro equipo de socios y colaboradores trabaja día a día con un solo propósito: entender y satisfacer
              las necesidades de nuestros clientes, transformando procesos, adoptando nuevas tecnologías y aplicando
              técnicas innovadoras que marcan la diferencia. En Creativos Espacios, nos mantenemos a la vanguardia
              en cada proyecto, llevando la innovación y las mejores prácticas a cada construcción, con el firme
              compromiso de construir un futuro más sustentable para todos.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Historia;
