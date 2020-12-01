class WorkoutBoard {

  static container = document.getElementById("container");
  
  constructor(workout){
    this.workout = workout;
    this.renderWorkout();
    this.attachEventListener();
  }

  static getData(){
    api.getAllWorkouts().then(data => 
      data.forEach(workout => new WorkoutBoard(workout)));
  }

  attachEventListener(){
    this.board.addEventListener("click", this.handleOnClick)
  }

  handleOnClick = (event) => {
    console.log(event.target)
  }

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
      <button class="count-btn" data-count-id="">Sets/Poses</button>
      <button class="time-btn" data-time-id="">Total Time</button>
      <button class="distance-btn" data-distance-id="">Distance</button>
      <p>Rating: ${rating}</p>
    `
  }
  

}