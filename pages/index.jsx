import Product from "./product";

// Services
import { signIn, redirectIfAuthenticated } from "../lib/auth.js";

function Home() {
  return (
    <>
      <Product />
    </>
  );
}

Home.getInitialProps = async (ctx) => {
  if (redirectIfAuthenticated(ctx)) {
    return {};
  }

  return {};
};

export default Home;
