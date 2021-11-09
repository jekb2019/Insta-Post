import React, { createContext } from 'react';
import useAuth from '../../hooks/useAuth';

export const CurrentUserContext = createContext(null);

/**
 * Aim: Pass current authenticated user info globally
 */
const AuthContext = ({ children }) => {
  const [currentUser, operations] = useAuth();

  return (
    <CurrentUserContext.Provider value={[currentUser, operations]}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default AuthContext;
