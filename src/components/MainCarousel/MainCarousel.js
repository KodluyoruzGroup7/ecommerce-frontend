import React from 'react';
import { Link } from 'react-router-dom';
import './mainCarousel.css';
import { Carousel, Button } from 'antd';
import banner1 from '../../images/carousel/crsl01.jpg';
import banner2 from '../../images/carousel/crsl02.jpg';

const contentStyle = {
  width: '100%',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

function MainCarousel() {
  return (
    <div style={{ position: 'relative' }}>
      <Carousel effect='fade' autoplay='true'>
        <div>
          <img src={banner1} alt='banner1' style={contentStyle} />
        </div>
        <div>
          <img src={banner2} alt='banner2' style={contentStyle} />
        </div>
      </Carousel>
      <div className='carousel-text'>
        <h1>It's your time to be Icon</h1>
        <p>Check all trending products</p>
        <Link to='/products' className='carousel-btn'>
          SHOP NOW
        </Link>
      </div>
    </div>
  );
}

export default MainCarousel;
