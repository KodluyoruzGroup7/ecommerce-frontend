import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  faShoppingBasket,
  faShareAlt,
  faHeart as filled,
} from '@fortawesome/free-solid-svg-icons';
import styles from './CardImg.module.css';

const CardImg = ({ name, imgUrl, isWishlist }) => {
  return (
    <div className={styles.card}>
      <img src={imgUrl} alt={name} />
      <div>
        <div className={styles.iconWrapper}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={isWishlist ? filled : faHeart}
            color={isWishlist ? 'red' : 'black'}
            size='lg'
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
