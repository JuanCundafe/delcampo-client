import { Row, Col, Card } from 'antd';
import Search from '../../Components/Search';
import CustomButton from '../../Components/CustomButton';
import Categories from '../../Components/Categories';
import CardHarvest from '../../Components/CardHarvest';
import { getHarvest } from '../../lib/services';
import { useState, useEffect } from 'react';
import NavBar from '../../Components/Navbar';

export default function Home () {
  const { Meta } = Card

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
      <div className='home-wrapper'>
        <NavBar />
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
      </div>
    </>
  )
}
