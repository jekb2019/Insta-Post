import React, { useState } from 'react';
import styles from './authForms.module.css';
import ConfirmSignup from './ConfirmSignup/ConfirmSignup';
import Signin from './Signin/Signin';
import Signup from './Signup/Signup';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export const AuthFormTypes = {
  SIGNUP: 'signup',
  SIGNIN: 'signin',
  CONFIRM_SIGNUP: 'confirm-signup',
};

const AuthForm = ({ type }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');

  const history = useHistory();

  const switchForm = (formType) => {
    console.log('Switch');
    switch (formType) {
      case AuthFormTypes.SIGNIN:
        history.push('/signin');
        return;
      case AuthFormTypes.SIGNUP:
        console.log('sigup');
        history.push('/signup');
        return;
      case AuthFormTypes.CONFIRM_SIGNUP:
        history.push('/confirmation');
        return;
      default:
        return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (type) {
      case AuthFormTypes.SIGNIN:
        alert('Submit from signin');
        return;
      case AuthFormTypes.SIGNUP:
        history.push('/confirmation');
        return;
      case AuthFormTypes.CONFIRM_SIGNUP:
        alert('Submit from confirmation');
        return;
      default:
        return null;
    }
  };

  const resetPassword = () => {
    alert('Reset Password');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {type === 'signin' && (
        <Signin
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          switchForm={switchForm}
          resetPassword={resetPassword}
        />
      )}
      {type === 'signup' && (
        <Signup
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          email={email}
          setEmail={setEmail}
          switchForm={switchForm}
        />
      )}
      {type === 'confirm-signup' && (
        <ConfirmSignup code={code} setCode={setCode} switchForm={switchForm} />
      )}
    </form>
  );
};

AuthForm.propTypes = {
  type: PropTypes.oneOf(['signup', 'signin', 'confirm-signup']),
};

export default AuthForm;
