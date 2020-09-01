import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getHarvestById } from "../../lib/services";

import Layout from "../../Components/Layout";
import InputKilograms from "../../Components/InputKilograms";

import { Row, Col, Alert } from "antd";

export default function Deatails() {
  const router = useRouter();
  const harvestId = router.query.id;

  const [alertMsg, showAlert] = useState(false);
  const [harvest, setHarvest] = useState({});
  const [bag, setBag] = useState([]);
  const [totalCost, setTotalCost] = useState(100);

  const handleTotal = (total) => {
    setTotalCost(total * harvest.price);
  };

  const onFinish = (e) => {
    e.preventDefault();

    let totalKilograms = parseInt(e.target.elements[1].value);
    let bag = localStorage.getItem("bag");

    const {
      product: { name },
      price,
      picture,
      _id,
    } = harvest;

    if (totalKilograms < 100) {
      showAlert(true);
    } else {
      showAlert(false);
      if (!bag) {
        bag = [
          {
            _id: _id,
            item: name,
            precioItem: price,
            pesoItem: totalKilograms,
            total: totalCost,
            img: picture,
          },
        ];

        localStorage.setItem("bag", JSON.stringify(bag));
      } else {
        let bagDecode = JSON.parse(bag);
        let newItem = {
          item: name,
          precioItem: price,
          pesoItem: totalKilograms,
          total: totalCost,
          img: picture,
        };
        bagDecode.push(newItem);
        localStorage.setItem("bag", JSON.stringify(bagDecode));
      }
    }
  };

  useEffect(() => {
    async function getHarvest() {
      const response = await getHarvestById(harvestId);

      if (response.success === true) {
        response.data.harvest["createdDecode"] = new Date(
          response.data.harvest.date_start
        ).toLocaleDateString();

        response.data.harvest["finishDecode"] = new Date(
          response.data.harvest.date_end
        ).toLocaleDateString();

        setHarvest(response.data.harvest);
        // setTotalCost(totalCost * response.data.price);
      }
    }

    getHarvest();
  }, [harvestId]);

  return (
    <Layout>
      {Object.keys(harvest).length ? (
        <div className="details-view">
          <Row>
            <Col span={9}>
              <div className="btn-return">
                <img
                  src="/images/Group23.png"
                  alt=""
                  onClick={() => router.back()}
                />
              </div>
            </Col>
            <Col span={15}>
              <div className="creation-date">
                <div className="">Publicado el {harvest.createdDecode}</div>
              </div>
            </Col>
          </Row>
          <Row className="header">
            <Col xs={24} sm={12}>
              <img src="/images/oranges.jpg" alt="img detail" />
              <div className="price-per-kilogram">
                <span className="kilogram">1 Kg.</span>
                <span className="price-kg">{`$ ${harvest.price}`}</span>
              </div>
            </Col>
            <Col xs={24} sm={12} className="description">
              <h2>{harvest.product.name}</h2>
              <p>{harvest.description}</p>
            </Col>
          </Row>
          <Row className="footer">
            <Col span={24}>
              <div>
                <span className="title-green">Productor</span>
              </div>
            </Col>
            <Col xs={5} sm={3}>
              <img src="/images/icon-category.png" alt="Icon category" />
            </Col>
            <Col xs={19} sm={18} className="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste nam
              iusto accusantium. Saepe modi perspiciatis ullam, esse cupiditate
              dicta culpa qui pariatur accusantium dolor ad aspernatur nihil
              quam recusandae iste.
            </Col>
            <Col span={24}>
              <div>
                <span className="title-green">Fecha de caducidad: </span>
                {harvest.finishDecode}
              </div>
            </Col>
          </Row>
          <Row className="add-bag">
            <Col span={24}>
              <hr />
              {alertMsg && (
                <Alert
                  message="La compra mínima es de 100 Kg"
                  type="error"
                  showIcon
                />
              )}
            </Col>
            <Col span={24}>
              <div>
                <div className="div-total">{`Total: $ ${totalCost}.00`}</div>
              </div>
              <form onSubmit={onFinish}>
                <Row>
                  <Col span={14}>
                    {/* <div className="kilograms">Kg.</div> */}
                    <div className="input-container">
                      <InputKilograms callback={handleTotal} />
                    </div>
                  </Col>
                  <Col span={10}>
                    <div className="btn-container">
                      <button type="submit">Agregar a la bolsa</button>
                    </div>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>
        </div>
      ) : (
        "Loading ..."
      )}
    </Layout>
  );
}
