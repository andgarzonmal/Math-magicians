import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { render } from '@testing-library/react';
import Calculator from './Components/Calculator';
import Home from './Components/Home';
import Quote from './Components/Quote';
import Navbar from './Components/Navbar';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>My Calculator</h1>
//         <Calculator />
//       </div>
//     );
//   }
// }

//

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
