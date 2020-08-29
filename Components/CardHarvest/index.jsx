import { Card, Avatar, Row, Col } from 'antd';

export default function CardHarvest ({ product, price, description, picture }) {
  const { Meta } = Card
  return (
    <>
      <div className='wrapper-cardHarvest'>
        <Card
          hoverable
          className='card-harvest'
          cover={
            <img className='cardHarvest-img' alt='example' src={picture} />
          }
        >
          <Meta
            className='meta-cardHarvest module overflow'
            title={product}
            description={description}
          />
          <Row className='productor-cardHarvest'>
            <Avatar
              className='avatar-cardHarvest'
              src='images/avatar-test.png'
            />
            <Meta description='Frutas y verduas' />
            <Col className='col-precio-cardHarvest'>
              <Meta className='precio-cardHarvest' description={price} />
            </Col>
          </Row>
        </Card>
      </div>
    </>
  )
}
