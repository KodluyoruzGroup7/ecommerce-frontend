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
    if (itemId) {
      const { quantity, price, name, imgMain, stockStatus } = getProductById(
        itemId,
      );
      const whislistItem = {
        id: itemId,
        price,
        name,
        imgMain,
        stockStatus,
        quantity,
      };
      setWishlist((list) => list.concat(whislistItem));
      setWishlistItem(null);
    }
  }, [itemId]);

  const removeWishListItem = (pid) => {
    const updatedList = wishlist.filter((p) => p.id !== pid);
    setWishlist(updatedList);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, setWishlistItem, removeWishListItem }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContext;
