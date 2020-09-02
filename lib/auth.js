// import redirect from "./redirect";
// import { setCookie, getCookie, removeCookie } from "./session";

const URL_BASE = "https://del-campo-api.mybluemix.net/";
const URL_BASE_DEV = "http://localhost:8080/";

/**
 * CREAR NUEVO USUARIO
 *
 * @param {*} request
 */
const signUp = async (request) => {
  const response = await fetch(`${URL_BASE_DEV}auth/sign-up`, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();

  return result;
};

/**
 * INICIO DE SESIÓN
 *
 * @param {*} request
 */
const signIn = async (request) => {
  const response = await fetch(`${URL_BASE_DEV}auth/sign-in`, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();

  return result;
};

/**
 * COMPROBACION DE SESIÓN
 *
 * @param {*} request
 */
const session = async (token) => {
  const response = await fetch(`${URL_BASE_DEV}auth/session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  const result = await response.json();

  return result;
};

export { signIn, signUp, session };
