import React from 'react';

import './banner.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShippingFast,
  faHandHoldingUsd,
  faTty,
} from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner-icons'>
        <div className='banner-shipping'>
          <div className='banner-icon'>
            <FontAwesomeIcon icon={faShippingFast} color='white' />
          </div>
          <div className='banner-description'>
            <h3 className='banner-header'>FREE SHIPPING & RETURN</h3>
            <p className='banner-text'>Free shipping on all US orders</p>
          </div>
        </div>
        <div className='banner-moneyback'>
          <div className='banner-icon'>
            <FontAwesomeIcon icon={faHandHoldingUsd} color='white' />
          </div>
          <div className='banner-description'>
            <h3 className='banner-header'>MONEY GAURNTEE</h3>
            <p className='banner-text'>30 days money back guarantee</p>
          </div>
        </div>
        <div className='banner-support'>
          <div className='banner-icon'>
            <FontAwesomeIcon icon={faTty} color='white' />
          </div>
          <div className='banner-description'>
            <h3 className='banner-header'>ONLINE SUPPORT</h3>
            <p className='banner-text'>We support online 24/7 on day</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
