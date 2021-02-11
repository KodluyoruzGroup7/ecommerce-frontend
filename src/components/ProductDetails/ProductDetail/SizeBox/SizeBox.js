import React from 'react';
import styles from './SizeBox.module.css';

const SizeBox = ({ size }) => {
  return <div className={styles.sizeBox}>{size}</div>;
};

export default SizeBox;
