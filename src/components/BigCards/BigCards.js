import React from "react";

import "./bigCards.css";

import card1 from "../../images/bigCard1.jpg";
import card2 from "../../images/bigCard2.jpg";
import card3 from "../../images/bigCard3.jpg";
import card4 from "../../images/bigCard4.jpg";

import { Card, Button } from "antd";

const BigCards = () => {
    return (
        <div className="grid-container">
            <Card
                hoverable
                className="grid-item-l-t"
                cover={<img alt="card1" src={card1} />}
            >
                <Card className="card-text">
                    <h1>WOMEN TOPS</h1>
                    <p>From world's top designer</p>
                    <Button className="card-text-btn">DISCOVER NOW</Button>
                </Card>
            </Card>

            <Card
                hoverable
                className="grid-item-m-t"
                cover={<img alt="card2" src={card2} />}
            >
                <Card className="card-text">
                    <h1>MEN SHIRTS</h1>
                    <p>New collection</p>
                    <Button className="card-text-btn">SHOP NOW</Button>
                </Card>
            </Card>

            <Card
                hoverable
                className="grid-item-m-b"
                cover={<img alt="card3" src={card3} />}
            >
                <Card className="card-text">
                    <h1>ACCESSORIES</h1>
                    <p>Add finishing touch to your outfit</p>
                    <Button className="card-text-btn">SHOP NOW</Button>
                </Card>
            </Card>

            <Card
                hoverable
                className="grid-item-l-b"
                cover={<img alt="card4" src={card4} />}
            >
                <Card className="card-text">
                    <h1>DENIM</h1>
                    <p>Find your perfect outfit</p>
                    <Button className="card-text-btn">SHOP NOW</Button>
                </Card>
            </Card>
        </div>
    );
};

export default BigCards;
