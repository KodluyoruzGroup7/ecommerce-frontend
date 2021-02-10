import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HoverDropdown } from './Dropdown/Dropdown';
import "./navbar.css";

import { Menu, Dropdown } from "antd";
import {
    ShopOutlined,
    SearchOutlined,
    HeartOutlined,
    ShoppingOutlined,
    UserOutlined
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
                <Link to="/">
                    <ShopOutlined />
                    TRENDBOO
                </Link>
            </div>
            <Menu
                onClick={menuClickHandler}
                selectedKeys={[selectedMenu]}
                mode="horizontal"
            >
                <Menu.Item key="women">
                    <Link to="/" target="_blank" rel="noopener noreferrer">
                        Women
                    </Link>
                </Menu.Item>

                <Menu.Item key="men">
                    <Link to="/" target="_blank" rel="noopener noreferrer">
                        Men
                    </Link>
                </Menu.Item>

                <Menu.Item key="shoes">
                    <Link to="/" target="_blank" rel="noopener noreferrer">
                        Shoes
                    </Link>
                </Menu.Item>

                <Menu.Item key="accessories">
                    <Link to="/" target="_blank" rel="noopener noreferrer">
                        Accessories
                    </Link>
                </Menu.Item>
            </Menu>

            <div className="menu-right">
                <Link to='#'>
                    <SearchOutlined />
                </Link>

                <Dropdown overlay={HoverDropdown} onClick={e => e.preventDefault()}>
                    <Link to='#'>
                        <UserOutlined />
                    </Link>
                </Dropdown>
                <Link to="/wishlist">
                    <HeartOutlined />
                </Link>
                <Link to="/cart">
                    <ShoppingOutlined />
                </Link>
            </div>

        </div>
    );
}

export default Navbar;
