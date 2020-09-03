import { Input, Row, Col, Form, Button } from "antd";
import React, { useState, useEffect } from "react";
// import CustomButton from "../CustomButton";
import { getAddressById } from "../../lib/services";

function FormUpdate({ callback, id, jwt }) {
  console.log(jwt);
  const onFinish = (values) => {
    callback(values);
  };
  // console.log(id)
  const [datosAddress, setDatosAddress] = useState([]);
  const [form] = Form.useForm();
  // const [Id] = useState(id);

  useEffect(() => {
    async function obtenerAddress() {
      const response = await getAddressById(id, jwt);
      const { data } = response;
      const { address } = data;
      setDatosAddress(address);
    }
    obtenerAddress();
  }, [jwt]);

  console.log(datosAddress);

  const {
    name,
    street,
    colonia,
    state,
    city,
    postal_code,
    phone,
    between_street_1,
    between_street_2,
  } = datosAddress;
  form.setFieldsValue({ name: name });
  form.setFieldsValue({ state: state });
  form.setFieldsValue({ city: city });
  form.setFieldsValue({ colonia: colonia });
  form.setFieldsValue({ street: street });
  form.setFieldsValue({ postal_code: postal_code });
  form.setFieldsValue({ phone: phone });
  form.setFieldsValue({ between_street_1: between_street_1 });
  form.setFieldsValue({ between_street_2: between_street_2 });
  return (
    <div className="form-address-container">
      <div className="form-address-header">
        <h3>Dirección</h3>
      </div>
      <Form onFinish={onFinish} form={form}>
        <div className="form-address-body">
          <p>Nombre</p>
          <Form.Item name="name">
            <Input gray-5 />
          </Form.Item>
          <p>Estado:</p>
          <Form.Item name="state">
            <Input gray-5 />
          </Form.Item>
          <p>Municipio / Delegación:</p>
          <Form.Item name="city">
            <Input />
          </Form.Item>
          <p>Colonia:</p>
          <Form.Item name="colonia">
            <Input />
          </Form.Item>
          <p>Calle:</p>
          <Form.Item name="street">
            <Input />
          </Form.Item>
          <Row className="spaceRow">
            <Col span={11}>
              <p>CP:</p>
              <Form.Item name="postal_code">
                <Input />
              </Form.Item>
            </Col>
            <Col span={11} offset={2}>
              <p>Teléfono:</p>
              <Form.Item name="phone">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row className="spaceRow">
            <Col span={11}>
              <p>Entre calle:</p>
              <Form.Item name="between_street_1">
                <Input />
              </Form.Item>
            </Col>
            <Col span={11} offset={2}>
              <p>y calle:</p>
              <Form.Item name="between_street_2">
                <Input />
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

export default FormUpdate;
