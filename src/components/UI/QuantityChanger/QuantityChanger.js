import React from "react";
import styles from "./QuantityChanger.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const QuantityChanger = () => {
    return (
        <div className={styles.quantityField}>
            <FontAwesomeIcon icon={faMinus} className={styles.qtyBtn} />
            <span className={styles.qty}>1</span>
            <FontAwesomeIcon icon={faPlus} className={styles.qtyBtn} />
        </div>
    );
};

export default QuantityChanger;
