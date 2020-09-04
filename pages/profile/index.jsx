import { Layout, Row, Col, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import Navbar from "../../Components/Navbar";
import MenuFooter from "../../Components/MenuFooter";
import CardAddress from "../../Components/CardAddress";

import { getCookie } from "../../lib/session";
import { session, redirectIfNotAuthenticated } from "../../lib/auth";

const { Content } = Layout;

function Profile({ jwt, userinfo }) {
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
              <h1>{userinfo.name}</h1>
              <p>{userinfo.role}</p>
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

Profile.getInitialProps = async (ctx) => {
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

export default Profile;
