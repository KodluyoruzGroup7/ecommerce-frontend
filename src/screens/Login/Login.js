import React from "react";
import { Link } from "react-router-dom";

import styles from "./Login.module.css";

const Login = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.sectionHeader}>My Account</h1>
            <div className={styles.sectionContainer}>
                <div className={styles.box}>
                    <form className={styles.form}>
                        <h3>LOGIN</h3>
                        <p>If you have an account with us, please log in.</p>
                        <input type='email' name='email' id='email' placeholder='Email'/>
                        <input type='password' name='password' id='password' placeholder='Password'/>
                        <button className={styles.button}>Login</button>
                        <button className={`${styles.button} ${styles.forget}`}>Forgot your password?</button>
                    </form>
                </div>
                <div className={styles.box}>
                    <h3>New Customer</h3>
                    <p>Registering for this site allows you to access your order status and history. We’ll get a new account set up for you in no time. For this will only ask you for information necessary to make the purchase process faster and easier</p>
                    <Link className={`${styles.button} ${styles.half}`}>
                        Create an Account
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
