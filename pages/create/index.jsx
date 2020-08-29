import {
  Layout,
  Upload,
  message,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
} from "antd";

import Navbar from "../../Components/Navbar";
import MenuFooter from "../../Components/MenuFooter";
import CustomSelect from "../../Components/CustomSelect";
import CustomButton from "../../Components/CustomButton";

const { Header, Content, Footer } = Layout;
const { TextArea } = Input;

export default function Create() {
  return (
    <div>
      <Layout>
        <Navbar />
        <Content>
          <Row>
            <Col xs={{ span: 20, offset: 2 }} md={{ span: 16, offset: 4 }}>
              <p>Agrega una foto interesante de tu cosecha</p>
              <div className="uploadImage">
                <h1>Upload image</h1>
              </div>
              <p>Elige un producto o agrega uno</p>
              <div className="uploadComponent">
                <h1> Componente Vis</h1>
              </div>
              <br />
              <CustomButton>+ Agregar Productos</CustomButton>
              <p>Describe tu cosecha:</p>
              <TextArea rows={6} />
              <p>Precio por kilogramo</p>
              <div style={{ marginBottom: 16, width: "70%" }}>
                <Input
                  className="kilogramos"
                  addonBefore="$"
                  addonAfter="Kg"
                  defaultValue=" "
                />
              </div>
              <p>Kilogramos disponibles de la cosecha</p>
              <div className="uploadComponent">
                <h1> Componente Vis</h1>
              </div>
              <p>Fecha límite de venta de la cosecha</p>
              <DatePicker style={{ width: "100%" }} />
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
