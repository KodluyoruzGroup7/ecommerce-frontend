import { createContext, useState } from 'react';
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
  const [cartItems, setCartItems] = useState([]);

  const decrementQtyHandler = (idx) => {
    const product = { ...cartItems[idx] };
    if (product.qty > 1) {
      product.qty = product.qty - 1;
      product.totalPrice = parseFloat((product.qty * product.price).toFixed(2));
      let updatedCartItems = [...cartItems];
      updatedCartItems[idx] = product;
      setCartItems(updatedCartItems);
    }
  };

  const incrementQtyHandler = (idx) => {
    const product = { ...cartItems[idx] };
    product.qty = product.qty + 1;
    product.totalPrice = parseFloat((product.qty * product.price).toFixed(2));
    let updatedCartItems = [...cartItems];
    updatedCartItems[idx] = product;
    setCartItems(updatedCartItems);
  };

  const removeCartItemHandler = (pid) => {
    const updatedCartList = cartItems.filter((p) => p.id !== pid);
    setCartItems(updatedCartList);
  };

  const addCartItemHandler = (product) => {
    let itemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (itemIndex < 0) {
      const { price, name, imgMain } = getProductById(product.id);
      const updatedCartItem = {
        ...product,
        price,
        name,
        imgMain,
        totalPrice: (product.qty * price).toFixed(2),
      };
      setCartItems((cartItems) => cartItems.concat(updatedCartItem));
      return;
    }
    let currentItem = { ...cartItems[itemIndex] };
    currentItem.qty = currentItem.qty + 1;
    currentItem.totalPrice = parseFloat(
      (currentItem.qty * currentItem.price).toFixed(2),
    );
    let updatedCartItems = [...cartItems];
    updatedCartItems[itemIndex] = currentItem;
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        removeCartItemHandler,
        addCartItemHandler,
        decrementQtyHandler,
        incrementQtyHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
