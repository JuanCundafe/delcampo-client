import React, { useState } from "react";
import CustomButton from "../CustomButton";
import { Row, Col } from "antd";

export default function InputKilograms() {
  const [count, setCount] = useState(100);
  const handleDecrementClick = () => {
    setCount(count - 1);
    if (count <= 100) {
      setCount(100);
    }
  };
  const handleIncreaseClick = () => setCount(count + 1);
  const handleNumberChange = (event) => {
    const index = event.target.value.indexOf(" ");
    setCount(parseInt(event.target.value.slice(0, index)));
  };
  const handleFormSubmit = () => {
    // setCount(event);

    event.preventDefault();
    window.localStorage.setItem("Kg", count);
    if (count <= 100) {
      console.log(count, "mal");
      setCount(100);

      console.log(count);
    } else {
      console.log(count, "listo");
    }
  };

  return (
    <Row>
      <Col>
        <div className="containerKilograms">
          <form onSubmit={handleFormSubmit}>
            <div className="containerFormKilogram">
              <button
                type="button"
                className="btnKilogram-green"
                onClick={handleDecrementClick}
              >
                -
              </button>
              <input
                className="inputKilograms"
                min="100"
                onChange={handleNumberChange}
                value={`${count} Kg`}
                name="count"
                type="text"
              />

              <button
                type="button"
                className="btnKilogram-green"
                onClick={handleIncreaseClick}
              >
                +
              </button>
            </div>
            {/* <CustomButton
              type='submit'
              btnStyle='btn-orange'
              callback={handleFormSubmit}
            >
              Seleccionar
            </CustomButton> */}
          </form>
        </div>
      </Col>
    </Row>
  );
}
