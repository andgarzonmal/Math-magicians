import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, seState] = useState({
    operation: {
      total: null,
      next: null,
      operation: null,
    },
  });

  const updateState = (e) => {
    const buttonName = e.target.textContent;
    seState((prevState) => ({ operation: calculate(prevState.operation, buttonName) }));
  };

  const { operation } = state;
  const { total, next, operation: op } = operation;

  return (
    <section className="calculator-container">
      <div className="calculator-screen">
        <h1 className="solution">{next || op || total || '0'}</h1>
      </div>
      <div className="buttons-container">
        <button onClick={updateState} type="button" className="buttons">AC</button>
        <button onClick={updateState} type="button" className="buttons">+/-</button>
        <button onClick={updateState} type="button" className="buttons">%</button>
        <button onClick={updateState} type="button" className="buttons orange">÷</button>
        <button onClick={updateState} type="button" className="buttons ">7</button>
        <button onClick={updateState} type="button" className="buttons ">8</button>
        <button onClick={updateState} type="button" className="buttons ">9</button>
        <button onClick={updateState} type="button" className="buttons orange">x</button>
        <button onClick={updateState} type="button" className="buttons ">4</button>
        <button onClick={updateState} type="button" className="buttons ">5</button>
        <button onClick={updateState} type="button" className="buttons ">6</button>
        <button onClick={updateState} type="button" className="buttons orange">-</button>
        <button onClick={updateState} type="button" className="buttons ">1</button>
        <button onClick={updateState} type="button" className="buttons ">2</button>
        <button onClick={updateState} type="button" className="buttons ">3</button>
        <button onClick={updateState} type="button" className="buttons orange">+</button>
        <button onClick={updateState} type="button" className="buttons cero">0</button>
        <button onClick={updateState} type="button" className="buttons ">.</button>
        <button onClick={updateState} type="button" className="buttons orange">=</button>
      </div>
    </section>
  );
};

export default Calculator;
