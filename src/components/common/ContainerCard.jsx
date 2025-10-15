import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './ContainerCard.scss';

const ContainerCard = ({ id, title, image, backgroundColor, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <div
      className="container-card"
      style={{ backgroundColor }}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && handleClick()}
    >
      <div className="container-card__image-wrapper">
        <img
          src={image}
          alt={title}
          className="container-card__image"
          loading="lazy"
        />
      </div>
      <div className="container-card__footer">
        <h3 className="container-card__title">{title}</h3>
        <button
          className="container-card__button"
          onClick={(e) => {
            e.stopPropagation();
            handleClick();
          }}
          aria-label={`Ver detalles de ${title}`}
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

ContainerCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  link: PropTypes.string
};

ContainerCard.defaultProps = {
  backgroundColor: '#65bdd8'
};

export default ContainerCard;
