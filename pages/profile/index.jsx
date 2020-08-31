import { Layout, Row, Col, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import Navbar from "../../Components/Navbar";
import MenuFooter from "../../Components/MenuFooter";
import CardAddress from "../../Components/CardAddress";

const { Content } = Layout;

export default function Profile() {
  return (
    <div>
      <Layout>
        <Navbar />
        <Content className="profile-container" orientation="left">
          <Row>
            <Col
              className="image-container"
              xs={{ span: 20, offset: 2 }}
              lg={{ span: 4 }}
            >
              <Avatar size={110} src="images/avatar-test.png" />
              <p>CAMBIAR FOTO</p>
              <h1>Ernestino</h1>
              <p className="last-name">Flores Martínez</p>
              <p>Productor</p>
            </Col>
            <Col
              className="contact-container"
              xs={{ span: 20, offset: 2 }}
              lg={{ span: 6 }}
            >
              <CardAddress
                phone="9999999999"
                email="email@gmail.com"
                address="Tlaxiaco, Oaxaca"
                title="Contacto"
              />
            </Col>
            <Col
              className="address-container"
              xs={{ span: 20, offset: 2 }}
              lg={{ span: 6 }}
            >
              <CardAddress
                phone="9999999999"
                email="email@gmail.com"
                address="Tlaxiaco, Oaxaca"
                title="Dirección"
              />
            </Col>
          </Row>
          <div className="base" />
        </Content>
        <MenuFooter />
      </Layout>
    </div>
  );
}
