import React from 'react';
import styles from './authForms.module.css';
import ConfirmSignup from './ConfirmSignup/ConfirmSignup';
import Signin from './Signin/Signin';
import Signup from './Signup/Signup';
import PropTypes from 'prop-types';
import useInput from '../../../hooks/useInput';
import useAuthRoute from '../../../hooks/useAuthRoute';
import useAuthFormSubmit from '../../../hooks/useAuthFormSubmit';

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

  const switchForm = useAuthRoute();
  const [handleSubmit, resendCode] = useAuthFormSubmit(
    type,
    username,
    password,
    email,
    code
  );

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
