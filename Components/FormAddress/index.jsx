import { Input, Row, Col, Form, Button } from "antd";
import CustomButton from "../CustomButton";

function FormAddress({ callback }) {
  const [form] = Form.useForm();
  console.log(form);
  const onFinish = (values) => {
    console.log("prueba1");
    console.log(values);
    callback(values);
    form.resetFields();
  };

  return (
    <div className="form-address-container">
      <div className="form-address-header">
        <h3>Dirección</h3>
      </div>
      <Form onFinish={onFinish} form={form}>
        <div className="form-address-body">
          <p>Nombre</p>
          <Form.Item name="name">
            <Input gray-5 placeholder="Casa" />
          </Form.Item>
          <p>Estado:</p>
          <Form.Item name="state">
            <Input gray-5 placeholder="Oaxaca" />
          </Form.Item>
          <p>Municipio / Delegación:</p>
          <Form.Item name="city">
            <Input placeholder="Tlaxiaco" />
          </Form.Item>
          <p>Colonia:</p>
          <Form.Item name="colonia">
            <Input placeholder="Cuatro Caminos" />
          </Form.Item>
          <p>Calle:</p>
          <Form.Item name="street">
            <Input placeholder="Camino real" />
          </Form.Item>
          <Row className="spaceRow">
            <Col span={11}>
              <p>CP:</p>
              <Form.Item name="postal_code">
                <Input placeholder="68000" />
              </Form.Item>
            </Col>
            <Col span={11} offset={2}>
              <p>Teléfono:</p>
              <Form.Item name="phone">
                <Input name="phone" placeholder="55 0000 0000" />
              </Form.Item>
            </Col>
          </Row>
          <Row className="spaceRow">
            <Col span={11}>
              <p>Entre calle:</p>
              <Form.Item name="between_street_1">
                <Input placeholder="Entre camino viejo" />
              </Form.Item>
            </Col>
            <Col span={11} offset={2}>
              <p>y calle:</p>
              <Form.Item name="between_street_2">
                <Input placeholder="y empedrado" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Guardar
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}

export default FormAddress;
