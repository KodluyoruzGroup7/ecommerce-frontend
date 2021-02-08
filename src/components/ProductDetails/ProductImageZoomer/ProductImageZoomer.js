import React, { useState } from 'react';
import styles from './ProductImageZoomer.module.css';

function ProductImageZoomer({ currentImage }) {

  const [bgPosition, setBgPosition] = useState("center");

  const mouseMoveHandler = (e) => {
    let width = e.target.offsetWidth;
    let height = e.target.offsetHeight;
    let mouseX = e.nativeEvent.offsetX;
    let mouseY = e.nativeEvent.offsetY;
    const bgPosX = ((mouseX / width) * 100);
    const bgPosY = ((mouseY / height) * 100);
    setBgPosition(`${bgPosX}% ${bgPosY}%`);

  };

  const mouseLeaveHandler = (e) => {
    setBgPosition("center");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.image} style={{
        backgroundImage: `url(${currentImage.imageXl})`, backgroundPosition: `${bgPosition}`
      }} onMouseMove={mouseMoveHandler} onMouseLeave={mouseLeaveHandler}></div>
    </div>
  )
}

export default ProductImageZoomer;
