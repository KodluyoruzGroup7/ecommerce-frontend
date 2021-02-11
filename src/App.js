import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.less';
import Layout from './components/Layout/Layout';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ProductDetailScreen from './screens/ProductDetails/ProductDetailScreen';
import Products from './screens/Products/Products';
import Login from './screens/Auth/Login';
import Register from './screens/Auth/Register';
import Wishlist from './screens/Wishlist/Wishlist';
import Cart from './screens/Cart/Cart';
import { CartContextProvider } from './contexts/CartContext';
import { WishlistContextProvider } from './contexts/WishlistContext';
import ScrollToTop from './components/helper/ScrollToTop';

function App() {
  return (
    <Router>
      <CartContextProvider>
        <WishlistContextProvider>
          <Layout>
            <ScrollToTop />
            <Switch>
              <Route path='/login'>
                <Login />
              </Route>
              <Route path='/register'>
                <Register />
              </Route>
              <Route path='/wishlist'>
                <Wishlist />
              </Route>
              <Route path='/cart'>
                <Cart />
              </Route>
              <Route path='/products'>
                <Products />
              </Route>
              <Route path='/product/:id'>
                <ProductDetailScreen />
              </Route>
              <Route path='/'>
                <HomeScreen />
              </Route>
            </Switch>
          </Layout>
        </WishlistContextProvider>
      </CartContextProvider>
    </Router>
  );
}

export default App;
