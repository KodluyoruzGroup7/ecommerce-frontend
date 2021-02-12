import { createContext, useState, useEffect } from 'react';
import { getProductById } from '../services';
const CartContext = createContext({});

/* 
  [
    {
      id*,
      qty*,
      price,
      name,
      imgMain,
      totalPrice
    }
  ]
*/

export const CartContextProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState();
  const [cartItems, setCartItems] = useState([]);

  console.log(cartItems);

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
      setCartItem(null);
    }
  }, [cartItem]);

  const removeCartItemHandler = (pid) => {
    const updatedCartList = cartItems.filter((p) => p.id !== pid);
    setCartItems(updatedCartList);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItem, removeCartItemHandler }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
