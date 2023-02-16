import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './assets/components/App'


const root = ReactDOM.createRoot(document.getElementById("root"));
document.getElementById('root').style.overflowX = 'hidden';

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

