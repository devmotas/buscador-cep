import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Favicon from 'react-favicon'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Favicon url={"https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"}></Favicon>
    <App />
  </>
);
