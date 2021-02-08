import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.less";
import Layout from "./components/Layout/Layout";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import ProductDetailScreen from "./screens/ProductDetails/ProductDetailScreen";

function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/details">
                        <ProductDetailScreen />
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
