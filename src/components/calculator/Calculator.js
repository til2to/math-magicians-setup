import React, { useState } from 'react';

import Title from '../Title';
import './calculator.css';
import calculate from '../../logic/calculate';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);
    setDisplayValue(newData.next || newData.total || '0');
  };

  return (
    <>
      {' '}
      { /* child component */}
      <div className="title-container">
        <Title className="calculator-title" />
      </div>
      { /* calculator ui */ }
      <div className="calculator">
        <div className="buttons">
          <div className="display">{displayValue}</div>
          <button type="button" onClick={() => handleClick('AC')}>AC</button>
          <button type="button" onClick={() => handleClick('+/-')}>+/-</button>
          <button type="button" onClick={() => handleClick('%')}>%</button>
          <button type="button" onClick={() => handleClick('÷')} className="operator-button">÷</button>
          <button type="button" onClick={() => handleClick('7')}>7</button>
          <button type="button" onClick={() => handleClick('9')}>9</button>
          <button type="button" onClick={() => handleClick('8')}>8</button>
          <button type="button" onClick={() => handleClick('x')} className="operator-button">x</button>
          <button type="button" onClick={() => handleClick('4')}>4</button>
          <button type="button" onClick={() => handleClick('5')}>5</button>
          <button type="button" onClick={() => handleClick('6')}>6</button>
          <button type="button" onClick={() => handleClick('-')} className="operator-button">-</button>
          <button type="button" onClick={() => handleClick('1')}>1</button>
          <button type="button" onClick={() => handleClick('2')}>2</button>
          <button type="button" onClick={() => handleClick('3')}>3</button>
          <button type="button" onClick={() => handleClick('+')} className="operator-button">+</button>
          <button type="button" onClick={() => handleClick('0')} className="zero-button">0</button>
          <button type="button" onClick={() => handleClick('.')}>.</button>
          <button type="button" onClick={() => handleClick('=')} className="equal-button operator-button">=</button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
