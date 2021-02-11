import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CardContent from './CardContent/CardContent';
import CardImg from './CardImg/CardImg';
import styles from './productCard.module.css';

const ProductCard = ({ product, isWishlist }) => {
  return (
    <div className={styles.wrapper}>
      <Link to={`/product/${product.id}`} className={styles.anchor}>
        <CardImg
          name={product.name}
          imgUrl={product.imgMain}
          isWishlist={isWishlist}
        />
        <CardContent
          name={product.name}
          price={product.price}
          numOfReviews={product.reviews.length}
          ratingValue={product.rating}
        />
      </Link>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
