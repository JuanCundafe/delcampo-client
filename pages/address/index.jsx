import FormAddress from "../../Components/FormAddress";
import CustomButton from "../../Components/CustomButton";
import { LeftOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import NavBar from "../../Components/Navbar";
import MenuFooter from "../../Components/MenuFooter";
import { updateAddress, addAddress } from "../../lib/services";

import { getCookie } from "../../lib/session";
import { session, redirectIfNotAuthenticated } from "../../lib/auth";

const handler = null;

function Address({ jwt, userinfo }) {
  const saveAddress = async (data) => {
    data.user = userinfo._id;
    console.log(data);
    const response = await addAddress(data, jwt);
    console.log("response", response);
    // async function fetchAddress(data, token) {
    //   console.log(response);
    // }
    // fetchAddress();
  };

  return (
    <div className="Container-Address-page">
      <div className="address-navbar">
        <NavBar />
      </div>
      <div className="address-form-address-header">
        <h3>Dirección</h3>
      </div>
      <CustomButton
        icon={<LeftOutlined />}
        btnStyle="btn-orange-address-return"
        callback={handler}
      />
      <Row justify="space-around" align="middle" className="address-row">
        <Col xs={{ span: 24 }} md={{ span: 17 }}>
          <FormAddress callback={saveAddress} />
        </Col>
      </Row>
      <MenuFooter />
    </div>
  );
}

Address.getInitialProps = async (ctx) => {
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

export default Address;
