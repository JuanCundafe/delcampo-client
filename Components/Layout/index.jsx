import MenuFooter from "../MenuFooter";
import NavBar from "../Navbar";
import Categories from "../Categories";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />

      <Categories />
      {children}

      <MenuFooter />
    </>
  );
}
