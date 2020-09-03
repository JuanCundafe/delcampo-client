import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Input, Row, Col, Form, Button } from "antd";
import { ToastContainer, toast } from "react-toastify";

import { getAddressById, updateAddress } from "../../lib/services";

function FormUpdate({ callback, id, jwt }) {
  const [datosAddress, setDatosAddress] = useState([]);
  const [form] = Form.useForm();
  const router = useRouter();
  const addressId = router.query.id;

  const onFinish = async (values) => {
    const reponse = await updateAddress(addressId, values, jwt);

    if (reponse.success === true) {
      toast.success("¡¡Datos actualizados!!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error(result.error, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  useEffect(() => {
    async function obtenerAddress(id, jwt) {
      const response = await getAddressById(id, jwt);
      const { data } = response;
      const { address } = data;
      setDatosAddress(address);
    }
    obtenerAddress(id, jwt);
  }, [id, jwt]);

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
      <ToastContainer />
      <div className="form-address-header">
        <h3>Dirección</h3>
      </div>
      <Form onFinish={onFinish} form={form}>
        <div className="form-address-body">
          <p>Nombre</p>
          <Form.Item name="name">
            <Input />
          </Form.Item>
          <p>Estado:</p>
          <Form.Item name="state">
            <Input />
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
