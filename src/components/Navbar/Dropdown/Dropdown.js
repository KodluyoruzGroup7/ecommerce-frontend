import React from 'react';
import "./Dropdown.css";
import { Link } from 'react-router-dom';
import { Menu } from 'antd';



export const HoverDropdown = (
  <Menu className="navbar__dropdown">
    <Menu.Item>
      <Link to="/login" className="login__btn">
        Sign In
      </Link>
    </Menu.Item>
    <Menu.Item>
      Don't have an account?
      <Link to="/register" className="login__btn sign__in">
        Sign Up
      </Link>
    </Menu.Item>
  </Menu>
);