import React from "react";
import { Link } from "react-router-dom";

import "./appFooter.css";

import { Button, Collapse } from "antd";

import { ShopOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faPinterestP,
} from "@fortawesome/free-brands-svg-icons";

// const { Panel } = Collapse;
// const text = ` A dog is a type of domesticated animal. Known for its loyalty
//             and faithfulness, it can be found as a welcome guest in many
//             households across the world. `;

const AppFooter = () => {
    return (
        <>
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
                        <Link
                            to="/"
                            target="_blank"
                            rel="noopener noreferrer"
                        ></Link>
                        <FontAwesomeIcon
                            icon={faFacebookF}
                            color="black"
                            size="lg"
                        />
                        <Link />

                        <Link
                            to="/"
                            target="_blank"
                            rel="noopener noreferrer"
                        ></Link>
                        <FontAwesomeIcon
                            icon={faTwitter}
                            color="black"
                            size="lg"
                        />
                        <Link />
                        <Link
                            to="/"
                            target="_blank"
                            rel="noopener noreferrer"
                        ></Link>
                        <FontAwesomeIcon
                            icon={faInstagram}
                            color="black"
                            size="lg"
                        />
                        <Link />
                        <Link
                            to="/"
                            target="_blank"
                            rel="noopener noreferrer"
                        ></Link>
                        <FontAwesomeIcon
                            icon={faPinterestP}
                            color="black"
                            size="lg"
                        />
                        <Link />
                    </div>
                </div>
                <div className="info">
                    <h3 className="title-text">INFORMATION</h3>
                    <ul>
                        <li>
                            <Link
                                to="/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                About us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Career
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                My Account
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Orders and Returns
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="quick-shop">
                    <h3 className="title-text">QUICK SHOP</h3>
                    <ul>
                        <li>
                            <Link
                                to="/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Women
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Men
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Accessories
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Shoes
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="services">
                    <h3 className="title-text">CUSTOMER SERVICES</h3>
                    <ul>
                        <li>
                            <Link
                                to="/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Help & FAQs
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Returns Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Terms & Conditions
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Support Center
                            </Link>
                        </li>
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
            <div className="copyright">
                <p>
                    <b>© TRENDBOO 2021</b>
                </p>
                <p>All Rights Reserved.</p>
            </div>

            {/* <Collapse defaultActiveKey={["1"]} ghost>
                <Panel header="This is panel header 1" key="1">
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 2" key="2">
                    <p>{text}</p>
                </Panel>
                <Panel header="This is panel header 3" key="3">
                    <p>{text}</p>
                </Panel>
            </Collapse> */}
        </>
    );
};

export default AppFooter;
