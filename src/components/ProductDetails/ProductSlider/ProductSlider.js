import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from './ProductSlider.module.css';
import Slider from './Slider/Slider';

function ProductSlider({ images, currentIndex, imageChangeHandler, updateIndexHandler }) {

  return (
    <div className={styles.slider}>
      {images.map((img, index) => (
        <Slider
          key={img.id}
          idx={index}
          source={img.imageSm}
          current={index === currentIndex ? true : false}
          imageChangeHandler={imageChangeHandler}
        />
      ))}
      <FontAwesomeIcon icon={faChevronDown} className={`${styles.icon} ${styles.iconDown}`} onClick={() => updateIndexHandler("down")} />
      <FontAwesomeIcon icon={faChevronUp} className={`${styles.icon} ${styles.iconUp}`} onClick={() => updateIndexHandler("up")} />
    </div>
  )
};

export default ProductSlider;
