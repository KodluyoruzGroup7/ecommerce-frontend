import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import './wishlist.css';

import { CloseSquareTwoTone } from '@ant-design/icons';
import WishListContext from '../../contexts/WishlistContext';

const Wishlist = () => {
  const { wishlist, removeWishListItem } = useContext(WishListContext);
  return (
    <>
      <h1 className='wishlist-header'>Wishlist</h1>
      <div className='table-container'>
        <table className='table'>
          <thead>
            <tr className='table-header'>
              <th colSpan='2'>PRODUCT</th>
              <th>PRICE</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((product) => (
              <tr key={product.id} className='table-item'>
                <td>
                  <img
                    src={product.imgMain}
                    alt={product.name}
                    height='100px'
                  />
                </td>
                <td className='product-text'>{product.name}</td>
                <td className='price-text'>{product.price} ₺</td>
                <td
                  style={{
                    color: product.quantity ? 'green' : 'red',
                    textAlign: 'center',
                  }}
                >
                  {product.stockStatus}
                </td>
                <td className='product-btn'>
                  <Link to={`/product/${product.id}`}>
                    <Button>VIEW PRODUCT</Button>
                  </Link>
                </td>
                <td>
                  <CloseSquareTwoTone
                    twoToneColor='#ce0620'
                    className='delete-icon'
                    onClick={() => removeWishListItem(product.id)}
                  />
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
