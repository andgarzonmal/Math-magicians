import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operation: {
        total: null,
        next: null,
        operation: null,
      },
    };

    this.updateState = this.updateState.bind(this);
  }

  // arr = [1,2,3,4,5] => [...arr]
  updateState = (e) => {
    const buttonName = e.target.textContent;
    this.setState((prevState) => ({ operation: calculate(prevState.operation, buttonName) }));
  }

  render() {
    const { operation } = this.state;
    const { total, next, operation: op } = operation;
    return (
      <section className="calculator-container">
        <div className="calculator-screen">
          <h1 className="solution">{next || op || total || '0'}</h1>
        </div>
        <div className="buttons-container">
          <button onClick={this.updateState} type="button" className="buttons">AC</button>
          <button onClick={this.updateState} type="button" className="buttons">+/-</button>
          <button onClick={this.updateState} type="button" className="buttons">%</button>
          <button onClick={this.updateState} type="button" className="buttons orange">÷</button>
          <button onClick={this.updateState} type="button" className="buttons ">7</button>
          <button onClick={this.updateState} type="button" className="buttons ">8</button>
          <button onClick={this.updateState} type="button" className="buttons ">9</button>
          <button onClick={this.updateState} type="button" className="buttons orange">x</button>
          <button onClick={this.updateState} type="button" className="buttons ">4</button>
          <button onClick={this.updateState} type="button" className="buttons ">5</button>
          <button onClick={this.updateState} type="button" className="buttons ">6</button>
          <button onClick={this.updateState} type="button" className="buttons orange">-</button>
          <button onClick={this.updateState} type="button" className="buttons ">1</button>
          <button onClick={this.updateState} type="button" className="buttons ">2</button>
          <button onClick={this.updateState} type="button" className="buttons ">3</button>
          <button onClick={this.updateState} type="button" className="buttons orange">+</button>
          <button onClick={this.updateState} type="button" className="buttons cero">0</button>
          <button onClick={this.updateState} type="button" className="buttons ">.</button>
          <button onClick={this.updateState} type="button" className="buttons orange">=</button>
        </div>
      </section>
    );
  }
}

export default Calculator;
