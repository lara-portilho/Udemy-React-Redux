import React from "react";
import { useState } from "react";
import { Button } from "./components/Button";
import { Display } from "./components/Display";
import "./App.css";

function App() {

  const initalStates = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
  }

  const [calculator, setCalculator] = useState(initalStates)


  const addDigit = (digit) => {
    if(digit === '.' && calculator.displayValue.includes('.')) return
    
    const clearDisplay = calculator.displayValue === '0' || calculator.clearDisplay
    const currentValue = clearDisplay ? '' : calculator.displayValue
    const displayValue = currentValue + digit
    setCalculator({...calculator, displayValue, clearDisplay: false})

    if(digit !== '.'){
      const i = calculator.current
      const newValue = parseFloat(displayValue)
      const values = [...calculator.values]
      values[i] = newValue
      setCalculator({...calculator, values, displayValue, clearDisplay: false})
    }
  }

  const setOperation = (operation) => {
    if (calculator.current === 0) {
      setCalculator({...calculator, current: 1, clearDisplay: true, operation})
      return
    } 

    const equals = operation === '='
    const currentOperation = calculator.operation
    const values = [...calculator.values]

    switch (currentOperation) {
      case '+': 
        values[0] = values[0] + values[1]
        break
      case '-': 
        values[0] = values[0] - values[1]
        break
      case '*': 
        values[0] = values[0] * values[1]
        break
      case '/': 
        values[0] = values[0] / values[1]
        break
      default:
        break
    }

    values[1] = 0

    setCalculator({
      ...calculator,
      operation: equals ? null : operation,
      current: equals ? 0 : 1,
      clearDisplay: !equals,
      displayValue: values[0],
      values
    })
    
  }

  const reset = () => {
    setCalculator(initalStates)
  }

  return (
    <div className="container">
      <div className="calculator">
        <Display value={calculator.displayValue} />

        <Button label="AC" onClick={_ => reset()} className="triple-column" />
        
        <Button label="/" onClick={setOperation} className="operation" />

        <Button label="7" onClick={addDigit} />

        <Button label="8" onClick={addDigit} />

        <Button label="9" onClick={addDigit} />

        <Button label="*" onClick={setOperation} className="operation" />

        <Button label="4" onClick={addDigit} />

        <Button label="5" onClick={addDigit} />

        <Button label="6" onClick={addDigit} />

        <Button label="-" onClick={setOperation} className="operation" />

        <Button label="1" onClick={addDigit} />

        <Button label="2" onClick={addDigit} />

        <Button label="3" onClick={addDigit} />

        <Button label="+" onClick={setOperation} className="operation" />

        <Button label="0" onClick={addDigit} className="double-column" />

        <Button label="." onClick={addDigit} />

        <Button label="=" onClick={setOperation} className="operation" />
        </div>
    </div>
  );
}

export default App;
