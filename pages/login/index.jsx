import Link from "next/link";
import Router from "next/router";
// import React, { useForm } from "react";

// Components
import CustomInput from "../../Components/CustomInput";

// Services
import { signIn } from "../../lib/services.js";

// ANT Design
import { Layout, Row, Col, Form, Button } from "antd";
const { Header, Content } = Layout;
import { UserOutlined, LockOutlined } from "@ant-design/icons";

export default function Login() {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const response = await signIn(values);

      if (!response.success) {
        alert(response.error);
        return;
      }

      const accessToken = response.data.token;
      localStorage.setItem("token", accessToken);
      form.resetFields();
      Router.push("/home");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <div id="login-screen">
        <Layout>
          <Header>
            <Link href="/">
              <a>
                <img src="images/logo-delcampo.png" alt="Logo del campo" />
              </a>
            </Link>
            <Link href="/register">
              <a>
                <Button type="primary" className="register">
                  Regístrate
                </Button>
              </a>
            </Link>
          </Header>
          <Content>
            <Row className="login-section">
              <Col>
                <Form
                  form={form}
                  name="normal_login"
                  className="login-form"
                  // initialValues={{ remember: true }}
                  onFinish={onFinish}
                >
                  <h1>Inicia Sesión</h1>

                  <CustomInput
                    type="email"
                    placeholder="Correo"
                    icon={<UserOutlined className="site-form-item-icon" />}
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

                  <Form.Item>
                    <Link href="/">
                      <a className="forgot-pass">¿Olvidaste tu contraseña?</a>
                    </Link>
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      Ingresar
                    </Button>
                  </Form.Item>

                  <p className="login-form-forgot">
                    ¿Aún no tienes una cuenta?{" "}
                    <Link href="/register">
                      <a>Click aquí.</a>
                    </Link>
                  </p>
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
