import React from "react";
import { Link } from "react-router-dom";

import "./productCard.css";

import Rating from "../UI/Rating/Rating";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
    faShoppingBasket,
    faShareAlt,
} from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product }) => {
    return (
        <div className="productcard__container">
            <div className="productcard__top__section">
                <img alt={product.name} src={`${product.img}`} />
                <div className="productcard__top__section__icons">
                    <div className="productcard__top__section__icon__border">
                        <Link
                            to="/"
                        >
                            <FontAwesomeIcon
                                icon={faHeart}
                                color="black"
                                size="lg"
                            />
                        </Link>
                    </div>
                    <div className="productcard__top__section__icon__border">
                        <Link
                            to="/"
                        >
                            <FontAwesomeIcon
                                icon={faShareAlt}
                                color="black"
                                size="lg"
                            />
                        </Link>
                    </div>
                    <div className="productcard__top__section__icon__border">
                        <Link
                            to="/"
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
            <div className="productcard__body__section">
                <p>{`${product.name}`}</p>
                {/* <span>
                            A nice blue shirt for men. One size fit all.
                        </span> */}
            </div>
            <div>
                <div className="rating-section">
                    <div className="stars-rating">
                        <Rating numberOfReviews={product.reviews} value={4.2} />
                    </div>
                    <div className="c-price">
                        <span>{`${product.price} ₺`}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
