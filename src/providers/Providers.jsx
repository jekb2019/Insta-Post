import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthContext from '../contexts/Auth/AuthContext';
import ModalContext from '../contexts/Modal/ModalContext';

const Providers = ({ children }) => (
  <BrowserRouter>
    <AuthContext>
      <ModalContext>{children}</ModalContext>
    </AuthContext>
  </BrowserRouter>
);

export default Providers;
