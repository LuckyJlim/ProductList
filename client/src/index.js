import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const endpoint = '/api';
console.log('Sending XHR request to', endpoint);
const oReq = new XMLHttpRequest();
oReq.addEventListener("load", function () {
  console.log('Api response:', this.responseText);
});
oReq.open("GET", endpoint);
oReq.send();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
