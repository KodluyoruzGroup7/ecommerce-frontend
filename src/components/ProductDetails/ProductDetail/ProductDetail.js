import React from 'react';
import Ratings from '../../UI/Rating/Rating';
import QuantityChanger from '../../UI/QuantityChanger/QuantityChanger';
import Heading from '../../../Typography/Headings/Heading';
import styles from './ProductDetail.module.css';
import {
  faPaperPlane,
  faHeart,
  faEnvelope,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ColorBox from './ColorBox/ColorBox';
import SizeBox from './SizeBox/SizeBox';

function ProductDetail({ product }) {
  return (
    <div className={styles.detail}>
      <Heading headingFor='product' capitalize>
        {product.name}
      </Heading>
      <div className={styles.productStatus}>
        <Ratings
          value={product.rating}
          numberOfReviews={product.reviews.length}
        />
        <span className={product.quantity ? styles.inStock : styles.outStock}>
          {product.stockStatus}
        </span>
        <span className={styles.productId}>SKU: KG7-EB-84</span>
      </div>
      <span className={styles.price}>${product.price}</span>
      <span className={styles.tax}>Tax included.</span>
      <div className={styles.quantityMessage}>
        Hurry, Only {product.quantity} Left!
      </div>
      <div className={styles.colors}>
        <h3>
          COLOR:{' '}
          <span className={styles.selectedColor}>{product.color[0]}</span>
        </h3>
        <div className={styles.colorOptions}>
          {product.color.map((c) => (
            <ColorBox color={c} />
          ))}
        </div>
      </div>
      <div className={styles.sizeContainer}>
        <h3>
          SIZE: <span className={styles.selectedColor}>{product.size[0]}</span>
        </h3>
        <div className={styles.colorOptions}>
          {product.size.map((s) => (
            <SizeBox size={s} />
          ))}
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
        <QuantityChanger />
        <button>Add to Card</button>
      </div>
    </div>
  );
}

export default ProductDetail;
