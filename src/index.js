import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

ReactDOM.render(
  <App />,
  document.getElementById('render-target')
);

// Hot module reload
if(module.hot) module.hot.accept();
