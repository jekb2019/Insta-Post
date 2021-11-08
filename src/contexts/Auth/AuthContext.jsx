import React, { createContext } from 'react';
import useAuth from '../../hooks/useAuth';

export const CurrentUserContext = createContext(null);

/**
 * Aim: Pass current authenticated user info globally
 */
const AuthContext = ({ children }) => {
  const [currentUser, operations] = useAuth();

  // TODO (Jason): Remove below mock code
  const MOCK_USER = {
    username: 'mock123',
    id: 'm_o_c_k',
  };

  return (
    <CurrentUserContext.Provider value={[currentUser, operations]}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default AuthContext;
