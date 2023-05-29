import React from 'react';

import Title from '../Title';
import './calculator.css';

const Calculator = () => (
  <>
    {' '}
    { /* child component */ }
    <div className="title-container">
      <Title className="calculator-title" />
    </div>
    { /* calculator ui */ }
    <div className="calculator">
      <div className="buttons">
        <div className="display">0</div>
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button" className="operator-button">÷</button>
        <button type="button">7</button>
        <button type="button">9</button>
        <button type="button">8</button>
        <button type="button" className="operator-button">x</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" className="operator-button">-</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" className="operator-button">+</button>
        <button type="button" className="zero-button">0</button>
        <button type="button">.</button>
        <button type="button" className="equal-button operator-button">=</button>
      </div>
    </div>
  </>
);

export default Calculator;
