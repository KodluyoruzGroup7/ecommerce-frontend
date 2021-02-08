import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AppFooter from "../../components/AppFooter/AppFooter";

import { Input } from "antd";

import "./Login.css";

const Login = () => {
    return (
        <>
            <Navbar />
            <div>
                <h2 className="header-text">My Account</h2>
            </div>
            <div className="login">
                <h4 className="login-header-text">LOGIN</h4>
                <p className="login-text">
                    If you have an account with us, please log in.
                </p>
                <Input className="login-email-input" placeholder="Email" />
                <Input.Password
                    className="login-password-input"
                    placeholder="Password"
                />
            </div>
            <div className="new-customer"></div>
            <AppFooter />
        </>
    );
};

export default Login;
