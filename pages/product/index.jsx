import { Row, Col, Card, Button } from 'antd';
import Search from '../../Components/Search';
import CustomButton from '../../Components/CustomButton';
import Categories from '../../Components/Categories';
import CardHarvest from '../../Components/CardHarvest';
import { getHarvest } from '../../lib/services';
import { useState, useEffect } from 'react';
import Link from 'next/link';
// import CustomButton from "../../Components/CustomButton";
// import Categories from "../../Components/Categories";
const { Meta } = Card

export default function Product () {
  const [products, setProducts] = useState([])

  useEffect(async () => {
    const response = await getHarvest()

    if (response.data.harvest) {
      setProducts(response.data.harvest)
    }
  }, [])
  console.log(products)
  const uiCardsPopular = products.map(
    (
      { _id, product: { name }, price, description, picture, tag, weight },
      index
    ) => {
      if (tag == 'populares') {
        return (
          <li key={_id} className='item'>
            <CardHarvest
              product={name}
              price={price}
              description={description}
              picture={picture}
              weight={weight}
            />
          </li>
        )
      }
    }
  )

  const uiCardsTemporada = products.map(
    (
      { _id, product: { name }, price, description, picture, tag, weight },
      index
    ) => {
      if (tag == 'temporada') {
        return (
          <li key={_id} className='item'>
            <CardHarvest
              product={name}
              price={price}
              description={description}
              picture={picture}
              weight={weight}
            />
          </li>
        )
      }
    }
  )

  const uiCardsOferta = products.map(
    (
      { _id, product: { name }, price, description, picture, tag, weight },
      index
    ) => {
      if (tag == 'oferta') {
        return (
          <li key={_id} className='item'>
            <CardHarvest
              product={name}
              price={price}
              description={description}
              picture={picture}
              weight={weight}
            />
          </li>
        )
      }
    }
  )

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
              <a
                href='#populares'
                className='ant-btn btn-product-anchors-center ant-btn-primary'
              >
                Populares
              </a>
            </Col>
            <Col xs={{ span: 3, offset: 3 }} md={{ span: 2, offset: 0 }}>
              <a
                href='#temporada'
                className='ant-btn btn-product-anchors-center ant-btn-primary'
              >
                Temporada
              </a>
            </Col>
            <Col xs={{ span: 3, offset: 3 }} md={{ span: 2, offset: 0 }}>
              <a
                href='#oferta'
                className='ant-btn btn-product-anchors-center ant-btn-primary'
              >
                Ofertas
              </a>
            </Col>
            <Col xs={{ span: 3, offset: 3 }} md={{ span: 2, offset: 6 }}>
              <a
                href='#about-us'
                className='ant-btn btn-product-anchors-aboutus ant-btn-primary'
              >
                About us
              </a>
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
                <Col span={8}>
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
                <Col span={8}>
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
        <div className='product-section-cardsHarvest'>
          <div className='container-cards-list'>
            <Row className='product-row-sections'>
              <p className='product-text-sections' id='populares'>
                Mas populares
              </p>
              <ul className='hs full'>
                {Object.keys(uiCardsPopular) ? uiCardsPopular : null}
              </ul>
            </Row>
            <Row className='product-row-sections'>
              <p className='product-text-sections' id='temporada'>
                En temporada
              </p>
              <ul className='hs full'>
                {Object.keys(uiCardsTemporada) ? uiCardsTemporada : null}
              </ul>
            </Row>
            <Row className='product-row-sections'>
              <p className='product-text-sections' id='oferta'>
                En oferta
              </p>
              <ul className='hs full'>
                {Object.keys(uiCardsOferta) ? uiCardsOferta : null}
              </ul>
            </Row>
          </div>
        </div>
        <div className='product-footer'>
          <Row>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              className='product-text-footer-container'
            >
              <div id='about-us'>
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
