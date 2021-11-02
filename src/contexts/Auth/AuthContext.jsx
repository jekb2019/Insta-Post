import React, { createContext, useReducer } from 'react';
import currentUser from '../../mock/user';

const authUser = currentUser;

export const CurrentUserContext = createContext(null);

export const ACTIONS = {
  UPDATE_USERNAME: 'update-username',
  UPDATE_NAME: 'update-name',
  UPDATE_PROFILE_IMG: 'update-profile-img',
};

function reducer(currentUser, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_USERNAME:
      return currentUser;
    case ACTIONS.UPDATE_NAME:
      return currentUser;
    case ACTIONS.UPDATE_PROFILE_IMG:
      return currentUser;
    default:
      throw new Error('Auth Context: Unsupported action');
  }
}

const AuthContext = ({ children }) => {
  const [currentUser, dispatch] = useReducer(reducer, authUser);

  return (
    <CurrentUserContext.Provider value={[currentUser, dispatch]}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default AuthContext;
