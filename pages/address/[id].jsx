import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Row, Col } from "antd";
import { LeftOutlined } from "@ant-design/icons";

import FormUpdate from "../../Components/FormAddress/formUpdate";
import CustomButton from "../../Components/CustomButton";
import NavBar from "../../Components/Navbar";
import MenuFooter from "../../Components/MenuFooter";
import { updateAddress, saveAddress } from "../../lib/services";

export default function Address() {
  const [result, setResult] = useState([]);
  const router = useRouter();
  const [address, setaddress] = useState([]);
  // const [token, setToken] = useState();
  // console.log(router);

  const handlerBackAddress = () => {
    router.back();
  };

  // useEffect(() => {

  //   setToken(tokencito);
  // }, []);

  const id = router.query.id;

  const actualizarAddress = async (data) => {
    const token = localStorage.getItem("token");
    const response = await updateAddress(id, data, token);
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
        callback={handlerBackAddress}
      />
      <Row justify="space-around" align="middle" className="address-row">
        <Col xs={{ span: 24 }} md={{ span: 17 }}>
          <FormUpdate callback={actualizarAddress} id={id} />
        </Col>
      </Row>
      <MenuFooter />
    </div>
  );
}
