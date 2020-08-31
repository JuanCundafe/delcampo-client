import { useRouter } from 'next/router'
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
  const router = useRouter()


  const [products, setProducts] = useState([])

  useEffect(() => {

    async function fetchHasrvest(){
      const response = await getHarvest();

      if (response.data.harvest) {
        setProducts(response.data.harvest);
      }
    }
    
    fetchHasrvest()
    
  }, []);
  
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
              _id={_id}
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
              _id={_id}
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
              _id={_id}
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
        <Row className='home-categories-margin'>
          <Categories />
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
