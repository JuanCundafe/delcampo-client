import { Select, Row, Col } from "antd";
const { Option } = Select;

export default function InputKilograms({ callback }) {
  
  const handleChange = (value) => {
    callback(value);
  }

  return (
    <>
      <Row>
        <Col span={12} xs={24} sm={12}>
          <div className="container-kilograms">
            <Select
              name="category"
              className="custo-select"
              onChange={handleChange}
            >
              <Option value="Frutas">Frutas</Option>
              <Option value="Vainas">Vainas</Option>
              <Option value="Flores">Flores</Option>
              <Option value="Verduras">Verduras</Option>
              <Option value="Raíces">Raices</Option>
            </Select>
          </div>
        </Col>
      </Row>
    </>
  );
}
