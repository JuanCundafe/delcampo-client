import {
  Layout,
  Anchor,
  Row,
  Col,
  Form,
  Input,
  Button,
  Radio,
  Checkbox,
} from "antd";

const { Header, Content } = Layout;
const { Link } = Anchor;

import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";

export default function Register() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <div id="register-screen">
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
              <Col className="register-form">
                <h1>Regístrate</h1>
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                >
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Por favor ingresa tu usuario",
                      },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="site-form-item-icon" />}
                      placeholder="Username"
                    />
                  </Form.Item>
                  <Form.Item
                    name="mail"
                    rules={[
                      {
                        required: true,
                        message: "Por favor ingresa tu correo",
                      },
                    ]}
                  >
                    <Input
                      prefix={<MailOutlined className="site-form-item-icon" />}
                      placeholder="Mail"
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
                      placeholder="Password"
                    />
                  </Form.Item>
                  <Form.Item
                    name="repeat-password"
                    rules={[
                      {
                        required: true,
                        message: "Por favor ingresa nuevamente tu contraseña",
                      },
                    ]}
                  >
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Repeat Password"
                    />
                  </Form.Item>
                  <Radio.Group>
                    <Radio value={1}>Productor</Radio>
                    <Radio value={2}>Comprador</Radio>
                  </Radio.Group>
                  <Form.Item>
                    <Checkbox>Términos y Condiciones</Checkbox>
                  </Form.Item>
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
                    <a>Ya tienes una cuenta? Click Aquí</a>
                  </Form.Item>
                </Form>
              </Col>
              <Col className="img-welcome">
                <img src="images/welcome-register.png" alt="Logo del campo" />
              </Col>
            </Row>
          </Content>
        </Layout>
      </div>
    </>
  );
}
