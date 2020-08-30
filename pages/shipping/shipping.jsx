import React, { useState, useEffect } from "react";
import NavBar from "../../Components/NavBar";
import MenuFooter from "../../Components/MenuFooter";
import CardAddress from "../../Components/CardAddress";
import CustomButton from "../../Components/CustomButton";
import { GetShipping } from "../../lib/services";
import { Row } from "antd";

export default function Shipping() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function fetchAddress() {
      const viz =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNGIwM2MxMmUwMWZhYmEwZmU5Y2EzNiIsImlhdCI6MTU5ODc1MTcwOCwiZXhwIjoxNTk4OTI0NTA4fQ.hZp8_DI26eaWIVPn8o6mW4phOUREB5fKvgxxaImFiEY";
      try {
        const response = await GetShipping(viz);
        const { data } = response;
        const { address } = data;
        setResult([...address]);

        console.log(cardShipping);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAddress();
  }, []);
  const cardShipping = result.map((data) => {
    const { city, colonia, postal_code, state, street, name } = data;
    const direccion =
      city + "  " + colonia + "  " + state + "  " + street + "  " + postal_code;
    return <CardAddress address={direccion} title={name} />;
  });

  return (
    <>
      <NavBar title="Carrito" />
      <div className="container-shipping">
        <Row>
          <div>
            <h2>2.Dirección de envio</h2>
          </div>
        </Row>
        <Row>
          <div className="container-card-shippin">
            <Row>
              <div id="cont-card" className="wrapper">
                <ul className="li-shipping ">{cardShipping}</ul>
              </div>
            </Row>
            <div className="btn-uno">
              <CustomButton
                btnStyle="btn-orange"
                className="btn-another-address"
              >
                Agregar otra Dirección
              </CustomButton>
            </div>
          </div>
        </Row>
        <Row>
          <div>
            <h2>3. Metodo de pago</h2>
          </div>
        </Row>
        <Row>
          <div>
            <button>PayPal</button>
          </div>
        </Row>
        <Row>
          <div className="btn-dos">
            <CustomButton btnStyle="btn-orange" className="btn-shipping">
              Agregar otra Dirección
            </CustomButton>
          </div>
        </Row>

        <MenuFooter />
      </div>
    </>
  );
}
