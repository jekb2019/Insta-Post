import React from 'react';
import styles from '../authForms.module.css';
import BasicButton from '../../../elements/BasicButton/BasicButton';
import { AuthFormTypes } from '../AuthForm';

const Signin = ({ username, password, switchForm }) => (
  <>
    <h2 className={styles.title}>Sign in to continue</h2>
    <p className={styles.description}>
      New to InstaPost?{' '}
      <span
        className={styles.signup_link}
        onClick={() => switchForm(AuthFormTypes.SIGNUP)}
      >
        Click here to sign up
      </span>
    </p>
    <div className={styles.fields_wrapper}>
      <div className={styles.input_group}>
        <label className={styles.input_label} htmlFor="username">
          Username
        </label>
        <input
          className={styles.input}
          type="text"
          name="username"
          {...username}
        />
      </div>
      <div className={styles.input_group}>
        <label className={styles.input_label} htmlFor="password">
          Password
        </label>
        <input
          className={styles.input}
          type="password"
          name="password"
          {...password}
        />
      </div>
    </div>
    <BasicButton
      color="white"
      backgroundColor="orange"
      label="Go"
      size="medium"
    />
  </>
);

export default Signin;
