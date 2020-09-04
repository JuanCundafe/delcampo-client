const URL_BASE = 'https://del-campo-api.mybluemix.net/';
const URL_BASE_DEV = 'http://localhost:8080/';

const uploadImg = async (id, request,token) => {
  console.log(request)
  const response = await fetch(`${URL_BASE_DEV}${id}/upload`, {
    method: 'POST',
    body: request,
    headers: {
      // "Content-Type": "application/json",
      Authorization: token
    }
  })
  const posts = await response.json()

  return posts
};

 export uploadImg
// var myHeaders = new Headers();
// myHeaders.append(
//   "Authorization",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNDliN2Y3YjE1MjI3MDA3ZTA5NTA4NyIsImlhdCI6MTU5ODg5ODMxMCwiZXhwIjoxNTk5MDcxMTEwfQ.dTgbhZJTyDMPHkhd4E65FpNHoDkt552CoZBIiYS0LLc"
// );

// var formdata = new FormData();
// formdata.append("images", fileInput.files[0], "bookmark-outline.svg");

// var requestOptions = {
//   method: "POST",
//   headers: myHeaders,
//   body: formdata,
//   redirect: "follow",
// };

// fetch("localhost:8080/harvest/5f4a8a9ce10c591bec534eab/upload", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.log("error", error));
