import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { getProductsByCategory, getAllProducts } from '../../services';
import './products.css';
import { BackTop, Checkbox } from 'antd';

const Products = () => {
  const [products, setProducts] = useState([]);
  const query = useLocation().search;

  useEffect(() => {
    let fetchedProducts;
    if (query) {
      fetchedProducts = getProductsByCategory(query.split('=')[1]);
    } else {
      fetchedProducts = getAllProducts();
    }
    setProducts(fetchedProducts);
  }, [query]);

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
            <Checkbox name='XS'>XS</Checkbox>
            <Checkbox name='S'>S</Checkbox>
            <Checkbox name='M'>M</Checkbox>
            <Checkbox name='L'>L</Checkbox>
            <Checkbox name='XL'>XL</Checkbox>
          </div>
          <div className='price-section'>
            <h3 className='price-header'>PRICE</h3>
            <input type='checkbox' name='' id='' />
            <Checkbox name='under100'>Under 100₺</Checkbox>
            <Checkbox name='100-150'>100₺ - 200₺</Checkbox>
            <Checkbox name='150-200'>150₺ - 200₺</Checkbox>
            <Checkbox name='200-250'>200₺ - 250₺</Checkbox>
            <Checkbox name='over250'>Over 250₺</Checkbox>
          </div>
        </div>
        <div className='product-list'>
          {products.map((product) => (
            <div key={product.id} className='product-list-item'>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
