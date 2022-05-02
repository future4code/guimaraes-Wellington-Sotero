import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Routes from './Routes';


function App() {
  return (
    <BrowserRouter>
      <Header Star Wars Sotero/>

      <Routes />

      <h1>Star Wars</h1>

      
      </BrowserRouter>
      
  );
}

export default App;
