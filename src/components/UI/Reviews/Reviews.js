import React from 'react';
import Rating from '../Rating/Rating';
import styles from './Reviews.module.css';

const Reviews = ({ review }) => {
  return (
    <div className={styles.review}>
      <div className={styles.content}>
        <Rating value={review.rating} hideText />
        <h2>{review.title}</h2>
        <small>{review.date}</small>
        <p>{review.content}</p>
      </div>
      <div className={styles.report}>Report as Inappropriate</div>
    </div>
  );
};

export default Reviews;
