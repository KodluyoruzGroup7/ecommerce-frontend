import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductDetailScreen.module.css';
import ProductImageZoomer from '../../components/ProductDetails/ProductImageZoomer/ProductImageZoomer';
import ProductSlider from '../../components/ProductDetails/ProductSlider/ProductSlider';
import ProductDetail from '../../components/ProductDetails/ProductDetail/ProductDetail';
import ProductDetailTabs from '../../components/ProductDetails/ProductDetailTabs/ProductDetailTabs';
import ProductSwiper from '../../components/ProductSwiper/ProductSwiper';
import { getProductById, getProductsRandomly } from '../../services';

const ProductDetailScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [randomProducts, setRandomProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [currentImage, setCurrentImage] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const product = getProductById(+id);
    setProduct(product);
    setCurrentImage(product.images.showcase[0]);
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    const swiperProducts = getProductsRandomly();
    setRandomProducts(swiperProducts);
  }, []);

  const imageChangeHandler = (index) => {
    setCurrentImage(product.images.showcase[index]);
    setCurrentIndex(index);
  };

  const updateIndexHandler = (type) => {
    if (type === 'down') {
      if (currentIndex + 1 < product.images.length) {
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

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.productInfo}>
        <ProductSlider
          images={product.images.showcase}
          currentImage={currentImage}
          currentIndex={currentIndex}
          imageChangeHandler={imageChangeHandler}
          updateIndexHandler={updateIndexHandler}
        />
        <ProductImageZoomer currentImage={currentImage} />
        <ProductDetail />
      </div>
      <ProductDetailTabs />
      <ProductSwiper products={randomProducts} />
    </section>
  );
};

export default ProductDetailScreen;
