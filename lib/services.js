const URL_BASE = 'https://del-campo-api.mybluemix.net/';
const URL_BASE_DEV = 'http://localhost:8080/';

// =======================
// AUTH
// =======================
const signUp = async (request) => {
  const response = await fetch(`${URL_BASE}auth/sign-up`, {
    method: 'POST',
    body: JSON.stringify(request),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const posts = await response.json()

  return posts
};

const signIn = async (request) => {
  const response = await fetch(`${URL_BASE}auth/sign-in`, {
    method: 'POST',
    body: JSON.stringify(request),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const post = await response.json()

  return post
};

// =======================
// HARVEST
// =======================
const getHarvest = async () => {
  const response = await fetch(`${URL_BASE}harvest`, {
    method: 'GET'
  })
  const data = await response.json()

  return data
};

const getHarvestById = async (token, id) => {
  const response = await fetch(`${URL_BASE}harvest/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  })
  console.log(response)
  const data = await response.json()

  return data
};

const addHarvest = async (request, token) => {
  const response = await fetch(`${URL_BASE}harvest`, {
    method: 'POST',
    body: JSON.stringify(request),
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  })
  const data = await response.json()

  return data
};

// =======================
// PRODUCT
// =======================
const addProduct = async (request, token) => {
  const response = await fetch(`${URL_BASE}products`, {
    method: 'POST',
    body: JSON.stringify(request),
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  })
  const post = await response.json()

  return post
};

const GetProduct = async (token) => {
  const response = await fetch(`${URL_BASE}products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  })
  const data = await response.json()

  return data
};

// =======================
// SHIPPING
// =======================
const GetShipping = async (token) => {
  const response = await fetch(`${URL_BASE}address`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: token
    }
  })
  const data = await response.json()

  return data
};

// =======================
// ADDRESS
// =======================
const addAddress = async (request, token) => {
  const response = await fetch(`${URL_BASE}address`, {
    method: 'POST',
    body: JSON.stringify(request),
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  })
  const data = await response.json()

  return data
};

const updateAddress = async (id, request, token) => {
  const response = await fetch(`${URL_BASE}address/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(request),
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  })
  const data = await response.json()

  return data
};

const getAddressById = async (id, token) => {
  const response = await fetch(`${URL_BASE}address/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  })

  const data = await response.json()
  return data
};

const imageHarvest = async (id, data, token) => {
  const response = await fetch(`${URL_BASE_DEV}harvest/${id}/upload`, {
    method: 'POST',
    body: data,
    headers: {
      // 'Content-Type': 'multipart/form-data',
      Authorization: token
    }
  })
  const harvest = await response.json()
  return harvest
};

export {
  getHarvest,
  getHarvestById,
  addHarvest,
  addProduct,
  GetProduct,
  GetShipping,
  addAddress,
  updateAddress,
  getAddressById,
  imageHarvest
}
