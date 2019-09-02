import React from 'react';
import './app.css'
import Header from './../Header/Header';
import Menu from '../Menu/Menu';
import Home from '../Home/Home.js';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Menu />
      <div className="main-content">
      <Home />
      </div>      
    </div>
  );
};

export default App;