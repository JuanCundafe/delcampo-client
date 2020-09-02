import { useState } from "react";
import { addProduct } from "../../../lib/services.js";

import { Form, Input, Button } from "antd";

import CustomSelect from "../../../Components/CustomSelect";
import CustomInput from "../../../Components/CustomInput";

export default function UploadProduct() {
  const [category, setCategory] = useState("");
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    values["category"] = category;
    console.log(values, category);

    try {
      const response = await addProduct(
        values,
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNDkyN2U1NDgyZjhhMDA3NjU2YzhlNyIsImlhdCI6MTU5ODczODU4MSwiZXhwIjoxNTk4OTExMzgxfQ.w8rOGCpuehB8upksvXnKBWG00fcwFgm5ckSwrItmgqY"
      );

      if (!response.success) {
        console.log("Error: ", response.error);
        return;
      }

      console.log("response", response.data);
      //form.resetFields();
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleCustomSelect = (values) => {
    console.log(values);
    setCategory(values);
  };
  return (
    <Form
      form={form}
      name="normal_login"
      className="nameHarvest"
      onFinish={onFinish}
    >
      <p>Nombre del producto:</p>
      <CustomInput
        placeholder="Ej: Fresas"
        name="name"
        rules={[
          {
            required: true,
            message: "Por favor ingresa el nombre del producto",
          },
        ]}
      />
      <p>Elige la categoría</p>
      <CustomSelect callback={handleCustomSelect} />
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Guardar
        </Button>
      </Form.Item>
    </Form>
  );
}
