import { Layout, Row, Col, Form, Input, Button } from "antd";
const { Header, Content } = Layout;

import { UserOutlined, LockOutlined } from "@ant-design/icons";

export default function Login() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <div id="login-screen">
        <Layout>
          <Header>
            <a href="/">
              <img src="images/logo-delcampo.png" alt="Logo del campo" />
            </a>
            <a href="">
              <Button type="primary" className="register">
                Registrate
              </Button>
            </a>
          </Header>
          <Content>
            <Row className="login-section">
              <Col>
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                >
                  <h1>Inicia Sesión</h1>

                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Por favor ingresa tu correo",
                      },
                    ]}
                  >
                    <Input
                      type="email"
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Correo"
                    />
                  </Form.Item>

                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Por favor ingresa tu contraseña",
                      },
                    ]}
                  >
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Contraseña"
                    />
                  </Form.Item>

                  <Form.Item>
                    <a className="login-form-forgot" href="">
                      ¿Olvidaste tu contraseña?
                    </a>
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
                    ¿Aún no tienes una cuenta? <a href="">Click aquí.</a>
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
