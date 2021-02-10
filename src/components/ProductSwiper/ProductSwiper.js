import React from "react";
import ProductCard from "../ProductCard/ProductCard";

import products from "./productSwiperData";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "./productSwiper.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/zoom/zoom.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ProductSwiper = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={4}
            // slidesPerGroup={3}
            navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            loopFillGroupWithBlank={true}
            zoom={true}
            effect={"slide"}
            keyboard={{ enabled: true }}
            followFinger={"followFinger"}
            allowTouchMove={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 100,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
            }}
        >
            {products.map((product) => (
                <SwiperSlide key={product.id}>
                    <ProductCard product={product} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ProductSwiper;
