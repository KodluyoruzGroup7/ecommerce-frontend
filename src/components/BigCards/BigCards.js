import React from 'react';
import { Link } from 'react-router-dom';
import './bigCards.css';

import card1 from '../../images/big-cards/bigCard1.jpg';
import card2 from '../../images/big-cards/bigCard2.jpg';
import card3 from '../../images/big-cards/bigCard3.jpg';
import card4 from '../../images/big-cards/bigCard4.jpg';

import { Card } from 'antd';

const BigCards = () => {
  return (
    <div className='grid-container'>
      <Card
        hoverable
        className='grid-item-l-t'
        cover={<img alt='card1' src={card1} />}
      >
        <Card className='card-text'>
          <h1>WOMEN TOPS</h1>
          <p>From world's top designer</p>
          <Link
            className='card-text-btn'
            to={{
              pathname: '/products',
              search: '?category=Women',
            }}
          >
            DISCOVER NOW
          </Link>
        </Card>
      </Card>

      <Card
        hoverable
        className='grid-item-m-t'
        cover={<img alt='card2' src={card2} />}
      >
        <Card className='card-text'>
          <h1>MEN SHIRTS</h1>
          <p>New collection</p>
          <Link
            className='card-text-btn'
            to={{
              pathname: '/products',
              search: '?category=Men',
            }}
          >
            SHOP NOW
          </Link>
        </Card>
      </Card>

      <Card
        hoverable
        className='grid-item-m-b'
        cover={<img alt='card3' src={card3} />}
      >
        <Card className='card-text'>
          <h1>ACCESSORIES</h1>
          <p>Add finishing touch to your outfit</p>
          <Link
            className='card-text-btn'
            to={{
              pathname: '/products',
              search: '?category=Accessories',
            }}
          >
            SHOP NOW
          </Link>
        </Card>
      </Card>

      <Card
        hoverable
        className='grid-item-l-b'
        cover={<img alt='card4' src={card4} />}
      >
        <Card className='card-text'>
          <h1>DENIM</h1>
          <p>Find your perfect outfit</p>
          <Link
            className='card-text-btn'
            to={{
              pathname: '/products',
              search: '?category=Denim',
            }}
          >
            SHOP NOW
          </Link>
        </Card>
      </Card>
    </div>
  );
};

export default BigCards;
