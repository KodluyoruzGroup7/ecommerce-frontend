import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import QuantityChanger from '../../components/UI/QuantityChanger/QuantityChanger';
import './cart.css';
import CartContext from '../../contexts/CartContext';
import { CloseCircleFilled } from '@ant-design/icons';

const Cart = () => {
  const {
    cartItems,
    removeCartItemHandler,
    incrementQtyHandler,
    decrementQtyHandler,
  } = useContext(CartContext);

  const incrementQty = (idx) => incrementQtyHandler(idx);

  const decrementQty = (idx) => decrementQtyHandler(idx);

  return (
    <>
      <h1 className='cart-header'>Your Cart</h1>
      <div className='table-container'>
        <table className='table'>
          <thead>
            <tr className='table-header'>
              <th></th>
              <th colSpan='2'>PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((product, index) => (
              <tr className='table-item' key={product.id}>
                <td>
                  <CloseCircleFilled
                    className='delete-icon'
                    onClick={() => removeCartItemHandler(product.id)}
                  />
                </td>
                <td>
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.imgMain}
                      alt={product.name}
                      height='100px'
                    />
                  </Link>
                </td>
                <td className='product-text'>
                  <Link to={`/product/${product.id}`}>
                    <p className='product-name'>{product.name}</p>
                    {/* <p className='product-size'>Size: {product.size}</p>
                    <p className='product-color'>Color: {product.color}</p> */}
                  </Link>
                </td>
                <td className='price-text'>{product.price} $</td>
                <td className='quantity-text'>
                  <div className='quantity-changer'>
                    <QuantityChanger
                      quantity={product.qty}
                      increment={() => incrementQty(index)}
                      decrement={() => decrementQty(index)}
                    />
                  </div>
                </td>
                <td className='total-text'>{product.totalPrice} $</td>
              </tr>
            ))}
            <tr>
              <td className='total-price-text' colSpan='6'>
                <p>Total Price = </p>
                <p className='price-text-bold'>
                  {cartItems.length > 0
                    ? cartItems.reduce(
                        (acc, cartItem) =>
                          acc + parseFloat(cartItem.totalPrice),
                        0,
                      )
                    : '0'}{' '}
                  $
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cart;
