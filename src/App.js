import './App.css';
import React, { useState } from 'react';

function App() {


  const [result, setResult] = useState("");
  return (
    <div className="container">
      <form>
        <input type="text" value={result}/>
      </form>

      <div className="keypad">
        <button className="highlight" >Clear</button>
        <button className="highlight" >C</button>
        <button className="highlight" >&divide;</button>
        <button name="7" >7</button>
        <button name="8" >8</button>
        <button name="9" >9</button>
        <button className="highlight" name="*" >&times;</button>
        <button name="4" >4</button>
        <button name="5" >5</button>
        <button name="6" >6</button>
        <button className="highlight" name="-" >&ndash;</button>
        <button name="1" >1</button>
        <button name="2" >2</button>
        <button name="3" >3</button>
        <button className="highlight" name="+" >+</button>
        <button name="0" >0</button>
        <button className="highlight" name="." >.</button>
        <button className="highlight" name="=" >=</button>
      </div>
    </div>
  );
}

export default App;
