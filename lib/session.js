import cookie from "js-cookie";

// Observemos que es necesario indicar la ubicación, en este caso "/".
// De otro modo, se pueden generar inconsistencias al momento de
// acceder o eliminar el cookie. La expiración está especificada en días.
export const setCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1,
      path: "/",
    });
  }
};
