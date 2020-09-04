import Link from "next/link";
import { useRouter } from "next/router";

import { Row, Col } from "antd";

export default function MenuFooter() {
  const router = useRouter();

  let msgIco = "/images/message-icon-naranja.png";
  let homeIco = "/images/home-icon-blanco.png";
  let cartIco = "/images/shoppingcar-icon-naranja.png";
  let home_on = "home_on";
  let message_on = "message_off";
  let shopping_on = "shopping_off";

  if (router.pathname === "/checkout") {
    msgIco = "/images/message-icon-naranja.png";
    homeIco = "/images/home-icon-naranja.png";
    cartIco = "/images/shoppingcar-icon-blanco.png";
    home_on = "home_off";
    message_on = "message_off";
    shopping_on = "shopping_on";
  }

  return (
    <div className="MenuFooter">
      <Row className="row-menuFooter">
        <Col>
          <Link href="/home">
            <a className={message_on}>
              <img className="icons" src={msgIco} width="30" height="30" />
            </a>
          </Link>
        </Col>

        <Col className="col-icon">
          <Link href="/home">
            <a className={home_on}>
              <img className="icons" src={homeIco} width="30" height="30" />
            </a>
          </Link>
        </Col>

        <Col>
          <Link href="/checkout">
            <a className={shopping_on}>
              <img className="icons" src={cartIco} width="30" height="30" />
            </a>
          </Link>
        </Col>
      </Row>
      <div className="Wrapper-MenuFooter" />
    </div>
  );
}
