import React from "react";

import "../styles/BigCards.less";
import "./bigcard.css";
import card1 from "../images/bigCard1.jpg";
import card2 from "../images/bigCard2.jpg";
import card3 from "../images/bigCard3.jpg";
import card4 from "../images/bigCard4.jpg";

import { Row, Col, Card, Button } from "antd";

const BigCards = () => {
    return (
        <div className="grid-container">
            <Card
                hoverable
                className="grid-item-l-t"
                cover={<img alt="card1" src={card1} />}
                style={{ position: "relative" }}
            >
                <Card style={{ position: "absolute", width: "50%", bottom: "5%", left: "50%", transform: "translateX(-50%)", zIndex: "2" }}>
                    <h1>Women Tops</h1>
                    <p>From worlds top desi</p>
                    <Button>Discover Now</Button>
                </Card>
            </Card>

            <Card
                hoverable
                className="grid-item-m-t"
                cover={<img alt="card2" src={card2} />}
            ></Card>

            <Card
                hoverable
                className="grid-item-m-b"
                cover={<img alt="card3" src={card3} />}
            ></Card>

            <Card
                hoverable
                className="grid-item-l-b"
                cover={<img alt="card4" src={card4} />}
            ></Card>
        </div>
    );
};

export default BigCards;
