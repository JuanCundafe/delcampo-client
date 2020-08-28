import React, { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";

import CustomInput from "../../Components/CustomInput";

// Services
import { signUp } from "../../lib/services.js";

import {
  Layout,
  Row,
  Col,
  Form,
  Input,
  Button,
  Radio,
  Checkbox,
  InputNumber,
} from "antd";
const { Header, Content } = Layout;
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";

export default function Register() {
  const [form] = Form.useForm();
  // const [checkNick, setCheckNick] = useState(false);

  // useEffect(() => {
  //   form.validateFields(["privacy"]);
  // }, [checkNick]);

  // const onCheckboxChange = (e) => {
  //   setCheckNick(e.target.checked);
  // };

  const onFinish = async (values) => {
    try {
      const response = await signUp(values);

      if (!response.success) {
        console.log("Error: ", response.error);
        return;
      }

      console.log("response", response.data);
      form.resetFields();
      Router.push("/home");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <div id="register-screen">
        <Layout>
          <Header>
            <Link href="/">
              <a>
                <img src="images/logo-delcampo.png" alt="Logo del campo" />
              </a>
            </Link>
            <Link href="/login">
              <a>
                <Button type="primary" className="register">
                  Inicia Sesión
                </Button>
              </a>
            </Link>
          </Header>
          <Content>
            <Row className="login-section">
              <Col className="register-form">
                <h1>Regístrate</h1>
                <Form
                  form={form}
                  name="normal_login"
                  className="login-form"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                >
                  <CustomInput
                    type="text"
                    placeholder="Nombre"
                    icon={<UserOutlined className="site-form-item-icon" />}
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Por favor ingresa tu usuario",
                      },
                    ]}
                  />

                  <Form.Item
                    name="age"
                    rules={[
                      {
                        type: "number",
                        min: 18,
                        max: 99,
                        required: true,
                        message: "Debes ser mayor de edad",
                      },
                    ]}
                  >
                    <InputNumber placeholder="Edad" />
                  </Form.Item>

                  <CustomInput
                    type="email"
                    placeholder="Correo"
                    icon={<MailOutlined className="site-form-item-icon" />}
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Por favor ingresa tu correo",
                      },
                    ]}
                  />

                  <CustomInput
                    type="password"
                    placeholder="Contraseña"
                    icon={<LockOutlined className="site-form-item-icon" />}
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Por favor ingresa tu contraseña",
                      },
                    ]}
                  />

                  <Form.Item
                    name="confirm"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Por favor confirma tu contraseña",
                      },
                      ({ getFieldValue }) => ({
                        validator(rule, value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            "Las contraseñas son diferentes"
                          );
                        },
                      }),
                    ]}
                  >
                    <Input.Password
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      placeholder="Repetir contraseña"
                    />
                  </Form.Item>

                  <Form.Item
                    name="role"
                    rules={[
                      {
                        required: true,
                        message: "Por favor elige el tipo de usuario",
                      },
                    ]}
                  >
                    <Radio.Group>
                      <Radio value="Productor">Productor</Radio>
                      <Radio value="Comprador">Comprador</Radio>
                    </Radio.Group>
                  </Form.Item>

                  {/* <Form.Item>
                    <Checkbox
                      name="privacy"
                      checked={checkNick}
                      onChange={onCheckboxChange}
                    >
                      Términos y Condiciones
                    </Checkbox>
                  </Form.Item> */}

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      Aceptar
                    </Button>
                  </Form.Item>

                  <Form.Item>
                    <Link href="/login">
                      <a>Ya tienes una cuenta? Click Aquí</a>
                    </Link>
                  </Form.Item>
                </Form>
              </Col>
              <Col className="img-welcome">
                <img src="images/welcome-img.png" alt="Logo del campo" />
              </Col>
            </Row>
          </Content>
        </Layout>
      </div>
    </>
  );
}
