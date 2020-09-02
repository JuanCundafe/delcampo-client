import React, { useState } from "react";
import Link from "next/link";
// import Router from "next/router";

import CustomInput from "../../Components/CustomInput";

// Services
import { signUp } from "../../lib/auth.js";
import redirect from "../../lib/redirect.js";
import { setCookie } from "../../lib/session.js";

import {
  Layout,
  Row,
  Col,
  Form,
  Input,
  Button,
  Radio,
  InputNumber,
} from "antd";
const { Header, Content } = Layout;
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";

export default function Register() {
  const [form] = Form.useForm();
  const [loadings, setLoadings] = useState(false);

  const onFinish = async (values) => {
    setLoadings(true);
    let result = await signUp(values);
    // console.log(result);
    // if (result == "users validation failed: email: El usuario ya existe") {
    //   toast.error("¡El usuario ya existe!", {
    //     position: toast.POSITION.TOP_RIGHT,
    //   });
    // }

    if (!result.success) {
      setLoadings(false);

      toast.error(result.error, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      setLoadings(false);

      toast.success("¡¡Usuario creado con éxito!!", {
        position: toast.POSITION.TOP_RIGHT,
      });

      setCookie("userinfo", result.data);
      redirect("/login");
      return null;
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
            <ToastContainer />
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

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      loading={loadings}
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
