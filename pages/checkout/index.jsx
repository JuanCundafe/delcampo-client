import { Layout, Row, Col } from "antd";

import Navbar from "../../Components/Navbar";
import MenuFooter from "../../Components/MenuFooter";
import CardShoppingCar from "../../Components/CardShoppingCar";
import CustomButton from "../../Components/CustomButton";

const { Content } = Layout;

export default function Checkout() {
  const [bag, setbag] = useState([]);

  useEffect(async () => {
    const stringBag = await localStorage.getItem("bag");

    if (stringbag) {
      let parsedBag = JSON.parse(stringBag);
      setbag(parsedBag);
    }
  }, []);
  console.log(bag);

  const uiItemBag = bag.map(
    ({ _id, item, precioItem, pesoItem, totalItem, img }) => {
      return (
        <li key={_id} className="bag">
          <CardShoppingCar
            producto={item}
            precio={precioItem}
            peso={pesoItem}
            total={totalItem}
            imagen={img}
          />
        </li>
      );
    }
  );

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
