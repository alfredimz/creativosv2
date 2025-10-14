import React from 'react';
import PropTypes from 'prop-types';
import './ServiceFeature.scss';

const ServiceFeature = ({ title, description, backgroundImage, fullWidth = false }) => {
  return (
    <div
      className={`service-feature ${fullWidth ? 'service-feature--full' : ''}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="service-feature__overlay" />
      <div className="service-feature__content">
        <h3 className="service-feature__title">{title}</h3>
        <p className="service-feature__description">{description}</p>
      </div>
    </div>
  );
};

ServiceFeature.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool
};

export default ServiceFeature;
