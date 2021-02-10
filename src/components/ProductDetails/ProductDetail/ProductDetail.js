import React from 'react';
import Ratings from '../../UI/Rating/Rating';
import {
  faPaperPlane,
  faHeart,
  faEnvelope,
} from '@fortawesome/free-regular-svg-icons';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import styles from './ProductDetail.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ProductDetail() {
  return (
    <div className={styles.detail}>
      <h2 className={styles.productTitle}>Martha Knit Top</h2>
      <div className={styles.productStatus}>
        <Ratings value={3} numberOfReviews={9} />
        <span className={styles.productStock}>In Stock</span>
        <span className={styles.productId}>SKU: KG7-EB-84</span>
      </div>
      <span className={styles.price}>$300.00</span>
      <span className={styles.tax}>Tax included.</span>
      <div className={styles.quantityMessage}>Hurry, Only 4 Left!</div>
      <div className={styles.colors}>
        <h3>
          COLOR: <span className={styles.selectedColor}>GREEN</span>
        </h3>
        <div className={styles.colorOptions}>
          <div className={[styles.colorBox, styles.active].join(' ')}></div>
          <div className={styles.colorBox}></div>
          <div className={styles.colorBox}></div>
          <div className={styles.colorBox}></div>
          <div className={styles.colorBox}></div>
        </div>
      </div>
      <div className={styles.sizeContainer}>
        <h3>
          SIZE: <span className={styles.selectedColor}>S</span>
        </h3>
        <div className={styles.colorOptions}>
          <div className={[styles.sizeBox, styles.active].join(' ')}>S</div>
          <div className={styles.sizeBox}>M</div>
          <div className={styles.sizeBox}>XL</div>
        </div>
      </div>
      <div className={styles.icons}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faHeart} className={styles.fontawesome} />
          Add to whislist
        </div>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faPaperPlane} className={styles.fontawesome} />
          Delivery &amp; Returns
        </div>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.fontawesome} />
          Enquiry
        </div>
      </div>
      <div className={styles.actionContainer}>
        <div className={styles.quantityField}>
          <FontAwesomeIcon icon={faMinus} className={styles.qtyBtn} />
          <span className={styles.qty}>1</span>
          <FontAwesomeIcon icon={faPlus} className={styles.qtyBtn} />
        </div>
        <button>Add to Card</button>
      </div>
    </div>
  );
}

export default ProductDetail;
