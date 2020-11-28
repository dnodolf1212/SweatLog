//const BASE_URL = "http://localhost:3000/api/v1/users"
//document.addEventListener('DOMContentLoaded', () => {
//  //console.log("We good!")
//
//  const api = new ApiService("http://localhost:3000/api/v1/users");
//  console.log(api)
//})

const url = "http://localhost:3000/api/v1/users"
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))