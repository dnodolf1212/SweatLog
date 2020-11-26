const BASE_URL = "http://localhost:3000/"
document.addEventListener('DOMContentLoaded', () => {
  console.log("We good!")

  const api = new ApiService("http://localhost:3000");
  console.log(api)
})