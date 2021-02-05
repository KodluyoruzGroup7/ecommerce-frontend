import React from "react";

import "./appFooter.css";

import { ShopOutlined } from "@ant-design/icons";

const AppFooter = () => {
    return (
        <div className="footer-grid-container">
            <div className="summary">
                <div className="summary-logo">
                    <ShopOutlined />
                    TRENDBOO
                </div>
            </div>
            <div className="info">
                <h3 className="title-text">INFORMATION</h3>
            </div>
            <div className="quick-shop">
                <h3 className="title-text">QUICK SHOP</h3>
            </div>
            <div className="services">
                <h3 className="title-text">CUSTOMER SERVICES</h3>
            </div>
            <div className="newsletter">
                <h3 className="title-text">NEWSLETTER</h3>
            </div>
        </div>
    );
};

export default AppFooter;
