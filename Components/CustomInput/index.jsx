import { Form, Input } from "antd";

function CustomInput({ type, placeholder, icon, name, rules }) {
  return (
    <Form.Item name={name} rules={rules}>
      <Input type={type} prefix={icon} placeholder={placeholder} />
    </Form.Item>
  );
}

export default CustomInput;
