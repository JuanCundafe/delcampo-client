import Link from "next/link";
import { Row, Col } from "antd";

export default function Categories() {
  const arrowLeft = "images/flecha-izquierda.png";
  const fruits = "images/frutas.png";
  const vegetables = "images/verduras.png";
  const pods = "images/vainas.png";
  const flowers = "images/flores.png";
  const roots = "images/raices.png";

  return (
    <div className="parent-container">
      <div className="categories-container">
        <img src={arrowLeft} height="20" width="20" />

        <Row className="mw first">
          <Col className="categories-img" xs={6} sm={12}>
            <Link href="/home">
              <a>
                <img src={fruits} height="40" width="40" />
              </a>
            </Link>
          </Col>
          <Col className="categories-name" xs={18} sm={12}>
            <Link href="/home">
              <a>
                <h3>Frutas</h3>
              </a>
            </Link>
          </Col>
        </Row>

        <Row className="mw">
          <Col className="categories-img" xs={6} sm={12}>
            <Link href="/home">
              <a>
                <img src={vegetables} height="40" width="40" />
              </a>
            </Link>
          </Col>
          <Col className="categories-name" xs={18} sm={12}>
            <Link href="/home">
              <a>
                <h3>Verduras</h3>
              </a>
            </Link>
          </Col>
        </Row>

        <Row className="mw">
          <Col className="categories-img" xs={6} sm={12}>
            <Link href="/home">
              <a>
                <img src={pods} height="40" width="40" />
              </a>
            </Link>
          </Col>
          <Col className="categories-name" xs={18} sm={12}>
            <Link href="/home">
              <a>
                <h3>Vainas</h3>
              </a>
            </Link>
          </Col>
        </Row>

        <Row className="mw">
          <Col className="categories-img" xs={6} sm={12}>
            <Link href="/home">
              <a>
                <img src={flowers} height="40" width="40" />
              </a>
            </Link>
          </Col>
          <Col className="categories-name" xs={18} sm={12}>
            <Link href="/home">
              <a>
                <h3>Flores</h3>
              </a>
            </Link>
          </Col>
        </Row>

        <Row className="mw last">
          <Col className="categories-img" xs={6} sm={12}>
            <Link href="/home">
              <a>
                <img src={roots} height="40" width="40" />
              </a>
            </Link>
          </Col>
          <Col className="categories-name" xs={18} sm={12}>
            <Link href="/home">
              <a>
                <h3>Raíces</h3>
              </a>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}
