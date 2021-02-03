import React from "react";

import "../styles/MainCarousel.less";

import { Carousel } from "antd";
import { Button } from "antd";

import banner1 from "../images/crsl01.jpg";
import banner2 from "../images/crsl02.jpg";

const contentStyle = {
    width: "100%",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
};

function MainCarousel() {
    return (
        <div>
            <Carousel effect="fade" autoplay="true">
                <div>
                    <img src={banner1} alt="banner1" style={contentStyle} />
                </div>
                <div>
                    <img src={banner2} alt="banner2" style={contentStyle} />
                </div>
            </Carousel>
            <div className="carousel-text">
                <h1>It's your time to be Icon</h1>
                <h3>Check all trending products</h3>
                <Button className="carousel-button">SHOP NOW</Button>
            </div>
        </div>
    );
}

export default MainCarousel;
