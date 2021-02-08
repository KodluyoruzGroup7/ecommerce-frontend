import React from "react";
import { Link } from "react-router-dom";
import Rating from "../UI/Rating/Rating";

import products from "./productSwiperData";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "./productSwiper.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/zoom/zoom.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
    faShoppingBasket,
    faShareAlt,
} from "@fortawesome/free-solid-svg-icons";

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
                <SwiperSlide>
                    <div className="card__container">
                        <Link>
                            <div className="card__top__section">
                                <img
                                    alt={product.name}
                                    src={`${product.img}`}
                                />
                                <div className="card__top__section__icons">
                                    <div className="card__top__section__icon__border">
                                        <Link
                                            to="/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FontAwesomeIcon
                                                icon={faHeart}
                                                color="black"
                                                size="lg"
                                            />
                                        </Link>
                                    </div>
                                    <div className="card__top__section__icon__border">
                                        <Link
                                            to="/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FontAwesomeIcon
                                                icon={faShareAlt}
                                                color="black"
                                                size="lg"
                                            />
                                        </Link>
                                    </div>
                                    <div className="card__top__section__icon__border">
                                        <Link
                                            to="/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FontAwesomeIcon
                                                icon={faShoppingBasket}
                                                color="black"
                                                size="lg"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className="card__body__section">
                            <p>{`${product.name}`}</p>
                            {/* <span>
                            A nice blue shirt for men. One size fit all.
                        </span> */}
                        </div>
                        <div>
                            <div className="rating-section">
                                <div className="stars-rating">
                                    <Rating />
                                </div>
                                <div className="reviews-text">
                                    <span className="reviews-text">
                                        {`${product.reviews}`} reviews
                                    </span>
                                </div>
                                <div className="c-price">
                                    <span>{`${product.price} ₺`}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ProductSwiper;
