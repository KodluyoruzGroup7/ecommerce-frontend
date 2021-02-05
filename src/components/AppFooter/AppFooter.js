import React from "react";

import "./appFooter.css";

import { ShopOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faPinterestP,
} from "@fortawesome/free-brands-svg-icons";

const AppFooter = () => {
    return (
        <div className="footer-grid-container">
            <div className="summary">
                <div className="summary-logo">
                    <ShopOutlined />
                    TRENDBOO
                </div>
                <p>Istanbul, Turkey / 34000</p>
                <p>
                    <b>Phone:</b> (0212) 987 65 43
                </p>
                <p>
                    <b>Email:</b> info@shopboo.com
                </p>
                <div className="social-logos">
                    <a href="">
                        <FontAwesomeIcon
                            icon={faFacebookF}
                            color="black"
                            size="lg"
                        />
                    </a>

                    <a href="">
                        <FontAwesomeIcon
                            icon={faTwitter}
                            color="black"
                            size="lg"
                        />
                    </a>
                    <a href="">
                        <FontAwesomeIcon
                            icon={faInstagram}
                            color="black"
                            size="lg"
                        />
                    </a>
                    <a href="">
                        <FontAwesomeIcon
                            icon={faPinterestP}
                            color="black"
                            size="lg"
                        />
                    </a>
                </div>
            </div>
            <div className="info">
                <h3 className="title-text">INFORMATION</h3>
                <ul>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Career</li>
                    <li>My Account</li>
                    <li>Orders and Returns</li>
                </ul>
            </div>
            <div className="quick-shop">
                <h3 className="title-text">QUICK SHOP</h3>
                <ul>
                    <li>Women</li>
                    <li>Men</li>
                    <li>Accessories</li>
                    <li>Shoes</li>
                </ul>
            </div>
            <div className="services">
                <h3 className="title-text">CUSTOMER SERVICES</h3>
                <ul>
                    <li>Help & FAQs</li>
                    <li>Returns Policy</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Support Center</li>
                </ul>
            </div>
            <div className="newsletter">
                <h3 className="title-text">NEWSLETTER</h3>
                <p>
                    Enter your email to receive daily news and get 20% off
                    coupon for all items.
                </p>
                <input type="text" placeholder="Email adress" />
                <Button className="subscribe">SUBSCRIBE</Button>
            </div>
        </div>
    );
};

export default AppFooter;
