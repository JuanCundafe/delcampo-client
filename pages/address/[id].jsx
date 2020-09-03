import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Row, Col } from "antd";
import { LeftOutlined } from "@ant-design/icons";

import FormUpdate from "../../Components/FormAddress/formUpdate";
import CustomButton from "../../Components/CustomButton";
import NavBar from "../../Components/Navbar";
import MenuFooter from "../../Components/MenuFooter";
import { updateAddress, saveAddress } from "../../lib/services";

import { getCookie } from "../../lib/session";
import { session, redirectIfNotAuthenticated } from "../../lib/auth";

function AddressUpdate({ jwt, userinfo }) {
  const [result, setResult] = useState([]);
  const router = useRouter();
  const [address, setaddress] = useState([]);

  const { _id, name } = userinfo;
  const handlerBackAddress = () => {
    router.back();
  };

  const id = router.query.id;

  const actualizarAddress = async (data) => {
    const response = await updateAddress(id, data);
    console.log("response", response);
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
        callback={handlerBackAddress}
      />
      <Row justify="space-around" align="middle" className="address-row">
        <Col xs={{ span: 24 }} md={{ span: 17 }}>
          <FormUpdate callback={actualizarAddress} jwt={jwt} id={id} />
        </Col>
      </Row>
      <MenuFooter />
    </div>
  );
}

AddressUpdate.getInitialProps = async (ctx) => {
  if (redirectIfNotAuthenticated(ctx)) {
    return {};
  }

  const jwt = getCookie("jwt", ctx.req);
  const userinfo = await session(jwt);
  return {
    jwt,
    userinfo: userinfo.data.user,
  };
};

export default AddressUpdate;
