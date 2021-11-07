import React, { createContext, useReducer } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
// import currentUser from '../../mock/user';
import { getCurrentAuthUser, signOut } from '../../services/auth';

export const CurrentUserContext = createContext(null);

// const user = currentUser;

// export const ACTIONS = {
//   UPDATE_USERNAME: 'update-username',
//   UPDATE_NAME: 'update-name',
//   UPDATE_PROFILE_IMG: 'update-profile-img',
// };

// function reducer(currentUser, action) {
//   switch (action.type) {
//     case ACTIONS.UPDATE_USERNAME:
//       return currentUser;
//     case ACTIONS.UPDATE_NAME:
//       return currentUser;
//     case ACTIONS.UPDATE_PROFILE_IMG:
//       return currentUser;
//     default:
//       throw new Error('Auth Context: Unsupported action');
//   }
// }

const AuthContext = ({ children }) => {
  // const [currentUser, dispatch] = useReducer(reducer, user);
  // console.log('Current: ', currentUser);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    getCurrentAuthUserInfo().then(setCurrentUser);
  }, []);

  /**
   * Get current logged in user from Amplify Auth.
   * @returns
   * If user exists, return user info: {username, id, name: username, profileImg: null}
   * If User does not exist, return null;
   */
  async function getCurrentAuthUserInfo() {
    const user = getCurrentAuthUser().then((user) => {
      // console.log('full user: ', user);
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
