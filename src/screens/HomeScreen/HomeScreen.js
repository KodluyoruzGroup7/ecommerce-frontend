import React, { useEffect, useState } from 'react';
import MainCarousel from '../../components/MainCarousel/MainCarousel';
import Banner from '../../components/Banner/Banner';
import ProductSwiper from '../../components/ProductSwiper/ProductSwiper';
import BigCards from '../../components/BigCards/BigCards';
import { BackTop } from 'antd';
import { getProductsRandomly } from '../../services';
function HomeScreen() {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    const swiperProducts = getProductsRandomly();
    setRandomProducts(swiperProducts);
  }, []);

  return (
    <>
      <BackTop />
      <MainCarousel />
      <Banner />
      <BigCards />
      <ProductSwiper products={randomProducts} />
    </>
  );
}

export default HomeScreen;
