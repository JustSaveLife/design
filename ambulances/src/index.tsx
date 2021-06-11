import React from 'react';
import ReactDOM from 'react-dom';
import TelephoneMessageForm from './components/telephone-message-form/telephone-message-form';
import './styles/index.css';
import AuthProvider from './auth/auth-provider';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <TelephoneMessageForm />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
