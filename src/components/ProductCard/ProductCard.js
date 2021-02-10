import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CardContent from './CardContent/CardContent';
import CardImg from './CardImg/CardImg';
import styles from './productCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.wrapper}>
      <Link to='/details' className={styles.anchor}>
        <CardImg name={product.name} imgUrl={product.img} />
        <CardContent
          name={product.name}
          price={product.price}
          numOfReviews={product.reviews}
          ratingValue={4.2}
        />
      </Link>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
