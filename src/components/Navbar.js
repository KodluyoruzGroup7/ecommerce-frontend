import React, { useState } from "react";

import "../styles/Navbar.less";

import { Menu } from "antd";
import {
    ShopOutlined,
    SearchOutlined,
    HeartOutlined,
    ShoppingOutlined,
} from "@ant-design/icons";

function Navbar() {
    const [selectedMenu, setSelectedMenu] = useState("");

    const menuClickHandler = (e) => {
        console.log("click ", e);
        setSelectedMenu(e.key);
    };

    return (
        <div className="navbar">
            <div className="logo">
                <a href="#">
                    <ShopOutlined />
                    TRENDBOO
                </a>
            </div>
            <Menu
                onClick={menuClickHandler}
                selectedKeys={[selectedMenu]}
                mode="horizontal"
            >
                <Menu.Item key="women">
                    <a
                        href="https://ant.design"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Women
                    </a>
                </Menu.Item>

                <Menu.Item key="men">
                    <a
                        href="https://ant.design"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Men
                    </a>
                </Menu.Item>

                <Menu.Item key="kids">
                    <a
                        href="https://ant.design"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Kids
                    </a>
                </Menu.Item>

                <Menu.Item key="accessories">
                    <a
                        href="https://ant.design"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Accessories
                    </a>
                </Menu.Item>
            </Menu>

            <div className="menu-right">
                <a href="#">
                    <SearchOutlined />
                </a>
                <a href="#">
                    <HeartOutlined />
                </a>
                <a href="#">
                    <ShoppingOutlined />
                </a>
            </div>
        </div>
    );
}

export default Navbar;
