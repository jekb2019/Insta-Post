import React from 'react';
import AuthContext from '../contexts/Auth/AuthContext';

const Providers = ({ children }) => <AuthContext>{children}</AuthContext>;

export default Providers;
