class WorkoutBoard {

  static container = document.getElementById("container");
  
  constructor(workout){
    this.workout = workout;
    this.renderWorkout()
    this.attachEventListener()
  }

  static getData(){
    api.getAllWorkouts().then(data => 
      data.forEach(workout => new WorkoutBoard(workout)));
  }

  attachEventListener(){
    this.board.addEventListener("click", this.handleOnClick)
  }

  handleOnClick = (event) => {
    console.log(this);
    debugger;
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
    const {name, rating, id} = this.workout;
    const currentDate = new Date().toLocaleDateString();
    this.board.innerHTML =
    `
      ${currentDate} 
      <h2>${name}</h2>
      <button class="count-btn" data-count-id="${id}">Sets/Poses</button>
      <button class="time-btn" data-time-id="${id}">Total Time</button>
      <p>Rating:${rating}</p>
    `
  }
  

}