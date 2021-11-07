import { Hub } from 'aws-amplify';
import React, { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getCurrentAuthUser } from '../../services/auth';

export const CurrentUserContext = createContext(null);

const AuthContext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const listener = (data) => {
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
  };
  useEffect(() => {
    Hub.listen('auth', listener);
  }, []);

  useEffect(() => {
    getCurrentAuthUserInfo().then((user) => {
      setCurrentUser(user);
    });
  }, []);

  useEffect(() => {
    console.log('User Changed: ', currentUser);
  }, [currentUser]);

  /**
   * Get current logged in user from Amplify Auth.
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

  const MOCK_USER = {
    username: 'mock123',
    id: 'm_o_c_k',
  };

  return (
    <CurrentUserContext.Provider value={[currentUser]}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default AuthContext;
