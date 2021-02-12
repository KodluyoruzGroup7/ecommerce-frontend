import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';
import styles from './Rating.module.css';

function Rating({ value, color, numberOfReviews, hideText }) {
  let text = 'No reviews';

  if (numberOfReviews > 0) {
    text = `${numberOfReviews} reviews`;
  }

  return (
    <div>
      <FontAwesomeIcon
        color={color}
        icon={value >= 1 ? faStar : value >= 0.5 ? faStarHalfAlt : regularStar}
      />
      <FontAwesomeIcon
        color={color}
        icon={value >= 2 ? faStar : value >= 1.5 ? faStarHalfAlt : regularStar}
      />
      <FontAwesomeIcon
        color={color}
        icon={value >= 3 ? faStar : value >= 2.5 ? faStarHalfAlt : regularStar}
      />
      <FontAwesomeIcon
        color={color}
        icon={value >= 4 ? faStar : value >= 3.5 ? faStarHalfAlt : regularStar}
      />
      <FontAwesomeIcon
        color={color}
        icon={value >= 5 ? faStar : value >= 4.5 ? faStarHalfAlt : regularStar}
      />
      {!hideText && <span className={styles.text}>{text}</span>}
    </div>
  );
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  numberOfReviews: PropTypes.number,
  color: PropTypes.string,
  hideText: PropTypes.bool,
};

Rating.defaultProps = {
  color: '#ffb503',
  numberOfReviews: 0,
  hideText: false,
};

export default Rating;
