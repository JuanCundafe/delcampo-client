import { Card, Avatar, Row, Col } from 'antd';

export default function CardHarvest () {
  const { Meta } = Card
  return (
    <>
      <div className='wrapper-cardHarvest'>
        <Card
          hoverable
          className='card-harvest'
          style={{ width: 230 }}
          cover={<img alt='example' src='images/imagen-prueba-cards.png' />}
        >
          <Meta
            className='meta-cardHarvest module overflow'
            title='Naranjas navelantes'
            description='De Montemorelos para el mundo. Nuestro huerto es único en el cuidado y producción y muchas otras cosas que no caben'
          />
          <Row className='productor-cardHarvest'>
            <Avatar
              className='avatar-cardHarvest'
              src='images/avatar-test.png'
            />
            <Meta description='Frutas y verduas' />
            <Col className='col-precio-cardHarvest'>
              <Meta className='precio-cardHarvest' description='$10 mxn/Kg' />
            </Col>
          </Row>
        </Card>
      </div>
    </>
  )
}
