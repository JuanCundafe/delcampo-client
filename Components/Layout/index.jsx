import MenuFooter from "../MenuFooter";
import Navbar from "../Navbar";
import Categories from "../Categories";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();

  let searchIsActive;
  switch (router.pathname) {
    case "/detail":
    case "/checkout":
    case "/shipping":
    case "/home/[id]":
      searchIsActive = false;
      break;
    default:
      searchIsActive = true;
  }

  return (
    <>
      <Navbar />

      {searchIsActive && <Categories />}
      {children}

      <MenuFooter />
    </>
  );
}
