import React from 'react';
import PropTypes from 'prop-types';
import styles from './QuantityChanger.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const QuantityChanger = ({ quantity, increment, decrement }) => {
  return (
    <div className={styles.quantityField}>
      <FontAwesomeIcon
        icon={faMinus}
        className={styles.qtyBtn}
        onClick={decrement}
      />
      <span className={styles.qty}>{quantity}</span>
      <FontAwesomeIcon
        icon={faPlus}
        className={styles.qtyBtn}
        onClick={increment}
      />
    </div>
  );
};

QuantityChanger.propTypes = {
  quantity: PropTypes.number,
};

QuantityChanger.defaultProps = {
  quantity: 1,
};

export default QuantityChanger;
