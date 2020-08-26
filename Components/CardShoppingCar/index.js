import { Card, Typography, Col, Row, Space } from 'antd';

const { Title, Text } = Typography

function CardShoppingCar () {
  return (
    <div>
      <div>
        <Card hoverable style={{ width: 300, height: 200 }}>
          <Row>
            <Col span={12}>
              <img
                className='imageCardCar'
                width={120}
                height={95}
                src='https://camposdeazahar.es/wp-content/uploads/2019/02/puedo-comer-naranja-si-soy-diabetico-campos-de-azahar.jpg'
              />
            </Col>
            <Col span={12}>
              <Title level={5}>Naranjas Navalentes</Title>
              <Text type='secondary'>Fran Frutas y verduras</Text>
            </Col>
          </Row>
          <hr />
          <div className='space-align-container'>
            <div className='space-align-block'>
              <Space align='center'>
                <br />
                <p>10 MXN / Kg x 50Kg Total: 500 MXN</p>
              </Space>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default CardShoppingCar
