import React, { useState } from 'react';
import styles from './authForms.module.css';
import ConfirmSignup from './ConfirmSignup/ConfirmSignup';
import Signin from './Signin/Signin';
import Signup from './Signup/Signup';
import PropTypes from 'prop-types';

const AuthForm = ({ type }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submit');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {type === 'signin' && (
        <Signin
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
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
        />
      )}
      {type === 'confirm-signup' && (
        <ConfirmSignup code={code} setCode={setCode} />
      )}
    </form>
  );
};

AuthForm.propTypes = {
  type: PropTypes.oneOf(['signup', 'signin', 'confirm-signup']),
};

export default AuthForm;
