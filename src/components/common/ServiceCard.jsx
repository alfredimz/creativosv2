import React from 'react';
import PropTypes from 'prop-types';
import figure1 from '../../assets/figure-1.svg';
import figure2 from '../../assets/figure-2.svg';
import figure3 from '../../assets/figure-3.svg';
import './ServiceCard.scss';

const ServiceCard = ({
  title,
  subtitle,
  description,
  image,
  icon,
  variant = 'default',
  link
}) => {
  const handleClick = () => {
    if (link) {
      window.location.href = link;
    }
  };

  // Determinar qué figura de fondo usar según la variante
  const getFigureSvg = () => {
    switch(variant) {
      case 'renta':
        return figure1;
      case 'venta':
        return figure2;
      case 'construccion':
        return figure3;
      default:
        return null;
    }
  };

  const figureSvg = getFigureSvg();

  return (
    <div className={`service-card service-card--${variant}`} onClick={handleClick}>
      {/* Header arriba para todas excepto venta */}
      {variant !== 'venta' && (
        <div className="service-card__header">
          <h2 className="service-card__title">{title}</h2>
          {subtitle && (
            <p className="service-card__subtitle">{subtitle}</p>
          )}
        </div>
      )}

      <div className="service-card__image-wrapper">
        {/* SVG de fondo decorativo */}
        {figureSvg && (
          <img
            src={figureSvg}
            alt=""
            className="service-card__figure"
            aria-hidden="true"
          />
        )}

        <img
          src={image}
          alt={title}
          className="service-card__image"
          loading="lazy"
        />
      </div>

      {/* Header abajo solo para venta */}
      {variant === 'venta' && (
        <div className="service-card__header">
          <h2 className="service-card__title">{title}</h2>
          {subtitle && (
            <p className="service-card__subtitle">{subtitle}</p>
          )}
        </div>
      )}

      {description && (
        <p className="service-card__description">{description}</p>
      )}

      {icon && (
        <div className="service-card__icon">
          {icon}
        </div>
      )}
    </div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  icon: PropTypes.node,
  variant: PropTypes.oneOf(['renta', 'venta', 'construccion', 'default']),
  link: PropTypes.string
};

export default ServiceCard;
