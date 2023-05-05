import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='652741735087-22a3eakhhrbn8pldtcbqcicrpa44d0ct.apps.googleusercontent.com'>
      <App />
    </GoogleOAuthProvider>
    
  </React.StrictMode>
);


