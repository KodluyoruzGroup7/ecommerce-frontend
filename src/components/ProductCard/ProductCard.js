import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CardContent from './CardContent/CardContent';
import CardImg from './CardImg/CardImg';
import styles from './productCard.module.css';
import CartContext from '../../contexts/CartContext';
import WishlistContext from '../../contexts/WishlistContext';
const ProductCard = ({ product }) => {
  const { addCartItemHandler } = useContext(CartContext);
  const { wishlist, removeWishListItem, addWishListItem } = useContext(
    WishlistContext,
  );

  const addCartHandler = (product) => {
    addCartItemHandler(product);
  };

  const addWishListHandler = (id) => {
    addWishListItem(id);
  };

  const removeWhisListHandler = (id) => {
    removeWishListItem(id);
  };

  return (
    <div className={styles.wrapper}>
      <CardImg
        pid={product.id}
        isInWishList={wishlist.find((item) => item.id === product.id)}
        name={product.name}
        imgUrl={product.imgMain}
        addWishListHandler={addWishListHandler}
        removeWhisListHandler={removeWhisListHandler}
        addCartHandler={addCartHandler}
      />
      <Link to={`/product/${product.id}`} className={styles.anchor}>
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
