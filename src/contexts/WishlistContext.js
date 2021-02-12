import { createContext, useState } from 'react';
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
  const [wishlist, setWishlist] = useState([]);

  const addWishListItem = (pid) => {
    const { quantity, price, name, imgMain, stockStatus } = getProductById(pid);
    const whislistItem = {
      id: pid,
      price,
      name,
      imgMain,
      stockStatus,
      quantity,
    };
    setWishlist((list) => list.concat(whislistItem));
  };

  const removeWishListItem = (pid) => {
    const updatedList = wishlist.filter((p) => p.id !== pid);
    setWishlist(updatedList);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addWishListItem, removeWishListItem }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContext;
