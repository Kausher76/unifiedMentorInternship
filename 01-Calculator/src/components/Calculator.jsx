import React, { useState } from "react";

const Calculator = () => {

  const [data, setData] = useState("");
  const getValue = (event) => {
    const value = event.target.value;
    setData(data.concat(value));
  }

  const calculate = () => {
    try {
      const result = new Function('return ' + data)();
      setData(result.toString());
    } catch (error) {
      setData("Error");
    }
  };

  const back = () => {
    setData(data.slice(0, -1));
  }

  const clear = () => {
    setData("");
  }

  return (
    <div className="container">
      <div>
        <input placeholder="0" value={data}/>
      </div>
      <br />
      <button onClick={getValue} value="(">(</button>
      <button onClick={getValue} value=")">)</button>
      <button onClick={getValue} value="%">%</button>
      <button onClick={getValue} value="."  >.</button>

      <button onClick={getValue} value="7">7</button>
      <button onClick={getValue} value="8">8</button>
      <button onClick={getValue} value="9">9</button>
      <button onClick={getValue} value="*">*</button>

      <button onClick={getValue} value="4">4</button>
      <button onClick={getValue} value="5">5</button>
      <button onClick={getValue} value="6">6</button>
      <button onClick={getValue} value="-">-</button>

      <button onClick={getValue} value="1">1</button>
      <button onClick={getValue} value="2">2</button>
      <button onClick={getValue} value="3">3</button>
      <button onClick={getValue} value="+">+</button>

      <button onClick={getValue} value="0">0</button>
      <button onClick={back} >Back</button>
      <button onClick={calculate} value="=">=</button>
      <button onClick={getValue} value="/">/</button>
      <button id="acbtn" onClick={clear}>AC</button>
    </div>
  );
};

export default Calculator;
