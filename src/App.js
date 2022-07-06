import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { render } from '@testing-library/react';
import Calculator from './Components/Calculator/Calculator';
import Home from './Components/Home/Home';
import Quote from './Components/Quote/Quote';
import Navbar from './Components/Navbar/Navbar';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route
        path="/Calculator"
        element={(
          <div className="App">
            <Calculator />
          </div>
      )}
      />
      <Route
        path="/"
        element={(
          <Home />
      )}
      />
      <Route
        path="/Quote"
        element={(
          <Quote />
      )}
      />
    </Routes>
  </BrowserRouter>

);

export default App;
