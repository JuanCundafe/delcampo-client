import MenuFooter from "../MenuFooter";
import NavBar from "../NavBar";
import Categories from "../Categories";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Categories />
      <MenuFooter />
    </>
  );
}
