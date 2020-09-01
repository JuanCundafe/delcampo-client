import { Typography, Col, Row, Space, Avatar } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

const { Text } = Typography

function CardShoppingCar ({ producto, precio, peso, imagen, total }) {
  return (
    <div>
      <div>
        <div className='card'>
          <Row>
            <Col span={12}>
              <img className='imageCardCar' src={imagen} />
            </Col>
            <Col span={10}>
              <br />
              <Text className='titleCard'>{producto}</Text>
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
                  ${precio} / Kg x {peso}Kg
                </Text>
              </Space>
            </Col>
            <Col span={11}>
              <Text className='texto4' strong>
                Total: ${total}.00
              </Text>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default CardShoppingCar
