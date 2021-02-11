import React, { useState } from 'react';
import styles from './ColorBox.module.css';

const ColorBox = ({ color }) => {
  return (
    <div
      className={`${styles.colorBox}`}
      style={{ backgroundColor: color.toLowerCase() }}
    ></div>
  );
};

export default ColorBox;
