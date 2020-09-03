import redirect from "./redirect";
import { getCookie, removeCookie } from "./session";

const URL_BASE = "https://del-campo-api.mybluemix.net/";
const URL_BASE_DEV = "http://localhost:8080/";

/**
 * CREAR NUEVO USUARIO
 *
 * @param {*} request
 */
export const signUp = async (request) => {
  const response = await fetch(`${URL_BASE}auth/sign-up`, {
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
export const signIn = async (request) => {
  const response = await fetch(`${URL_BASE}auth/sign-in`, {
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
export const session = async (token) => {
  const response = await fetch(`${URL_BASE}auth/session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  const result = await response.json();

  return result;
};

/**
 * CIERRE DE SESSION
 * @param {*} ctx
 */
export const signOut = (ctx = {}) => {
  if (process.browser) {
    removeCookie("jwt");
    redirect("/login", ctx);
  }
};

// Acceder a el JWT token
export const getJwt = (ctx) => {
  return getCookie("jwt", ctx.req);
};

// Verificamos si estamos autenticados
export const isAuthenticated = (ctx) => !!getJwt(ctx);

// Redireccionar si ya estamos autenticados
export const redirectIfAuthenticated = (ctx) => {
  if (isAuthenticated(ctx)) {
    redirect("/home", ctx);
    return true;
  }
  return false;
};

// Verificamos si aún no estamos autenticados
export const redirectIfNotAuthenticated = (ctx) => {
  if (!isAuthenticated(ctx)) {
    redirect("/login", ctx);
    return true;
  }
  return false;
};
