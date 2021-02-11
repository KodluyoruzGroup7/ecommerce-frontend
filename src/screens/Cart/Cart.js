import React from "react";
import { Link } from "react-router-dom";
import QuantityChanger from "../../components/UI/QuantityChanger/QuantityChanger";
import "./cart.css";

import data from "./cartData";
import { CloseCircleFilled } from "@ant-design/icons";

const Cart = () => {
    return (
        <>
            <h1 className="cart-header">Your Cart</h1>
            <div className="table-container">
                <table class="table">
                    <thead>
                        <tr className="table-header">
                            <th></th>
                            <th colspan="2">PRODUCT</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((product) => (
                            <tr className="table-item">
                                <td>
                                    <Link
                                        to="/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <CloseCircleFilled className="delete-icon" />
                                    </Link>
                                </td>
                                <td>
                                    <Link
                                        to="/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={product.img}
                                            alt={product.name}
                                            height="100px"
                                        />
                                    </Link>
                                </td>
                                <td className="product-text">
                                    <Link
                                        to="/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <p className="product-name">
                                            {product.name}
                                        </p>
                                        <p className="product-size">
                                            Size: {product.size}
                                        </p>
                                        <p className="product-color">
                                            Color: {product.color}
                                        </p>
                                    </Link>
                                </td>
                                <td className="price-text">
                                    {product.price} ₺
                                </td>
                                <td className="quantity-text">
                                    <div className="quantity-changer">
                                        <QuantityChanger />
                                    </div>
                                </td>
                                <td className="total-text">
                                    {product.price} ₺
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td className="total-price-text" colspan="6">
                                <p>Total Price = </p>
                                <p className="price-text-bold">319.98 ₺</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Cart;
