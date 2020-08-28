import { Row, Col, Card, Typography, Space, Avatar } from 'antd';
import Search from '../../Components/Search';
import CustomButton from '../../Components/CustomButton';
import Categories from '../../Components/Categories';
// import CustomButton from "../../Components/CustomButton";
// import Categories from "../../Components/Categories";
const { Meta } = Card

export default function Product () {
  return (
    <>
      <div className='product-wrapper'>
        <div>
          <Row className='navbar-product'>
            <Col span={3}>
              {' '}
              <a>
                <img src='images/logo-navbar.png' width='35' height='35' />{' '}
              </a>
            </Col>
            <Col xs={{ order: 3 }} sm={{ order: 2 }}>
              <Search />
            </Col>
            <Col
              className='product-header-btns'
              xs={{ span: 14, order: 2 }}
              sm={{ span: 4, order: 3 }}
            >
              {' '}
              <div>
                {' '}
                <CustomButton btnStyle='btn-orange-login'>
                  Iniciar Sesión
                </CustomButton>
              </div>
              <div>
                <CustomButton btnStyle='btn-outline-orange-signup'>
                  Regístrate
                </CustomButton>
              </div>
            </Col>
          </Row>
        </div>
        <div />
        <div className='product-btns-navigation-category'>
          <Row>
            <Col md={{ span: 1 }}>
              <Categories />
            </Col>
            <Col
              className='product-btns-center-populares'
              xs={{ span: 3, offset: 3 }}
              md={{ span: 2, offset: 4 }}
            >
              <CustomButton btnStyle='btn-product-anchors-center'>
                Populares
              </CustomButton>
            </Col>
            <Col xs={{ span: 3, offset: 3 }} md={{ span: 2, offset: 0 }}>
              <CustomButton btnStyle='btn-product-anchors-center'>
                Temporada
              </CustomButton>
            </Col>
            <Col xs={{ span: 3, offset: 3 }} md={{ span: 2, offset: 0 }}>
              <CustomButton btnStyle='btn-product-anchors-center'>
                Ofertas
              </CustomButton>
            </Col>
            <Col xs={{ span: 3, offset: 3 }} md={{ span: 2, offset: 6 }}>
              <CustomButton btnStyle='btn-product-anchors-aboutus'>
                About us
              </CustomButton>
            </Col>
          </Row>
        </div>
        <Row className='product-row-infocards' justify='center'>
          <Col
            className='product-col-infocards'
            xs={{ span: 22, offset: 2 }}
            sm={{ span: 10, offset: 1 }}
          >
            <div className='product-card'>
              <Row justify='space-around' align='middle'>
                <Col span={10}>
                  <img
                    className='image-product-card'
                    src='images/productor.png'
                  />
                </Col>
                <Col span={12}>
                  {' '}
                  <Meta className='product-card-title' title='Productor' />{' '}
                  <Meta
                    className='product-card-description'
                    description='Como productor tu puedes publicar tus cosechas y productos, vender por kilo, llevar tus productos, hacer contactos y vender en muchos lugares más.'
                  />
                </Col>
              </Row>
            </div>
          </Col>
          <Col
            className='product-col-infocards'
            xs={{ span: 22, offset: 2 }}
            sm={{ span: 10, offset: 0 }}
          >
            <div className='product-card'>
              <Row justify='space-around' align='middle'>
                <Col span={10}>
                  <img
                    className='image-product-card'
                    src='images/comprador.png'
                  />
                </Col>
                <Col span={12}>
                  {' '}
                  <Meta className='product-card-title' title='Comprador' />{' '}
                  <Meta
                    className='product-card-description'
                    description='Como comprador puedes conseguir productos frescos de primera mano con el productor, comprar para tu restaurante, cocina, y apoyar a los productores. '
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <div className='product-footer'>
          <Row>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              className='product-text-footer-container'
            >
              <div>
                <img
                  className='product-logo-footer'
                  src='images/logo-desktop-navbar.png'
                />
              </div>
              <Meta
                className='product-text-footer'
                description='Del Campo nació como un proyecto para apoyar a los agricultores mexicanos, usando una plataforma en la que puedan vender sus productos y cosechas a todo el país, creando un entorno en el que el cliente tiene trato directo con el productor y pueda obtener producto fresco de primera.'
              />
              <Meta
                className='product-text-footer'
                description='Del Campo se une para apoyar la economía mexicana y hacer que crezca la venta de productos locales.'
              />
            </Col>
            <Col sm={{ span: 12 }}>
              {' '}
              <img
                className='product-img-footer'
                src='images/footer-image.png'
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}
