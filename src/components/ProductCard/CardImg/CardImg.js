import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  faShoppingBasket,
  faShareAlt,
  faHeart as filled,
} from '@fortawesome/free-solid-svg-icons';
import styles from './CardImg.module.css';

const CardImg = ({
  pid,
  name,
  imgUrl,
  addWishListHandler,
  isInWishList,
  removeWhisListHandler,
  addCartHandler,
}) => {
  const clickHandler = () => {
    isInWishList ? removeWhisListHandler(pid) : addWishListHandler(pid);
  };

  const cartHandler = () => {
    addCartHandler({
      id: pid,
      qty: 1,
    });
  };

  return (
    <div className={styles.card}>
      <Link to={`/product/${pid}`} className={styles.anchor}>
        <img src={imgUrl} alt={name} />
      </Link>
      <div>
        <div className={styles.iconWrapper}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={isInWishList ? filled : faHeart}
            color={isInWishList ? 'red' : 'black'}
            size='lg'
            onClick={clickHandler}
          />
        </div>
        <div className={styles.iconWrapper}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faShareAlt}
            color='black'
            size='lg'
          />
        </div>
        <div className={styles.iconWrapper}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faShoppingBasket}
            color='black'
            size='lg'
            onClick={cartHandler}
          />
        </div>
      </div>
    </div>
  );
};

CardImg.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default CardImg;
