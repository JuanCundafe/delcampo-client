import { Form, Input } from "antd";

function CustomInput({ type, placeholder, label, name }) {
  return (
    <Form.Item>
      <label>{label}</label>
      <Input type={type || "text"} name={name} placeholder={placeholder} />
    </Form.Item>
  );
}

export default CustomInput;
