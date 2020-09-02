import FormAddress from "../../Components/FormAddress";
import CustomButton from "../../Components/CustomButton";
import { LeftOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import Navbar from "../../Components/NavBar";
import MenuFooter from "../../Components/MenuFooter";
import { updateAddress, saveAddress } from "../../lib/services";

const handler = null;

export default function Address() {
  const saveAddress = async (data) => {
    const token = localStorage.getItem("token");
    data.user = id;
    const response = await addAddress(data, token);
    console.log("response", response);
    // async function fetchAddress(data, token) {
    //   console.log(response);
    // }
    // fetchAddress();
  };

  return (
    <div className="Container-Address-page">
      <div className="address-navbar">
        <Navbar />
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
