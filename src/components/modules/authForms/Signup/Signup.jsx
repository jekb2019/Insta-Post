import React from 'react';
import styles from '../authForms.module.css';
import BasicButton from '../../../elements/BasicButton/BasicButton';
import { AuthFormTypes } from '../AuthForm';

const Signup = ({ username, password, email, switchForm }) => (
  <>
    <h2 className={styles.title}>Create a new account</h2>
    <p className={styles.description}>
      <span
        className={styles.signup_link}
        onClick={() => switchForm(AuthFormTypes.SIGNIN)}
      >
        Log in
      </span>{' '}
      with existing account
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
      <div className={styles.input_group}>
        <label className={styles.input_label} htmlFor="email">
          Email
        </label>
        <input className={styles.input} type="email" name="email" {...email} />
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

export default Signup;
