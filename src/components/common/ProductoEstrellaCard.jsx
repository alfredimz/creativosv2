import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { trackCTAClick } from '../../utils/analytics';
import './ProductoEstrellaCard.scss';

const ProductoEstrellaCard = ({
  title,
  description,
  image,
  link,
  variant = 'default'
}) => {
  const handleClick = () => {
    trackCTAClick(title, 'productos-estrella', link);
  };

  return (
    <Card className={`producto-estrella-card producto-estrella-card--${variant}`}>
      <div className="producto-estrella-card__image-wrapper">
        <Card.Img
          variant="top"
          src={image}
          alt={title}
          className="producto-estrella-card__image"
        />
        <div className="producto-estrella-card__overlay" />
      </div>
      <Card.Body className="producto-estrella-card__body">
        <Card.Title className="producto-estrella-card__title">
          {title}
        </Card.Title>
        <Card.Text className="producto-estrella-card__description">
          {description}
        </Card.Text>
        <Button
          as={Link}
          to={link}
          variant="primary"
          className="producto-estrella-card__cta"
          onClick={handleClick}
        >
          Ver más <FaArrowRight className="ms-2" />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductoEstrellaCard;
