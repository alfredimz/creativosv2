import React from 'react';
import PropTypes from 'prop-types';
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

  return (
    <div className={`service-card service-card--${variant}`} onClick={handleClick}>
      <div className="service-card__header">
        <h2 className="service-card__title">{title}</h2>
        {subtitle && (
          <p className="service-card__subtitle">{subtitle}</p>
        )}
      </div>

      <div className="service-card__image-wrapper">
        <img
          src={image}
          alt={title}
          className="service-card__image"
        />
      </div>

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
