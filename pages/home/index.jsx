import Categories from "../../Components/Categories";
import CardHarvest from "../../Components/CardHarvest";
import Navbar from "../../Components/Navbar";
import MenuFooter from "../../Components/MenuFooter";

import { Row } from "antd";

import { getCookie } from "../../lib/session";
import { getHarvest } from "../../lib/services";
import { session, redirectIfNotAuthenticated } from "../../lib/auth";

function Home({ jwt, userinfo, harvest }) {
  const uiCardsPopular = harvest.map(
    ({ _id, product: { name }, price, description, picture, tag, weight }) => {
      if (tag == "populares") {
        return (
          <li key={_id} className="item">
            <CardHarvest
              product={name}
              price={price}
              description={description}
              picture={picture}
              weight={weight}
              _id={_id}
            />
          </li>
        );
      }
    }
  );

  const uiCardsTemporada = harvest.map(
    ({ _id, product: { name }, price, description, picture, tag, weight }) => {
      if (tag == "temporada") {
        return (
          <li key={_id} className="item">
            <CardHarvest
              product={name}
              price={price}
              description={description}
              picture={picture}
              weight={weight}
              _id={_id}
            />
          </li>
        );
      }
    }
  );

  const uiCardsOferta = harvest.map(
    ({ _id, product: { name }, price, description, picture, tag, weight }) => {
      if (tag == "oferta") {
        return (
          <li key={_id} className="item">
            <CardHarvest
              product={name}
              price={price}
              description={description}
              picture={picture}
              weight={weight}
              _id={_id}
            />
          </li>
        );
      }
    }
  );

  return (
    <>
      <div className="home-wrapper">
        <Navbar userinfo={userinfo} />
        <Row className="home-categories-margin">
          <Categories />
        </Row>
        <div className="product-section-cardsHarvest">
          <div className="container-cards-list">
            <Row className="product-row-sections">
              <p className="product-text-sections" id="populares">
                Mas populares
              </p>
              <ul className="hs full">
                {Object.keys(uiCardsPopular) && uiCardsPopular}
              </ul>
            </Row>
            <Row className="product-row-sections">
              <p className="product-text-sections" id="temporada">
                En temporada
              </p>
              <ul className="hs full">
                {Object.keys(uiCardsTemporada) && uiCardsTemporada}
              </ul>
            </Row>
            <Row className="product-row-sections">
              <p className="product-text-sections" id="oferta">
                En oferta
              </p>
              <ul className="hs full">
                {Object.keys(uiCardsOferta) && uiCardsOferta}
              </ul>
            </Row>
          </div>
        </div>
        <MenuFooter />
        <div className="base" />
      </div>
    </>
  );
}

Home.getInitialProps = async (ctx) => {
  if (redirectIfNotAuthenticated(ctx)) {
    return {};
  }

  const jwt = getCookie("jwt", ctx.req);
  const userinfo = await session(jwt);
  const response = await getHarvest();

  let harvest = [];
  if (response.data.harvest) {
    harvest = response.data.harvest;
  }

  harvest = harvest.reverse();
  return {
    jwt,
    userinfo,
    harvest,
  };
};

export default Home;
