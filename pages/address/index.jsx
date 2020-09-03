import { useRouter } from "next/router";

import FormAddress from "../../Components/FormAddress";
import CustomButton from "../../Components/CustomButton";
import NavBar from "../../Components/Navbar";
import MenuFooter from "../../Components/MenuFooter";

import { LeftOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import { ToastContainer, toast } from "react-toastify";

import { addAddress } from "../../lib/services";
import { getCookie } from "../../lib/session";
import { session, redirectIfNotAuthenticated } from "../../lib/auth";

function Address({ jwt, userinfo }) {
  const router = useRouter();

  const saveAddress = async (data) => {
    data.user = userinfo._id;

    const response = await addAddress(data, jwt);

    if (response.success === true) {
      toast.success("¡¡Tu dirección se ha guardado!!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setTimeout(() => {
        router.back();
      }, 2000);
    } else {
      toast.error(result.error, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const handler = () => {
    router.back();
  };

  return (
    <div className="Container-Address-page">
      <ToastContainer />
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
