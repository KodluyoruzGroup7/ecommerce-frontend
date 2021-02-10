import React from 'react';
import { Link } from 'react-router-dom';

import './products.css';
import { BackTop, Checkbox } from 'antd';

import ProductCard from '../../components/ProductCard/ProductCard';
import products from './productData';

const Products = () => {
  return (
    <>
      <BackTop />
      <div className='container'>
        <div className='collection'>
          <div className='collection-section'>
            <h3 className='collection-header'>COLLECTIONS</h3>
            <ul className='categories'>
              <Link to='/' target='_blank' rel='noopener noreferrer'>
                <li className='categories-item'>Women</li>
              </Link>
              <Link to='/' target='_blank' rel='noopener noreferrer'>
                <li className='categories-item'>Men</li>
              </Link>
              <Link to='/' target='_blank' rel='noopener noreferrer'>
                <li className='categories-item'>Shoes</li>
              </Link>
              <Link to='/' target='_blank' rel='noopener noreferrer'>
                <li className='categories-item'>Accessories</li>
              </Link>
            </ul>
          </div>
          <div className='size-section'>
            <h3 className='size-header'>SIZE</h3>
            <Checkbox value='XS'>XS</Checkbox>
            <Checkbox value='S'>S</Checkbox>
            <Checkbox value='M'>M</Checkbox>
            <Checkbox value='L'>L</Checkbox>
            <Checkbox value='XL'>XL</Checkbox>
          </div>
          <div className='price-section'>
            <h3 className='price-header'>PRICE</h3>
            <Checkbox value='under100'>Under 100₺</Checkbox>
            <Checkbox value='100-150'>100₺ - 200₺</Checkbox>
            <Checkbox value='150-200'>150₺ - 200₺</Checkbox>
            <Checkbox value='200-250'>200₺ - 250₺</Checkbox>
            <Checkbox value='over250'>Over 250₺</Checkbox>
          </div>
        </div>
        <div className='product-list'>
          {products.map((product) => (
            <div className='product-list-item'>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
