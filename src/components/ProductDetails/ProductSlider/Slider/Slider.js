import React from 'react';
import styles from './Slider.module.css';

function Slider({ idx, source, current, imageChangeHandler }) {
  return (
    <img
      className={`${styles.img} ${current && styles.current}`}
      src={source}
      alt='a black shoe'
      onClick={() => imageChangeHandler(idx)}
    />
  );
}

export default Slider;
