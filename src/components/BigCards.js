import React from "react";

import "../styles/BigCards.less";

import card1 from "../images/bigCard1.jpg";
import card2 from "../images/bigCard2.jpg";
import card3 from "../images/bigCard3.jpg";
import card4 from "../images/bigCard4.jpg";

import { Row, Col, Card, Button } from "antd";

const BigCards = () => {
    return (
        <div>
            <Row justify="center" align="top" gutter={[24, 24]}>
                <Col span={10}>
                    <Card
                        hoverable
                        style={{ width: 575 }}
                        cover={<img alt="card1" src={card1} />}
                    ></Card>
                </Col>
                <Col span={10}>
                    <Card
                        hoverable
                        style={{ width: 575 }}
                        cover={<img alt="card2" src={card2} />}
                    ></Card>
                </Col>
                <Col span={10}>
                    <Card
                        hoverable
                        style={{ width: 575 }}
                        cover={<img alt="card3" src={card3} />}
                    ></Card>
                </Col>
                <Col span={10}>
                    <Card
                        hoverable
                        style={{ width: 575 }}
                        cover={<img alt="card4" src={card4} />}
                    ></Card>
                </Col>
            </Row>
        </div>
    );
};

export default BigCards;
