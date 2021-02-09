import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.less";
import Layout from "./components/Layout/Layout";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import ProductDetailScreen from "./screens/ProductDetails/ProductDetailScreen";
import Products from "./screens/Products/Products";
import Wishlist from "./screens/Wishlist/Wishlist";
import Login from './screens/Login/Login';

function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/products">
                        <Products />
                    </Route>
                    <Route path="/details">
                        <ProductDetailScreen />
                    </Route>
                    <Route path="/wishlist">
                        <Wishlist />
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/">
                        <HomeScreen />
                    </Route>
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
