import React from "react";

import "./App.less";

import { Layout } from "antd";
import Navbar from "./components/Navbar";
import MainCarousel from "./components/MainCarousel";

const { Header, Footer, Content } = Layout;

function App() {
    return (
        <>
            <Layout>
                <Header className="header">
                    <Navbar />
                </Header>
                <Content>
                    <MainCarousel />
                </Content>
                <Footer></Footer>
            </Layout>
        </>
    );
}

export default App;
