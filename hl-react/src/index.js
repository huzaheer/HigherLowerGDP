import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Earth from './components/Earth'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div>
      <Earth />
    </div>
    <div id='gdp-content'>
      <App />
    </div>
  </>
);

