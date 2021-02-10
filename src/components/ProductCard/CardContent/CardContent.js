import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../../Typography/Headings/Heading';
import Rating from '../../UI/Rating/Rating';
import styles from './CardContent.module.css';

const CardContent = ({name,price, numOfReviews, ratingValue}) => {
  return (
    <div className={styles.content}>
      <Heading 
        headingFor="item"
        centered
        capitalize
      >
        {name}
      </Heading>
      <span className={styles.price}>{price}</span>
      <Rating numberOfReviews={numOfReviews} value={ratingValue}/>
    </div>
  );
};

CardContent.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  numOfReviews: PropTypes.number.isRequired,
  ratingValue: PropTypes.number.isRequired
}

export default CardContent;
