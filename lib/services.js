const URL_BASE = "https://del-campo-api.mybluemix.net/";

const signUp = async (request) => {
  const response = await fetch(`${URL_BASE}auth/sign-up`, {
    method: POST,
    body: JSON.stringify(request),
  });
  const posts = await response.json();

  return posts;
};

const signIn = async (request) => {
  const response = await fetch(`${URL_BASE}/auth/sign-in`, {
    method: POST,
    body: JSON.stringify(request),
  });
  const post = await response.json();

  return post;
};

export { signUp, signIn };
