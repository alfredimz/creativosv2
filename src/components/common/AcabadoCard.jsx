import React from 'react';
import PropTypes from 'prop-types';
import './AcabadoCard.scss';

const AcabadoCard = ({ title, description, backgroundImage }) => {
  return (
    <div
      className="acabado-card"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="acabado-card__overlay" />
      <div className="acabado-card__content">
        <h3 className="acabado-card__title">{title}</h3>
        <p className="acabado-card__description">{description}</p>
      </div>
    </div>
  );
};

AcabadoCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired
};

export default AcabadoCard;
