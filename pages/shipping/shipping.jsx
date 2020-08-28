import NavBar from "../../Components/NavBar";
import CustomButton from "../../Components/CustomButton";
import MenuFooter from "../../Components/MenuFooter";

import { Col, Row, Card } from "antd";

export default function Shipping() {
  return (
    <>
      <NavBar />
      <Row>
        <Col>
          <Row>
            <Col>
              <h2>2.Direccion de envio</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="site-card-border-less-wrapper">
                <Card
                  size="small"
                  title="Small size card"
                  style={{ width: 300 }}
                >
                  <div>
                    <div>
                      <img />
                    </div>
                    <div>
                      <p>Card content</p>
                      <p>Card content</p>
                      <p>Card content</p>
                    </div>
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
          <div>
            <Row>
              <Col>
                <CustomButton />
              </Col>
            </Row>
          </div>
          <Row>
            <Col>
              <div>
                <h2>3. Metodo de pago</h2>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <MenuFooter />
    </>
  );
}
