import React from 'react';
import Rating from '../Rating/Rating';
import styles from './Reviews.module.css';

const Reviews = () => {
  return (
      <div className={styles.review}>
        <div className={styles.content}>
          <Rating value={5} />
          <h2>Testing</h2>
          <small>Code on 2021</small>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, fugiat.</p>
        </div>
        <div className={styles.report}>
          Report as Inappropriate
        </div>
      </div>
  );
};

export default Reviews;
