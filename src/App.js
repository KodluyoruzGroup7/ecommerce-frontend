import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import "./App.less";

import { Layout } from "antd";
import Navbar from "./components/Navbar";
import MainCarousel from "./components/MainCarousel";
import BigCards from "./components/BigCards";

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
        <Footer></Footer>
      </Layout>
    </Router>
  );
}

export default App;
