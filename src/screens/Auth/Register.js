import React from 'react';
import styles from './Auth.module.css';

const Register = () => {
  return (
    <div className={styles.register}>
      <h1 className={styles.sectionHeader}>Create An Account</h1>
      <form className={styles.form}>
        <input
          type='firstName'
          name='firstName'
          id='firstName'
          placeholder='First Name'
        />
        <input
          type='lastName'
          name='lastName'
          id='lastName'
          placeholder='Last Name'
        />
        <input type='email' name='email' id='email' placeholder='Email' />
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Password'
        />
        <label className={styles.checkbox}>
          <input type='checkbox' name='validate' id='validate' /> Subscribe to
          stay updated with new products and offers!
        </label>
        <button className={styles.button}>Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
