import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="calculator-container">
        <div className="calculator-screen">
          <h1 className="solution">0</h1>
        </div>
        <div className="buttons-container">
          <button type="button" className="buttons orange">AC</button>
          <button type="button" className="buttons orange">+/-</button>
          <button type="button" className="buttons orange">%</button>
          <button type="button" className="buttons orange">÷</button>
          <button type="button" className="buttons ">7</button>
          <button type="button" className="buttons ">8</button>
          <button type="button" className="buttons ">9</button>
          <button type="button" className="buttons orange">x</button>
          <button type="button" className="buttons ">4</button>
          <button type="button" className="buttons ">5</button>
          <button type="button" className="buttons ">6</button>
          <button type="button" className="buttons orange">-</button>
          <button type="button" className="buttons ">1</button>
          <button type="button" className="buttons ">2</button>
          <button type="button" className="buttons ">3</button>
          <button type="button" className="buttons orange">+</button>
          <button type="button" className="buttons cero">0</button>
          <button type="button" className="buttons ">.</button>
          <button type="button" className="buttons orange">=</button>
        </div>
      </section>
    );
  }
}

export default Calculator;
