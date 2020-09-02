import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Navbar from "../../Components/Navbar";
import MenuFooter from "../../Components/MenuFooter";
import CardShoppingCar from "../../Components/CardShoppingCar";
import CustomButton from "../../Components/CustomButton";

import { getCookie } from "../../lib/session";
import { session, redirectIfNotAuthenticated } from "../../lib/auth";

import { Layout, Row, Col } from "antd";
const { Content } = Layout;

function Checkout({ jwt, userinfo }) {
  const { _id, name, email, role } = userinfo;
  const [bag, setbag] = useState([]);
  const [image, showImage] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const stringBag = localStorage.getItem("bag");

    if (stringBag) {
      const parsedBag = JSON.parse(stringBag);

      let total = parsedBag.reduce((acum, { total }) => {
        return (acum += total);
      }, 0);

      setbag(parsedBag);
      setTotalPrice(total);
    }
  }, []);

  const handlerShowImage = () => showImage(true);

  let uiItemBag = (
    <div className="container-cardShoppingCard">
      <h1>Tu carrito está vacio</h1>
      <img
        style={{
          width: "60%",
        }}
        src="/images/fruit_box_2.png"
      />
    </div>
  );

  if (bag.length) {
    let listItems = bag.map(
      ({ _id, item, precioItem, pesoItem, total, img }, idx) => {
        return (
          <li key={idx} className="bag">
            <CardShoppingCar
              key={_id}
              producto={item}
              precio={precioItem}
              peso={pesoItem}
              total={total}
              imagen={img}
            />
          </li>
        );
      }
    );

    uiItemBag = (
      <Row>
        <Col xs={{ span: 20, offset: 2 }} md={{ span: 16, offset: 4 }}>
          <div className="container-cardShoppingCard">
            <h1>1. Carrito de Compras</h1>
            <div>
              <div>{listItems}</div>
              <h3 className="total-cardShoppingCar">
                Total: $ {totalPrice}.00
              </h3>
              <div className="btn_aceptar">
                <CustomButton callback={handlerShowImage}>Aceptar</CustomButton>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    );
  }

  const handleClick = () => {};

  return (
    <div>
      <Layout>
        <Navbar userinfo={userinfo} />
        <Content className="container-checkout">
          {!image ? (
            <Row>
              <Col xs={{ span: 20, offset: 2 }} md={{ span: 16, offset: 4 }}>
                {uiItemBag}
              </Col>
            </Row>
          ) : (
            <Row>
              <Col xs={{ span: 20, offset: 2 }} lg={{ span: 16, offset: 4 }}>
                <div className="container-image">
                  <h2>¡Su pedido está listo!</h2>
                  <img
                    style={{
                      width: "60%",
                    }}
                    src="/images/fruit_box_1.png"
                  />
                  <p>Usted pagará:</p>
                  <h3>Total: $ {totalPrice}.00</h3>
                  <Link href="/shipping/[id]" as={`/shipping/${_id}`}>
                    <a className="btn-orange">
                      <CustomButton callback={handleClick}>
                        Elegir dirección de Envio
                      </CustomButton>
                    </a>
                  </Link>
                </div>
              </Col>
            </Row>
          )}
        </Content>
        <MenuFooter />
      </Layout>
    </div>
  );
}

Checkout.getInitialProps = async (ctx) => {
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

export default Checkout;
