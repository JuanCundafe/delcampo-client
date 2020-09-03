import { Menu, Avatar, Dropdown } from "antd";
import Link from "next/link";

const menu = (
  <Menu className="menu-dropdown">
    <Menu.Item>
      <Link href="/create">
        <a>Agregar cosecha</a>
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link href="/">
        <a>Historial</a>
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link href="/">
        <a>Publicaciones</a>
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link href="/">
        <a>Editar perfil</a>
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link href="/logout">
        <a>Cerrar sesión</a>
      </Link>
    </Menu.Item>
  </Menu>
);

class UserAvatar extends React.Component {
  state = {
    current: "mail",
  };

  handleClick = (e) => {
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
