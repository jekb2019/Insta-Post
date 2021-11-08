import { Hub } from 'aws-amplify';
import { useEffect, useState } from 'react';
import {
  confirmSignUp,
  getCurrentAuthUser,
  resendConfirmationCode,
  signIn,
  signOut,
  signUp,
} from '../services/auth';

/**
 * Aim: Listen to auth event and do related works (communicating with services/auth.js) as a helper of AuthContext.
 */

function useAuth() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    Hub.listen('auth', listener);
  }, []);

  useEffect(() => {
    getCurrentAuthUserInfo().then((currentUser) => {
      setCurrentUser(currentUser);
    });
  }, []);

  function listener(data) {
    switch (data.payload.event) {
      case 'signIn':
        getCurrentAuthUserInfo().then((currentUser) => {
          setCurrentUser(currentUser);
        });
        break;
      case 'signUp':
        break;
      case 'signOut':
        setCurrentUser(null);
        break;
      case 'signIn_failure':
        alert('Signin Failed');
        break;
      case 'tokenRefresh':
        console.log('token refresh succeeded');
        break;
      case 'tokenRefresh_failure':
        console.error('token refresh failed');
        break;
      case 'configured':
        console.log('the Auth module is configured');
    }
  }

  /**
   * Get current logged in user (in extracted form) from auth service.
   * @returns
   * If user exists, return user info: {username, id, name: username, profileImg: null}
   * If User does not exist, return null;
   */
  async function getCurrentAuthUserInfo() {
    const user = getCurrentAuthUser().then((user) => {
      if (!user) {
        return null;
      }
      const {
        username,
        attributes: { sub: id },
      } = user;
      return {
        username,
        id,
      };
    });
    return user;
  }

  /**
   * Call signout from auth service
   */
  async function signOutFromService() {
    return await signOut();
  }

  /**
   * Call signin from auth service
   */
  async function signInToService(username, password) {
    return await signIn(username, password);
  }

  /**
   * Call signup from auth service
   */
  async function signUpToService(username, password, email) {
    return await signUp(username, password, email);
  }

  /**
   * call confirm sign up from auth service
   */
  async function confirmSignUpToService(username, code) {
    return await confirmSignUp(username, code);
  }

  /**
   * call resend confirmation code from auth service
   */
  async function resendConfirmationCodeFromService(username) {
    return await resendConfirmationCode(username);
  }

  return [
    currentUser,
    {
      getCurrentAuthUser,
      signOutFromService,
      signInToService,
      signUpToService,
      confirmSignUpToService,
      resendConfirmationCodeFromService,
    },
  ];
}

export default useAuth;
