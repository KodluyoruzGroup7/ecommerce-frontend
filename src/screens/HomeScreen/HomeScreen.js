import React from "react";
import MainCarousel from "../../components/MainCarousel/MainCarousel";
import Banner from "../../components/Banner/Banner";
import ProductSwiper from "../../components/ProductSwiper/ProductSwiper";
import BigCards from "../../components/BigCards/BigCards";
import { BackTop } from "antd";

function HomeScreen() {
    return (
        <>
            <BackTop />
            <MainCarousel />
            <Banner />
            <BigCards />
            <ProductSwiper />
        </>
    );
}

export default HomeScreen;
