import FormAddress from "../../Components/FormAddress";
import CustomButton from "../../Components/CustomButton";
import { LeftOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import NavBar from "../../Components/Navbar";
import MenuFooter from "../../Components/MenuFooter";

const handler = null;

export default function Address() {
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
          <FormAddress />
        </Col>
      </Row>
      <MenuFooter />
    </div>
  );
}
