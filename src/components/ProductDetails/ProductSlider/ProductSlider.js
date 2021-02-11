import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from './ProductSlider.module.css';
import Slider from './Slider/Slider';

function ProductSlider({
  images,
  currentIndex,
  imageChangeHandler,
  updateIndexHandler,
}) {
  return (
    <div className={styles.slider}>
      {images.map((img, index) => (
        <Slider
          key={index}
          idx={index}
          source={img}
          current={index === currentIndex ? true : false}
          imageChangeHandler={imageChangeHandler}
        />
      ))}
      <FontAwesomeIcon
        icon={faChevronDown}
        className={`${styles.icon} ${styles.iconDown}`}
        onClick={() => updateIndexHandler('down')}
      />
      <FontAwesomeIcon
        icon={faChevronUp}
        className={`${styles.icon} ${styles.iconUp}`}
        onClick={() => updateIndexHandler('up')}
      />
    </div>
  );
}

ProductSlider.propTypes = {
  images: PropTypes.array.isRequired,
  imageChangeHandler: PropTypes.func.isRequired,
  updateIndexHandler: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,
};

export default ProductSlider;
