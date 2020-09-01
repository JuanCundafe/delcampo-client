import { Layout, Row, Col } from "antd";
import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import MenuFooter from "../../Components/MenuFooter";
import CardShoppingCar from "../../Components/CardShoppingCar";
import CustomButton from "../../Components/CustomButton";
import { useRouter } from "next/router";

const { Content } = Layout;

export default function Checkout() {
  const [bag, setbag] = useState([]);
  const [image, showImage] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const stringBag = localStorage.getItem("bag");

    if (stringBag) {
      const parsedBag = JSON.parse(stringBag);
      setbag(parsedBag);
    }
  }, []);

  const handlerShowImage = () => showImage(true);

  const uiItemBag = bag.map(
    ({ _id, item, precioItem, pesoItem, total, img }) => {
      return (
        <li key={_id} className="bag">
          <CardShoppingCar
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

  const handleClick = () => {
    router.push("/shipping/5f49b7f7b15227007e095087");
  };

  return (
    <div>
      <Layout>
        <Navbar />
        <Content className="container-checkout">
          <Row>
            <Col xs={{ span: 20, offset: 2 }} lg={{ span: 24 }}>
              <div className="container-cardShoppingCard">
                <h1>1. Carrito de Compras</h1>
                <Row>
                  <Col>{uiItemBag}</Col>
                </Row>
                <h3 className="total-cardShoppingCar">Total: $ 3000.00</h3>
              </div>
              <div className="btn_aceptar">
                <CustomButton callback={handlerShowImage}>Aceptar</CustomButton>
              </div>
            </Col>
          </Row>
          {image && (
            <Row>
              <Col xs={{ span: 20, offset: 2 }} lg={{ span: 16, offset: 2 }}>
                <div className="container-image">
                  <h2>¡Su pedido está listo!</h2>
                  <img
                    style={{
                      width: "40%",
                    }}
                    src="images/fruit_box_1.png"
                  />
                  <p>Usted pagará:</p>
                  <h3>Total: $ 3000.00</h3>
                  <CustomButton callback={handleClick}>
                    Elegir dirección de Envio
                  </CustomButton>
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
