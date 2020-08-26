import { Menu, Avatar, Dropdown, Row, Col } from "antd";
import React, { useState, useEffect } from "react";

const menu = (
  <Menu className="menu-dropdown">
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">
        Agegar cosecha
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">
        Historial
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">
        Publicaciones
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">
        Editar perfil
      </a>
    </Menu.Item>
  </Menu>
);

class NavBar extends React.Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <>
        {" "}
        <Row className="navbar">
          <Col span={4}>
            {" "}
            <a>
              <img src="images/logo-navbar.png" width="30" height="30" />{" "}
            </a>
          </Col>
          <Col className="perfil" span={20}>
            <div>
              <a className="message-desk">
                {" "}
                <img
                  className="icons"
                  src="images/message-icon-blanco.png"
                  width="30"
                  height="30"
                />{" "}
              </a>
            </div>
            <div>
              <a className="shopping-desk">
                {" "}
                <img
                  className="icons"
                  src="images/shoppingcar-icon-blanco.png"
                  width="30"
                  height="30"
                />{" "}
              </a>
            </div>
            <div>
              <p className="nombre-perfil">Ernestino</p>
              <p className="rol-perfil">Productor</p>
            </div>
            <div>
              <Dropdown
                clasName="dropdown"
                overlay={menu}
                placement="bottomLeft"
                arrow
              >
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <Avatar
                    className="avatar-navBar"
                    src="images/avatar-test.png"
                  />{" "}
                </a>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default NavBar;
