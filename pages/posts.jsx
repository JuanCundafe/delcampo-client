import { Layout, Row, Col, Avatar } from "antd";
import Navbar from "../Components/Navbar";

import { getCookie } from "../lib/session";
import { session, redirectIfNotAuthenticated } from "../lib/auth";
function Posts({ jwt, userinfo }) {
  return (
    <>
      <Layout className="full-vh">
        <Navbar />
        <h1>Publicaciones de {userinfo.name}</h1>
      </Layout>
    </>
  );
}

Posts.getInitialProps = async (ctx) => {
  if (redirectIfNotAuthenticated(ctx)) {
    return {};
  }

  const jwt = getCookie("jwt", ctx.req);
  const userInfo = await session(jwt);

  return {
    jwt,
    userinfo: userInfo.data.user,
  };
};

export default Posts;
