import React from "react";
import "./Product.css";
import { BackTop } from "antd";

import ProductCard from "../../components/ProductCard/ProductCard";
import products from "./productData";

const Products = () => {
    return (
        <>
            <BackTop />
            <div className="container">
                <div className="collection"></div>
                <div className="product-list">
                    {products.map((product) => (
                        <div className="product-list-item">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Products;
