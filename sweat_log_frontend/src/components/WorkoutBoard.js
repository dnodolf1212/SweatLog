class WorkoutBoard {

  static container = document.getElementById("container");
  
  constructor(workout){
    this.workout = workout;
    this.renderWorkout();
    this.attachEventListener();
    this.attachDeleteListener();
  }

  static getData(){
    api.getAllWorkouts().then(data => 
      data.forEach(workout => new WorkoutBoard(workout)));
  }

  attachEventListener(){
    this.board.addEventListener("submit", this.handleOnClick)
  }

  handleOnClick = (event) => {
    event.preventDefault();
    //const {sets_poses, distance, time, weight} = event.target
    //const formData = new FormData()
  }// data.append("name", "sets_reps");


  renderWorkout(){
    const board = document.createElement("div");
    board.className = "workout";
    board.dataset.id = this.workout.id
    this.board = board; 
    this.renderInnerHTML()
    this.constructor.container.append(board);
  }

  renderInnerHTML(){
    const {name, rating, } = this.workout;
    const currentDate = new Date().toLocaleDateString();
    this.board.innerHTML =
    `
      ${currentDate} 
      <h2>${name}</h2>
      <form id="detail-form">
        <ul>
          
          <li><input name="sets_poses"> Sets/Poses</input></li>
          <li><input name="distance"> Total Time</input></li>
          <li><input name="time"> Distance</input></li>
          <li><input name="weight"> Weight</input></li>
          <li><input type="submit" value="submit" </input></li>
        </ul>
      </form>
      <p>Rating: ${rating}</p>
      <button id="deleteBtn">Delete</button>
    `
  }

  attachDeleteListener(){
    this.board.addEventListener("click", this.handleDeleteClick)
  }

  handleDeleteClick(event){
    if (event.target.id == "deleteBtn"){
      this.remove();
    }
    console.log(event.target);
     //debugger;
  }
  

}