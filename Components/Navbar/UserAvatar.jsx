import { Menu, Avatar, Dropdown } from "antd";

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
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="">
        Cerrar sesión
      </a>
    </Menu.Item>
  </Menu>
);

class UserAvatar extends React.Component {
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
      <div>
        <Dropdown
          clasName="dropdown"
          overlay={menu}
          placement="bottomLeft"
          arrow
        >
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            <Avatar className="avatar-navBar" src="/images/avatar-test.png" />{" "}
          </a>
        </Dropdown>
      </div>
    );
  }
}

export default UserAvatar;
