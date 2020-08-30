import { Layout } from "antd";

import Navbar from "../../Components/Navbar";
import MenuFooter from "../../Components/MenuFooter";

export default function Checkout() {
  return (
    <div>
      <Layout>
        <Navbar />
        <Content>
          <h1>Hola este es el Carrito</h1>
        </Content>
        <MenuFooter />
      </Layout>
    </div>
  );
}
