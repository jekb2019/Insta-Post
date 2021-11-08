import React from 'react';
import styles from './authForms.module.css';
import ConfirmSignup from './ConfirmSignup/ConfirmSignup';
import Signin from './Signin/Signin';
import Signup from './Signup/Signup';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  confirmSignUp,
  resendConfirmationCode,
  signIn,
  signUp,
} from '../../../services/auth';
import useInput from '../../../hooks/useInput';
import useAuthRoute from '../../../hooks/useAuthRoute';

export const AuthFormTypes = {
  SIGNUP: 'signup',
  SIGNIN: 'signin',
  CONFIRM_SIGNUP: 'confirm-signup',
};

const AuthForm = ({ type }) => {
  const username = useInput('');
  const password = useInput('');
  const email = useInput('');
  const code = useInput('');

  const history = useHistory();

  const switchForm = useAuthRoute();

  const handleSubmit = async (e) => {
    e.preventDefault();
    switch (type) {
      case AuthFormTypes.SIGNIN:
        await signIn(username.value, password.value);
        return;
      case AuthFormTypes.SIGNUP:
        try {
          await signUp(username.value, password.value, email.value);
          history.push('/confirmation');
        } catch (err) {
          console.error(err);
        }
        return;
      case AuthFormTypes.CONFIRM_SIGNUP:
        try {
          await confirmSignUp(username.value, code.value);
        } catch (e) {
          alert('Invalid code');
        }
        history.push('/signin');
        return;
      default:
        throw new Error('Invalid Auth Action');
    }
  };

  const resendCode = async () => {
    await resendConfirmationCode(username);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {type === 'signin' && (
        <Signin
          username={username}
          password={password}
          switchForm={switchForm}
        />
      )}
      {type === 'signup' && (
        <Signup
          username={username}
          password={password}
          email={email}
          switchForm={switchForm}
        />
      )}
      {type === 'confirm-signup' && (
        <ConfirmSignup
          code={code}
          switchForm={switchForm}
          resendCode={resendCode}
        />
      )}
    </form>
  );
};

AuthForm.propTypes = {
  type: PropTypes.oneOf(['signup', 'signin', 'confirm-signup']),
};

export default AuthForm;
