import { Select, Row, Col } from 'antd';

const { Option } = Select
export default function InputKilograms ({ callback }) {
  function handleChange (value) {
    console.log(`selected ${value}`)
    callback(value)
  }
  return (
    <>
      <Row>
        <Col span={12} xs={24} sm={12}>
          <div className='container-kilograms'>
            <Select
              name='category'
              className='custo-select'
              defaultValue=''
              onChange={handleChange}
            >
              <Option value='Frutas'>Frutas</Option>
              <Option value='Vainas'>Vainas</Option>
              <Option value='Flores'>Flores</Option>
              <Option value='Verduras'>Verduras</Option>
              <Option value='Raíces'>Raices</Option>
            </Select>
          </div>
        </Col>
      </Row>
    </>
  )
}
