const URL_BASE = "https://del-campo-api.mybluemix.net/";
const URL_BASE_DEV = "http://localhost:8080/";

// =======================
<<<<<<< HEAD
// AUTH
// =======================
const signUp = async (request) => {
  const response = await fetch(`${URL_BASE_DEV}auth/sign-up`, {
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
  const response = await fetch(`${URL_BASE_DEV}auth/sign-in`, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const post = await response.json();

  return post;
};

// =======================
=======
>>>>>>> develop
// HARVEST
// =======================
const getHarvest = async () => {
  const response = await fetch(`${URL_BASE_DEV}harvest`, {
    method: "GET",
  });
  const data = await response.json();

  return data;
};

const getHarvestById = async (id) => {
  const response = await fetch(`${URL_BASE_DEV}harvest/${id}`, {
    method: "GET",
  });
  const data = await response.json();

  return data;
};

const addHarvest = async (request, token) => {
  const response = await fetch(`${URL_BASE_DEV}harvest`, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  const data = await response.json();

  return data;
};

// =======================
// PRODUCT
// =======================
const addProduct = async (request, token) => {
  const response = await fetch(`${URL_BASE_DEV}products`, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  const post = await response.json();

  return post;
};

// =======================
// SHIPPING
// =======================
const GetShipping = async (token) => {
  const response = await fetch(`${URL_BASE_DEV}address`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
  });
  const data = await response.json();

  return data;
};

// =======================
// ADDRESS
// =======================
const addAddress = async (request, token) => {
  console.log(request);
  const response = await fetch(`${URL_BASE_DEV}address`, {
    method: "POST",
    body: JSON.stringify(request),
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  const data = await response.json();
  console.log(data);
  return data;
};

export {
  getHarvest,
  getHarvestById,
  addHarvest,
  addProduct,
  GetShipping,
  addAddress,
};
