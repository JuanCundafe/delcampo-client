import MenuFooter from "../MenuFooter";

export default function Layout({ children }) {
  return (
    <>
      {children}
      <MenuFooter />
    </>
  );
}
