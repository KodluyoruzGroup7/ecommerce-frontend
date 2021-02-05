import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.less";

import Navbar from "./components/Navbar/Navbar";
import MainCarousel from "./components/MainCarousel/MainCarousel";
import BigCards from "./components/BigCards/BigCards";
import AppFooter from "./components/AppFooter/AppFooter";

import { Layout } from "antd";
const { Header, Footer, Content } = Layout;

function App() {
    return (
        <Router>
            <Layout>
                <Header className="header">
                    <Navbar />
                </Header>
                <Content>
                    <MainCarousel />
                    <BigCards />
                </Content>
                <Footer>
                    <AppFooter />
                </Footer>
            </Layout>
        </Router>
    );
}

export default App;
