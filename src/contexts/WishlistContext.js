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
  const [removeId, removeWishItem] = useState();

  useEffect(() => {
    if (itemId) {
      const { quantity, price, name, imgMain } = getProductById(itemId);
      const whislistItem = {
        id: itemId,
        price,
        name,
        imgMain,
        quantity,
      };
      setWishlist((list) => list.concat(whislistItem));
      setWishlistItem(null);
    }
  }, [itemId]);

  useEffect(() => {
    if (removeId) {
      const updatedList = wishlist.filter((p) => p.id !== removeId);
      setWishlist(updatedList);
      removeWishItem(null);
    }
  }, [removeId]);

  return (
    <WishlistContext.Provider
      value={{ wishlist, setWishlistItem, removeWishItem }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContext;
