import React, { useState, useEffect } from "react";

export default function InputKilograms({callback}) {
  const [count, setCount] = useState(100);
  
  const handleDecrementClick = () => setCount(count - 1);

  const handleIncreaseClick = () => setCount(count + 1);
  
  const handleNumberChange = (event) => setCount(parseInt(event.target.value));

  useEffect(()=>{
    document.getElementById("input-kilograms").value = count;
    callback(count)
  },[count])

  return (
    <>
      <div className="contai  nerKilograms">
        <div className="containerFormKilogram">
          <button
            type="button"
            className="btnKilogram-green"
            onClick={handleDecrementClick}
          >
            -
          </button>

          <input
            id="input-kilograms"
            className="inputKilograms"
            onChange={handleNumberChange}
            name="count"
            type="number"
          />

          <button
            type="button"
            className="btnKilogram-green"
            onClick={handleIncreaseClick}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}
