const api = new ApiService("http://localhost:3000/api/v1");
let workoutList = WorkoutBoard.all; 
const container = document.getElementById('container')

document.addEventListener("DOMContentLoaded", () => {
  
  WorkoutBoard.getData();

  new WorkoutForm();

  const searchForm = document.getElementById("search");

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchNum = e.target[0].value;
    let newList = workoutList.filter( board => { 
      return board.workout.rating <= searchNum;
    })
    renderSearch(newList)
  })

  const renderSearch = (aList) => {
    const toRender = aList.map((aWorkout) => {
     return `
     <div class="workout">
      <h2>${aWorkout.workout.name}</h2>
      <div class='details' id="${aWorkout.workout.id}"> 
        ${aWorkout.renderDetailsHTML()}
      </div>
      <form class="detail-form" id="${aWorkout.workout.id}" style="display: none">
        <input type="text" name="sets_poses" value=""> Sets/Poses</input>
        <input type="text" name="time" value="a string?"> Total Time</input>
        <input type="text" name="distance" value="a sting?"> Distance</input>
        <input type="text" name="weight" value=""> Weight</input>
        <input type="submit" value="submit" </input>
      </form>
      <p>Rating: ${aWorkout.workout.rating}</p>
      <button class="deleteBtn">Delete</button>
      <button class="toggle">log workout</button>
     </div>
   `
  
    })
    .join('');
    container.innerHTML = toRender;
    
  }
    





}) 