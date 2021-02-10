import { createContext, useState, useEffect } from 'react';

const CartContext = createContext({});

/* 
[
  {
    id*,
    name,
    price,
    img
    qty*,
    size*,
    color*,
    totalPrice,
  }
]
*/
export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    /* 
      data=> id => product
      product => price,name, mainimg,
    */
  }, [cartItems]);

  return (
    <CartContext.Provider value={(cartItems, setCartItems)}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
