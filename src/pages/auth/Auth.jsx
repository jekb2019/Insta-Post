import React, { useEffect, useState } from 'react';
import styles from './Auth.module.css';
import logo from '../../assets/images/header_logo.png';
import AuthForm, {
  AuthFormTypes,
} from '../../components/modules/authForms/AuthForm';

const Auth = ({ type }) => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="InstaPost logo" className={styles.logo} />
      <AuthForm type={type} />
    </div>
  );
};

export default Auth;
