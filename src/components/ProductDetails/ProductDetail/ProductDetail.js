import React, { useContext, useState } from 'react';
import Ratings from '../../UI/Rating/Rating';
import QuantityChanger from '../../UI/QuantityChanger/QuantityChanger';
import Heading from '../../../Typography/Headings/Heading';
import styles from './ProductDetail.module.css';
import {
  faPaperPlane,
  faHeart,
  faEnvelope,
} from '@fortawesome/free-regular-svg-icons';
import { faHeart as filled } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ColorBox from './ColorBox/ColorBox';
import SizeBox from './SizeBox/SizeBox';
import WishListContext from '../../../contexts/WishlistContext';
import CartContext from '../../../contexts/CartContext';

function ProductDetail({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { wishlist, addWishListItem, removeWishListItem } = useContext(
    WishListContext,
  );
  const { addCartItemHandler, cartItems } = useContext(CartContext);

  const isInWishList = wishlist.find((item) => item.id === product.id);
  const isInCart = cartItems.find((item) => item.id === product.id);

  const clickHandler = () => {
    isInWishList ? removeWishListItem(product.id) : addWishListItem(product.id);
  };

  const addToCart = () => {
    addCartItemHandler({
      id: product.id,
      qty: quantity,
    });
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className={styles.detail}>
      <Heading headingFor='product' capitalize>
        {product.name}
      </Heading>
      <div className={styles.productStatus}>
        <Ratings
          value={product.rating}
          numberOfReviews={product.reviews.length}
        />
        <span className={product.quantity ? styles.inStock : styles.outStock}>
          {product.stockStatus}
        </span>
        <span className={styles.productId}>SKU: KG7-EB-84</span>
      </div>
      <span className={styles.price}>${product.price}</span>
      <span className={styles.tax}>Tax included.</span>
      <div className={styles.quantityMessage}>
        Hurry, Only {product.quantity} Left!
      </div>
      <div className={styles.colors}>
        <h3>
          COLOR:{' '}
          <span className={styles.selectedColor}>{product.color[0]}</span>
        </h3>
        <div className={styles.colorOptions}>
          {product.color.map((c) => (
            <ColorBox key={c} color={c} />
          ))}
        </div>
      </div>
      <div className={styles.sizeContainer}>
        <h3>
          SIZE: <span className={styles.selectedColor}>{product.size[0]}</span>
        </h3>
        <div className={styles.colorOptions}>
          {product.size.map((s) => (
            <SizeBox key={s} size={s} />
          ))}
        </div>
      </div>
      <div className={styles.icons}>
        <div className={styles.icon}>
          <FontAwesomeIcon
            icon={isInWishList ? filled : faHeart}
            color={isInWishList ? 'red' : 'black'}
            className={styles.fontawesome}
            onClick={clickHandler}
          />
          Add to whislist
        </div>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faPaperPlane} className={styles.fontawesome} />
          Delivery &amp; Returns
        </div>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.fontawesome} />
          Enquiry
        </div>
      </div>
      <div className={styles.actionContainer}>
        <QuantityChanger
          increment={increaseQuantity}
          decrement={decreaseQuantity}
          quantity={quantity}
        />
        <button onClick={addToCart} disabled={isInCart}>
          Add to Card
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
