import './App.css';
import React, { useState } from 'react';

function App() {


  const [result, setResult] = useState("");


  const handleClick = (e) =>{
    setResult(result.concat(e.target.name));
  }

  const clear = () =>{
    setResult("");
  }

  const deleteNum = () =>{
    setResult(result.slice(0, -1));
  }

  const calculate = () =>{
    setResult(eval(result).toString());
  }

  return (
    <div className="container">
      <form>
        <input type="text" value={result}/>
      </form>

      <div className="keypad">
        <button onClick={clear} className="highlight" id="clear">Clear</button>
        <button onClick={deleteNum} className="highlight" id="backspace">C</button>
        <button onClick={handleClick} name="/" className="highlight" >&divide;</button>
        <button onClick={handleClick} name="7" >7</button>
        <button onClick={handleClick} name="8" >8</button>
        <button onClick={handleClick} name="9" >9</button>
        <button onClick={handleClick} className="highlight" name="*" >&times;</button>
        <button onClick={handleClick} name="4" >4</button>
        <button onClick={handleClick} name="5" >5</button>
        <button onClick={handleClick} name="6" >6</button>
        <button onClick={handleClick} className="highlight" name="-" >&ndash;</button>
        <button onClick={handleClick} name="1" >1</button>
        <button onClick={handleClick} name="2" >2</button>
        <button onClick={handleClick} name="3" >3</button>
        <button onClick={handleClick} className="highlight" name="+" >+</button>
        <button onClick={handleClick} name="0" >0</button>
        <button onClick={handleClick} className="highlight" name="." >.</button>
        <button onClick={calculate} className="highlight" id="result" name="=" >=</button>
      </div>
    </div>
  );
}

export default App;
