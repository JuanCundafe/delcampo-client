import { Row, Col } from "antd";
import React, { useState, useEffect } from "react";

export default function MenuFooter() {
  const [home, setHome] = useState("images/home-icon-naranja.png");
  const [home_on, sethome_on] = useState("home_on");
  const [shopping_on, setshopping_on] = useState("shopping_off");
  const [message_on, setmessage_on] = useState("message_off");
  const [message, setMessage] = useState("images/message-icon-naranja.png");
  const [shopping, setShopping] = useState(
    "images/shoppingcar-icon-naranja.png"
  );
  const [activeHome, setactiveHome] = useState(true);
  const [activeShopping, setactiveShopping] = useState(false);
  const [activeMessage, setactiveMessage] = useState(false);

  const handleActiveHome = () => setactiveHome(!activeHome);
  const handleActiveShopping = () => setactiveShopping(!activeShopping);
  const handleActiveMessage = () => setactiveMessage(!activeMessage);

  useEffect(() => {
    if (activeShopping == true) {
      setShopping("images/shoppingcar-icon-blanco.png");
      setshopping_on("shopping_on");
      setactiveHome(false);
      setactiveMessage(false);
      setMessage("images/message-icon-naranja.png");
      setHome("images/home-icon-naranja.png");
      sethome_on("home_off");
      setmessage_on("message_off");
    }
  }, [handleActiveHome, handleActiveShopping, handleActiveMessage]);

  useEffect(() => {
    if (activeMessage == true) {
      setMessage("images/message-icon-blanco.png");
      setmessage_on("message_on");
      setactiveHome(false);
      setactiveShopping(false);
      setShopping("images/shoppingcar-icon-naranja.png");
      setHome("images/home-icon-naranja.png");
      sethome_on("home_off");
      setshopping_on("shopping_off");
    }
  }, [handleActiveHome, handleActiveShopping, handleActiveMessage]);

  useEffect(() => {
    if (activeHome == true) {
      setHome("images/home-icon-blanco.png");
      sethome_on("home_on");
      setactiveShopping(false);
      setactiveMessage(false);
      setShopping("images/shoppingcar-icon-naranja.png");
      setMessage("images/message-icon-naranja.png");
      setmessage_on("message_off");
      setshopping_on("shopping_off");
    }
  }, [handleActiveHome, handleActiveShopping, handleActiveMessage]);

  return (
    <div className="MenuFooter">
      <Row>
        <Col className="col-icon">
          <a className={home_on} onClick={handleActiveHome}>
            {" "}
            <img className="icons" src={home} width="30" height="30" />{" "}
          </a>
        </Col>
        <Col>
          <a className={message_on} onClick={handleActiveMessage}>
            {" "}
            <img className="icons" src={message} width="30" height="30" />{" "}
          </a>
        </Col>
        <Col>
          <a className={shopping_on} onClick={handleActiveShopping}>
            {" "}
            <img className="icons" src={shopping} width="30" height="30" />{" "}
          </a>
        </Col>
      </Row>
      <div className="Wrapper-MenuFooter"></div>
    </div>
  );
}
