import { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../Components/Navbar";
import MenuFooter from "../../Components/MenuFooter";
import CardAddress from "../../Components/CardAddress";
import CustomButton from "../../Components/CustomButton";
import PaypalBtn from "../../Components/PaypalButton";

import { Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { GetShipping } from "../../lib/services";
import { getCookie } from "../../lib/session";
import { session, redirectIfNotAuthenticated } from "../../lib/auth";

function Shipping({ jwt, userinfo, addresses }) {
  const [cards, setCards] = useState(addresses);
  const [cardId, setCardId] = useState("");
  const router = useRouter();
  const { _id, name, email, role } = userinfo;

  const printselect = (id) => {
    const card = cards.filter((card) => card._id == id);
    setCards(card);
    setCardId(id);
  };

  const cardShipping = cards.map((data) => {
    const { city, state, street, colonia, postal_code, name, _id } = data;
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

  const handleTest = (response) => {
    console.log(response);
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
                  {addresses.length ? (
                    cardShipping
                  ) : (
                    <h1>No hay direcciones registradas</h1>
                  )}
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
                  Agregar Dirección
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
                <PaypalBtn />
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
  const response = await GetShipping(jwt, userInfo.data.user._id);
  let addresses = [];

  if (response.success === true) {
    addresses = response.data.address;
  }

  return {
    jwt,
    userinfo: userInfo.data.user,
    addresses,
  };
};

export default Shipping;
