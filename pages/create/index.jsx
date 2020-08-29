import { Layout, Upload, message, Col, Row, Input, DatePicker } from "antd";

import Navbar from "../../Components/Navbar";
import MenuFooter from "../../Components/MenuFooter";
import CustomSelect from "../../Components/CustomSelect";
import CustomButton from "../../Components/CustomButton";
import InputKilograms from "../../Components/InputKilograms";

const { Content } = Layout;
const { TextArea } = Input;

export default function Create() {
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
              <p>Elige el tipo de cosecha</p>
              <CustomSelect />
              <p>Nombre del producto:</p>
              <Input placeholder="Ej: Limón" />
              {/* <CustomButton>+ Agregar Producto</CustomButton> */}
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
