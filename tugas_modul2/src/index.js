import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Example from './components';

import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App nama="Dewina"
    nim="21120118120040" />
    <Example nama="Wisnu"
    nim="21120118120039" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
