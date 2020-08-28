import { Input, Radio, Checkbox, Row, Col, Typography } from "antd";
import CustomButton from "../../Components/CustomButton";
import Navbar from "../../Components/Navbar";

const App = () => (
  <Radio.Group size="medium" name="radiogroup" defaultValue={1}>
    <Radio value={1}>Productor</Radio>
    <Radio value={2}>Comprador</Radio>
  </Radio.Group>
);

const { Link } = Typography;

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

export default function Register() {
  return (
    <div className="register-background">
      <Navbar />
      <div className="register-container">
        <div className="register-title">
          <h2>Regístrate</h2>
        </div>
        <div className="register-body">
          <Row>
            <Col span={20} offset={2}>
              <p>Nombre:</p>
              <Input gray-5 placeholder="" />
              <p>Correo:</p>
              <Input gray-5 placeholder="" />
              <p>Contraseña:</p>
              <Input gray-5 placeholder="" />
              <p>Repetir Contraseña:</p>
              <Input gray-5 placeholder="" />
            </Col>
          </Row>
          <Row justify="center">
            <Col span={20} offset={4}>
              <App />
            </Col>
          </Row>
          <Row>
            <Col span={20} offset={4}>
              <Checkbox onChange={onChange}>Términos y Condiciones</Checkbox>
            </Col>
          </Row>
        </div>
        <div className="register-button">
          <CustomButton btnStyle="btn-orange">Aceptar</CustomButton>
        </div>
        <Row>
          <Col span={14} offset={5}>
            <a href="https://ant.design" target="_blank">
              ¿Ya tienes una cuenta? Click aqui.
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
}
