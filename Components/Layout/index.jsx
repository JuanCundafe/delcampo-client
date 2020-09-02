import MenuFooter from "../MenuFooter";
import Navbar from "../Navbar";
import Categories from "../Categories";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />

      <Categories />
      {children}

      <MenuFooter />
    </>
  );
}
