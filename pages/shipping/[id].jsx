import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import MenuFooter from "../../Components/MenuFooter";
import CardAddress from "../../Components/CardAddress";
import CustomButton from "../../Components/CustomButton";
import PaypalBtn from "../../Components/PaypalButton";
import { GetShipping } from "../../lib/services";
import { Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

import { getCookie } from "../../lib/session";
import { session, redirectIfNotAuthenticated } from "../../lib/auth";

function Shipping({ jwt, userinfo }) {
  const [result, setResult] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchAddress() {
      const viz = localStorage.getItem("token");
      try {
        const response = await GetShipping(jwt);
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

  const printselect = (id) => {
    const card = result.filter((card) => card._id == id);
    setResult(card);
  };

  const cardShipping = result.map((data) => {
    const { city, colonia, postal_code, state, street, name, _id } = data;
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
    return (
      <CardAddress
        address={direccion}
        title={name}
        btnSelect={true}
        key={_id}
        id={_id}
        callback={printselect}
      />
    );
  });

  const handleClick = () => {
    router.push("/address");
  };

  const handleTest = () => {
    console.log("prueba");
  };

  return (
    <>
      <div className="wrapper-shipping-screen">
        <Navbar userinfo={userinfo} />
        <div className="container-shipping">
          <Row>
            <div>
              <h1>2. Dirección de envio</h1>
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

          <Row className="shipping-row-address-btn">
            <Col className="shipping-col-address-btn">
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
            </Col>
          </Row>
          <Row>
            <div>
              <h1>3. Realiza tu pago</h1>
            </div>
          </Row>
          <Row className="shipping-row-paypal-btn">
            <Col className="shipping-col-paypal-btn">
              <div className="shipping-paypal-btn">
                <PaypalBtn onClick={handleTest} />
              </div>
            </Col>
          </Row>

          <MenuFooter />
        </div>
      </div>
    </>
  );
}

Shipping.getInitialProps = async (ctx) => {
  if (redirectIfNotAuthenticated(ctx)) {
    return {};
  }

  const jwt = getCookie("jwt", ctx.req);
  const userInfo = await session(jwt);

  return {
    jwt,
    userinfo: userInfo.data.user,
  };
};

export default Shipping;
