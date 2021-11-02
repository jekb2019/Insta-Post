import React from 'react';
import AuthContext from '../contexts/Auth/AuthContext';
import ModalContext from '../contexts/Modal/ModalContext';

const Providers = ({ children }) => (
  <AuthContext>
    <ModalContext>{children}</ModalContext>
  </AuthContext>
);

export default Providers;
