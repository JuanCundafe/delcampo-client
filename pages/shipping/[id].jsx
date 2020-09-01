import React, { useState, useEffect } from "react";
import NavBar from "../../Components/NavBar";
import MenuFooter from "../../Components/MenuFooter";
import CardAddress from "../../Components/CardAddress";
import CustomButton from "../../Components/CustomButton";
import { GetShipping } from "../../lib/services";
import { Row } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

export default function Shipping() {
  const [result, setResult] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchAddress() {
      const viz =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNDliN2Y3YjE1MjI3MDA3ZTA5NTA4NyIsImlhdCI6MTU5ODg5ODMxMCwiZXhwIjoxNTk5MDcxMTEwfQ.dTgbhZJTyDMPHkhd4E65FpNHoDkt552CoZBIiYS0LLc";
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
      city +
      " " +
      ",  " +
      state +
      "\nCalle " +
      street +
      "\n" +
      "  Col. " +
      colonia +
      "  CP " +
      postal_code;
    return <CardAddress address={direccion} title={name} />;
  });

  const handleClick = () => {
    router.push("/address/5f49b7f7b15227007e095087");
  };

  return (
    <>
      <div className="wrapper-shipping-screen">
        <NavBar title="Carrito" />
        <div className="container-shipping">
          <Row>
            <div>
              <h2>2.Dirección de envio</h2>
            </div>
          </Row>
          <div className="product-section-cardsHarvest">
            <div className="container-cards-list">
              <Row className="product-row-sections">
                <ul className="hs full">
                  {Object.keys(cardShipping) ? cardShipping : null}
                </ul>
              </Row>
            </div>
          </div>
          <div className="btn-uno">
            <CustomButton
              icon={<PlusOutlined />}
              btnStyle="btn-orange"
              className="btn-another-address"
              callback={handleClick}
            >
              Agregar otra Dirección
            </CustomButton>
          </div>
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
              <CustomButton
                btnStyle="btn-orange"
                className="btn-shipping"
                callback={handleClick}
              >
                Agregar otra Dirección
              </CustomButton>
            </div>
          </Row>

          <MenuFooter />
        </div>
      </div>
    </>
  );
}
