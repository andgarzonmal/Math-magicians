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
          <div className="buttons"><h1>content</h1></div>
          <div className="buttons"><h1>content</h1></div>
          <div className="buttons"><h1>content</h1></div>
          <div className="buttons"><h1>content</h1></div>
          <div className="buttons"><h1>content</h1></div>
          <div className="buttons"><h1>content</h1></div>
          <div className="buttons"><h1>content</h1></div>
          <div className="buttons"><h1>content</h1></div>
          <div className="buttons"><h1>content</h1></div>
          <div className="buttons"><h1>content</h1></div>
          <div className="buttons"><h1>content</h1></div>
          <div className="buttons"><h1>content</h1></div>
          <div className="buttons"><h1>content</h1></div>
          <div className="buttons"><h1>content</h1></div>
          <div className="buttons"><h1>content</h1></div>
          <div className="buttons"><h1>content</h1></div>
          <div className="buttons"><h1>content</h1></div>
          <div className="buttons"><h1>content</h1></div>
          <div className="buttons"><h1>content</h1></div>
        </div>
      </section>
    );
  }
}

export default Calculator;
