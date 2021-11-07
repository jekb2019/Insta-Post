import React from 'react';
import styles from '../authForms.module.css';
import BasicButton from '../../../elements/BasicButton/BasicButton';
import { AuthFormTypes } from '../AuthForm';

const ConfirmSignup = ({ code, setCode, switchForm, resendCode }) => (
  <>
    <h2 className={styles.title}>Enter Confirmation Code</h2>
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
        <label className={styles.input_label} htmlFor="confirmation">
          Code
        </label>
        <input
          className={styles.input}
          type="text"
          name="confirmation"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
    </div>
    <BasicButton
      color="white"
      backgroundColor="orange"
      label="Go"
      size="medium"
    />
    <span className={styles.resend_link} onClick={resendCode}>
      Resend confirmation code
    </span>
  </>
);

export default ConfirmSignup;
