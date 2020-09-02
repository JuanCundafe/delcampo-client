import Categories from "../../Components/Categories";
import CardHarvest from "../../Components/CardHarvest";
import NavBar from "../../Components/Navbar";
import MenuFooter from "../../Components/MenuFooter";

import { Row } from "antd";

import { getCookie } from "../../lib/session";
import { getHarvest } from "../../lib/services";
import { session } from "../../lib/auth";

function Home({ userInfo, harvest }) {
  console.log(userInfo);

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
    (
      { _id, product: { name }, price, description, picture, tag, weight },
      index
    ) => {
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
    (
      { _id, product: { name }, price, description, picture, tag, weight },
      index
    ) => {
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
        <NavBar userInfo={userInfo} />
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
                {Object.keys(uiCardsPopular) ? uiCardsPopular : null}
              </ul>
            </Row>
            <Row className="product-row-sections">
              <p className="product-text-sections" id="temporada">
                En temporada
              </p>
              <ul className="hs full">
                {Object.keys(uiCardsTemporada) ? uiCardsTemporada : null}
              </ul>
            </Row>
            <Row className="product-row-sections">
              <p className="product-text-sections" id="oferta">
                En oferta
              </p>
              <ul className="hs full">
                {Object.keys(uiCardsOferta) ? uiCardsOferta : null}
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
  const userInfo = getCookie("userinfo", ctx.req);
  const jwt = getCookie("jwt", ctx.req);

  const response = await getHarvest();
  const responseUserInfo = await session(jwt);

  console.log("responseUserInfo", responseUserInfo);

  let harvest = [];
  if (response.data.harvest) {
    harvest = response.data.harvest;
  }

  return {
    userInfo,
    harvest,
  };
};

export default Home;
