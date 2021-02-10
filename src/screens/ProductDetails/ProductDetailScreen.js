import React, { useState } from 'react';
import styles from './ProductDetailScreen.module.css';
import ProductImageZoomer from '../../components/ProductDetails/ProductImageZoomer/ProductImageZoomer';
import ProductSlider from '../../components/ProductDetails/ProductSlider/ProductSlider';
import ProductDetail from '../../components/ProductDetails/ProductDetail/ProductDetail';
import shoes1Sm from '../../images/shoes/shoes-1-sm.jpg';
import shoes1Xl from '../../images/shoes/shoes-1-xl.jpg';
import shoes2Sm from '../../images/shoes/shoes-2-sm.webp';
import shoes2Xl from '../../images/shoes/shoes-2-xl.webp';
import shoes3Sm from '../../images/shoes/shoes-3-sm.webp';
import shoes3Xl from '../../images/shoes/shoes-3-xl.webp';
import ProductDetailTabs from '../../components/ProductDetails/ProductDetailTabs/ProductDetailTabs';
import ProductSwiper from '../../components/ProductSwiper/ProductSwiper';

const images = [
  {
    id: 1,
    imageSm: shoes1Sm,
    imageXl: shoes1Xl,
  },
  {
    id: 2,
    imageSm: shoes2Sm,
    imageXl: shoes2Xl,
  },
  {
    id: 3,
    imageSm: shoes3Sm,
    imageXl: shoes3Xl,
  },
  {
    id: 4,
    imageSm: shoes1Sm,
    imageXl: shoes1Xl,
  },
  {
    id: 5,
    imageSm: shoes2Sm,
    imageXl: shoes2Xl,
  },
  {
    id: 6,
    imageSm: shoes3Sm,
    imageXl: shoes3Xl,
  },
  {
    id: 7,
    imageSm: shoes1Sm,
    imageXl: shoes1Xl,
  },
  {
    id: 8,
    imageSm: shoes2Sm,
    imageXl: shoes2Xl,
  },
  {
    id: 9,
    imageSm: shoes3Sm,
    imageXl: shoes3Xl,
  },
];

const ProductDetailScreen = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageChangeHandler = (index) => {
    setCurrentImage(images[index]);
    setCurrentIndex(index);
  };

  const updateIndexHandler = (type) => {
    if (type === 'down') {
      if (currentIndex + 1 < images.length) {
        setCurrentIndex(currentIndex + 1);
        imageChangeHandler(currentIndex + 1);
      }
    } else {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
        imageChangeHandler(currentIndex - 1);
      }
    }
  };
  return (
    <section className={styles.wrapper}>
      <div className={styles.productInfo}>
        <ProductSlider
          images={images}
          currentImage={currentImage}
          currentIndex={currentIndex}
          imageChangeHandler={imageChangeHandler}
          updateIndexHandler={updateIndexHandler}
        />
        <ProductImageZoomer currentImage={currentImage} />
        <ProductDetail />
      </div>
      <ProductDetailTabs />
      <ProductSwiper />
    </section>
  );
};

export default ProductDetailScreen;
