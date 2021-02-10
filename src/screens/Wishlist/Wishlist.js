import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import './wishlist.css';

import data from './wishlistData';
import { CloseSquareTwoTone } from '@ant-design/icons';

const Wishlist = () => {
  return (
    <>
      <h1 className='wishlist-header'>Wishlist</h1>
      <div className='table-container'>
        <table class='table'>
          <thead>
            <tr className='table-header'>
              <th colspan='2'>PRODUCT</th>
              <th>PRICE</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((product) => (
              <tr className='table-item'>
                <td>
                  <img src={product.img} alt={product.name} height='100px' />
                </td>
                <td className='product-text'>{product.name}</td>
                <td className='price-text'>{product.price} ₺</td>
                <td
                  style={{
                    color: product.status === 'In Stock' ? 'green' : 'red',
                    textAlign: 'center',
                  }}
                >
                  {product.status}
                </td>
                <td className='product-btn'>
                  <Link to='/' target='_blank' rel='noopener noreferrer'>
                    <Button>VIEW PRODUCT</Button>
                  </Link>
                </td>
                <td>
                  <Link to='/' target='_blank' rel='noopener noreferrer'>
                    <CloseSquareTwoTone
                      twoToneColor='#ce0620'
                      className='delete-icon'
                    />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Wishlist;
