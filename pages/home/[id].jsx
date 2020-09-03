import { useState } from "react";
import { useRouter } from "next/router";

import { getCookie } from "../../lib/session";
import { getHarvestById } from "../../lib/services";
import { session, redirectIfNotAuthenticated } from "../../lib/auth";

import Layout from "../../Components/Layout";
import InputKilograms from "../../Components/InputKilograms";

import { Row, Col } from "antd";
import { ToastContainer, toast } from "react-toastify";

function Details({ jwt, userinfo, harvest }) {
  const router = useRouter();
  const userId = userinfo._id;

  const {
    _id,
    tag,
    price,
    weight,
    description,
    picture,
    createdDecode,
    finishDecode,
    product: { name },
  } = harvest;

  const [alertMsg, showAlert] = useState(false);
  const [totalCost, setTotalCost] = useState(100);
  const [loadings, setLoadings] = useState(false);

  const handleTotal = (total) => {
    setTotalCost(total * price);
  };

  const onFinish = (e) => {
    e.preventDefault();
    setLoadings(true);

    let totalKilograms = parseInt(e.target.elements[1].value);
    let bag = localStorage.getItem(`bag${userId}`);

    if (totalKilograms < 100) {
      setLoadings(false);

      toast.error("La compra mínima es de 100 Kg", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    } else {
      setLoadings(false);

      toast.success("El producto se agregó de forma exitosa!!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });

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

        // setCookie("bag", JSON.stringify(bag));
        localStorage.setItem(`bag${userId}`, JSON.stringify(bag));
        // redirect("/home");
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
        // setCookie("bag", JSON.stringify(bagDecode));
        localStorage.setItem(`bag${userId}`, JSON.stringify(bagDecode));
        // redirect("/home");
      }
    }
  };

  return (
    <Layout>
      <div className="details-view">
        <ToastContainer />
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
              <div className="">Publicado el {createdDecode}</div>
            </div>
          </Col>
        </Row>
        <Row className="header">
          <Col xs={24} sm={12}>
            <img src={picture} alt="img detail" />
            <div className="price-per-kilogram">
              <span className="kilogram">1 Kg.</span>
              <span className="price-kg">{`$ ${price}`}</span>
            </div>
          </Col>
          <Col xs={24} sm={12} className="description">
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="price-per-kilogram2">
              <span className="kilogram2">1 Kg.</span>
              <span className="price-kg2">{`$ ${price}`}</span>
            </div>
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
            dicta culpa qui pariatur accusantium dolor ad aspernatur nihil quam
            recusandae iste.
          </Col>
          <Col span={24}>
            <div>
              <span className="title-green">Fecha de caducidad: </span>
              {finishDecode}
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
              <h3 className="div-total">{`Total: $ ${totalCost}.00`}</h3>
            </div>
            <hr />
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
    </Layout>
  );
}

Details.getInitialProps = async (ctx) => {
  if (redirectIfNotAuthenticated(ctx)) {
    return {};
  }

  const jwt = getCookie("jwt", ctx.req);
  const userinfo = await session(jwt);
  const response = await getHarvestById(jwt, ctx.query.id);

  if (response.success === true) {
    response.data.harvest["createdDecode"] = new Date(
      response.data.harvest.date_start
    ).toLocaleDateString();

    response.data.harvest["finishDecode"] = new Date(
      response.data.harvest.date_end
    ).toLocaleDateString();
  }

  return {
    jwt,
    userinfo: userinfo.data.user,
    harvest: response.data.harvest,
  };
};

export default Details;
