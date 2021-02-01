import React from "react";

import "./App.less";

import { Layout } from "antd";
import Navbar from "./components/Navbar";

const { Header, Footer, Content } = Layout;

function App() {
    return (
        <>
            <Layout>
                <Header className="header">
                    <Navbar />
                </Header>
                <Content></Content>
                <Footer></Footer>
            </Layout>
        </>
    );
}

export default App;
