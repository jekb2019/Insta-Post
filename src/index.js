import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/helpers.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Providers from './providers/Providers';
import Amplify from '@aws-amplify/core';
import config from './aws-exports';
Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
