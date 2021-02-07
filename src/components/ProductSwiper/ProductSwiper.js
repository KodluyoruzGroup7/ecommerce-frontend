import React from "react";
import { Link } from "react-router-dom";
import Rating from "../UI/Rating/Rating";

import "./productSwiper.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
    faShoppingBasket,
    faShareAlt,
} from "@fortawesome/free-solid-svg-icons";

const ProductSwiper = () => {
    return (
        <div className="card__container">
            <div className="card__top__section">
                <img src="https://raw.githubusercontent.com/TshepoMooka/html-css-and-js/master/shirt-product-card/assets/images/shirt.png" />
                <div className="card__top__section__icons">
                    <div className="card__top__section__icon__border">
                        <Link to="/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon
                                icon={faHeart}
                                color="black"
                                size="lg"
                            />
                        </Link>
                        <Link />
                    </div>
                    <div className="card__top__section__icon__border">
                        <Link to="/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon
                                icon={faShareAlt}
                                color="black"
                                size="lg"
                            />
                        </Link>
                        <Link />
                    </div>
                    <div className="card__top__section__icon__border">
                        <Link to="/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon
                                icon={faShoppingBasket}
                                color="black"
                                size="lg"
                            />
                            <Link />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="card__body__section">
                <p>A BLUE SHIRT</p>
                <span>A nice blue shirt for men. One size fit all.</span>
            </div>
            <div>
                <div className="rating-section">
                    <div className="stars-rating">
                        <Rating />
                    </div>
                    <div className="c-price">
                        <span>159.99</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSwiper;
