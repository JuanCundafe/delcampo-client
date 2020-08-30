const URL_BASE = "https://del-campo-api.mybluemix.net/";
const URL_BASE_DEV = "http://localhost:8080/";

const signUp = async (request) => {
  const response = await fetch(`${URL_BASE}auth/sign-up`, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const posts = await response.json();

  return posts;
};

const signIn = async (request) => {
  const response = await fetch(`${URL_BASE}auth/sign-in`, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const post = await response.json();

  return post;
};
const GetShipping = async (token) => {
  const response = await fetch(`${URL_BASE}address`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
  });
  const data = await response.json();

  return data;
};

export { signUp, signIn, GetShipping };
