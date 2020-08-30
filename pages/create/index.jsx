import { useState } from "react";

import { Layout, Upload, message, Col, Row, Input, DatePicker } from "antd";

import Navbar from "../../Components/Navbar";
import MenuFooter from "../../Components/MenuFooter";
import CustomButton from "../../Components/CustomButton";
import InputKilograms from "../../Components/InputKilograms";
import UploadProduct from "./components/UploadProduct";

const { Content } = Layout;
const { TextArea } = Input;

export default function Create() {
  const [product, setProduct] = useState(false);
  const handelFormProduct = () => {
    setProduct(true);
  };
  return (
    <div>
      <Layout>
        <Navbar />
        <Content className="container-create">
          <Row>
            <Col xs={{ span: 20, offset: 2 }} md={{ span: 16, offset: 4 }}>
              <p>Agrega una foto interesante de tu cosecha</p>
              <div className="uploadImage">
                <h1>Upload image</h1>
              </div>
              <CustomButton callback={handelFormProduct}>
                + Agregar Producto
              </CustomButton>
              {product && <UploadProduct />}
              <p>Describe tu cosecha:</p>
              <TextArea rows={6} />
              <p>Precio por kilogramo</p>
              <div
                style={{
                  marginBottom: 16,
                  width: "70%",
                }}
              >
                <Input
                  className="kilogramos"
                  addonBefore="$"
                  addonAfter="Kg"
                  defaultValue=" "
                />
              </div>
              <p>Kilogramos disponibles de la cosecha</p>
              <InputKilograms />
              <p>Fecha límite de venta de la cosecha</p>
              <DatePicker style={{ background: "#dfdfe3", width: "100%" }} />
              <br />
              <br />
              <CustomButton>Publicar Cosecha</CustomButton>
              <div className="space" />
            </Col>
          </Row>
        </Content>
        <MenuFooter />
      </Layout>
    </div>
  );
}
