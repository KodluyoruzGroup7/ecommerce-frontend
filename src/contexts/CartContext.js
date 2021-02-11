import { createContext, useState, useEffect } from 'react';
import { getProductById } from '../services';
const CartContext = createContext({});

/* 
  [
    {
      id*,
      qty*,
      color*,
      size*,
      price,
      name,
      imgMain,
      totalPrice
    }
  ]
*/

export const CartContextProvider = ({ children }) => {
  const [cartItem, addCartItem] = useState();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (cartItem) {
      const { price, name, imgMain } = getProductById(cartItem.id);
      const updatedCartItem = {
        ...cartItem,
        price,
        name,
        imgMain,
        totalPrice: (cartItem.qty * price).toFixed(2),
      };
      setCartItems((cartItems) => cartItems.concat(updatedCartItem));
    }
  }, [cartItem]);

  return (
    <CartContext.Provider value={{ cartItems, addCartItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
