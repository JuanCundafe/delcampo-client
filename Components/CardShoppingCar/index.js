import { Typography, Col, Row, Space, Avatar } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

const { Text } = Typography

function CardShoppingCar () {
  return (
    <div>
      <div>
        <div className='card'>
          <Row>
            <Col span={12}>
              <img
                className='imageCardCar'
                src='https://camposdeazahar.es/wp-content/uploads/2019/02/puedo-comer-naranja-si-soy-diabetico-campos-de-azahar.jpg'
              />
            </Col>
            <Col span={10}>
              <br />
              <Text className='titleCard'>Naranjas Navalentes</Text>
              <br />
              <div>
                <Avatar
                  size={20}
                  src='https://us.123rf.com/450wm/aldonat/aldonat1603/aldonat160300060/53859207-logotipo-de-la-fruta.jpg?ver=6'
                />
                <Text className='productor' type='secondary'>
                  Fran Frutería
                </Text>
              </div>
            </Col>
            <Col span={2}>
              <CloseCircleOutlined className='close' />
            </Col>
          </Row>
          <Row className='space-align-container'>
            <Col span={13} className='space-align-block'>
              <Space align='center'>
                <br />
                <Text className='texto3' strong>
                  $10.00 / Kg x 100Kg
                </Text>
              </Space>
            </Col>
            <Col span={11}>
              <Text className='texto4' strong>
                Total: $1000.00
              </Text>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default CardShoppingCar
