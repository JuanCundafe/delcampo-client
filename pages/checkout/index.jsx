import { Layout, Row, Col } from "antd";

import Navbar from "../../Components/Navbar";
import MenuFooter from "../../Components/MenuFooter";
import CardShoppingCar from "../../Components/CardShoppingCar";
import CustomButton from "../../Components/CustomButton";

const { Content } = Layout;

export default function Checkout() {
  return (
    <div>
      <Layout>
        <Navbar />
        <Content className="container-checkout">
          <Row>
            <Col xs={{ span: 20, offset: 2 }} lg={{ span: 24 }}>
              <div className="container-cardShoppingCard">
                <h1>1. Carrito de Compras</h1>
                <CardShoppingCar />
                <br />
                <CardShoppingCar />
                <br />
                <CardShoppingCar />
                <br />
                <h3 className="total-cardShoppingCar">Total: $ 3000.00</h3>
              </div>
              <div className="btn_aceptar">
                <CustomButton>Aceptar</CustomButton>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 20, offset: 2 }} lg={{ span: 16, offset: 2 }}>
              <div className="container-image">
                <h2>¡Su pedido está listo!</h2>
                <img
                  style={{
                    width: "80%",
                  }}
                  src="images/fruit_box_1.png"
                />
                <p>Usted pagará:</p>
                <h3>Total: $ 3000.00</h3>
                <CustomButton>Elegir dirección de Envio</CustomButton>
              </div>
            </Col>
          </Row>
        </Content>
        <MenuFooter />
      </Layout>
    </div>
  );
}
