import { createContext, useState, useEffect } from 'react';
import { getProductById } from '../services';

const WishlistContext = createContext({});

/* 
  [
    {
      id*,
      stock,
      price,
      name,
      img
    }
  ]
*/

export const WishlistContextProvider = ({ children }) => {
  const [itemId, setWishlistItem] = useState();
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const { quantity, price, name, imgMain } = getProductById(itemId);
    const whislistItem = {
      id: itemId,
      price,
      name,
      imgMain,
      quantity,
    };
    setWishlist([...wishlist, whislistItem]);
  }, [itemId]);

  return (
    <WishlistContext.Provider value={{ wishlist, setWishlistItem }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContext;
