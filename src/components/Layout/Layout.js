import React from "react";
import Navbar from "../Navbar/Navbar";
import AppFooter from "../AppFooter/AppFooter";
import { Layout as AntLayout } from "antd";
import "./layout.css";
const { Header, Footer, Content } = AntLayout;

function Layout({ children }) {
    return (
        <AntLayout>
            <Header className="header">
                <Navbar />
            </Header>
            <Content>{children}</Content>
            <Footer>
                <AppFooter />
            </Footer>
        </AntLayout>
    );
}

export default Layout;
