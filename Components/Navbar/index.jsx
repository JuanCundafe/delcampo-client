import React, { useState, useEffect } from "react";
import Search from "../Search";
import UserAvatar from "./user-avatar";
import { Row, Col } from "antd";

export default function NavBar() {
  const [home, setHome] = useState("images/logo-navbar.png");
  const [home_on, sethome_on] = useState("home_on");
  const [shopping_on, setshopping_on] = useState("shopping_off");
  const [message_on, setmessage_on] = useState("message_off");
  const [message, setMessage] = useState("images/message-icon-blanco.png");
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
      setShopping("images/shoppingcar-icon-verde.png");
      setshopping_on("shopping_on");
      setactiveHome(false);
      setactiveMessage(false);
      setMessage("images/message-icon-blanco.png");
      setHome("images/logo-navbar.png");
      sethome_on("home_off");
      setmessage_on("message_off");
    }
  }, [handleActiveHome, handleActiveShopping, handleActiveMessage]);

  useEffect(() => {
    if (activeMessage == true) {
      setMessage("images/message-icon-verde.png");
      setmessage_on("message_on");
      setactiveHome(false);
      setactiveShopping(false);
      setShopping("images/shoppingcar-icon-blanco.png");
      setHome("images/logo-navbar.png");
      sethome_on("home_off");
      setshopping_on("shopping_off");
    }
  }, [handleActiveHome, handleActiveShopping, handleActiveMessage]);

  useEffect(() => {
    if (activeHome == true) {
      setHome("images/logo-navbar.png");
      sethome_on("home_on");
      setactiveShopping(false);
      setactiveMessage(false);
      setShopping("images/shoppingcar-icon-blanco.png");
      setMessage("images/message-icon-blanco.png");
      setmessage_on("message_off");
      setshopping_on("shopping_off");
    }
  }, [handleActiveHome, handleActiveShopping, handleActiveMessage]);

  return (
    <>
      {" "}
      <Row className="navbar">
        <Col span={4}>
          {" "}
          <a onClick={handleActiveHome}>
            <img src={home} width="35" height="35" />{" "}
          </a>
        </Col>
        <Col className="navbar-search-col" xs={{ order: 3 }} sm={{ order: 2 }}>
          <Search />
        </Col>
        <Col className="perfil" span={4} xs={{ order: 2 }} sm={{ order: 3 }}>
          <div>
            <a className={message_on} onClick={handleActiveMessage}>
              {" "}
              <img
                className="icons2"
                src={message}
                width="26"
                height="26"
              />{" "}
            </a>
          </div>
          <div>
            <a className={shopping_on} onClick={handleActiveShopping}>
              <img className="icons2" src={shopping} width="26" height="26" />{" "}
            </a>
          </div>
          <div>
            <p className="nombre-perfil">Ernestino</p>
            <p className="rol-perfil">Productor</p>
          </div>
          <UserAvatar />
        </Col>
      </Row>
    </>
  );
}
