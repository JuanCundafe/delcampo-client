import { Select, Row, Col } from "antd";

const { Option } = Select;
export default function InputKilograms() {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <>
      <Row>
        <Col span={12} xs={24} sm={12}>
          <div className="container-kilograms">
            <Select
              className="custo-select"
              defaultValue=""
              onChange={handleChange}
            >
              <Option value="frutas">Frutas</Option>
              <Option value="vainas">Vainas</Option>
              <Option value="flores">Flores</Option>
              <Option value="verduras">Verduras</Option>
            </Select>
          </div>
        </Col>
      </Row>
    </>
  );
}
