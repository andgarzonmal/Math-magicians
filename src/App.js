import './App.css';
import React from 'react';
// import { render } from '@testing-library/react';
import Calculator from './Components/Calculator';

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
  <div className="App">
    <h1>My Calculator</h1>
    <Calculator />
  </div>
);

export default App;
