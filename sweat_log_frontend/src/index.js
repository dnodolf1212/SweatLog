const api = new ApiService("http://localhost:3000/api/v1");

document.addEventListener("DOMContentLoaded", () => {
  
  WorkoutBoard.getData();

  new WorkoutForm();

});
