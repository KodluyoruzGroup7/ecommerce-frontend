import { createContext, useState, useEffect } from 'react';

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
  useEffect(() => {
    /* 
      id => product => stock, price ,name img
    */
  }, [wishlist]);
  return (
    <WishlistContext.Provider value='deneme'>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContext;
