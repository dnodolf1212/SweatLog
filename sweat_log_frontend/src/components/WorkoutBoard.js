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
    console.log(event.target[0].value)
    const sets_poses = event.target[0].value
    const time = event.target[1].value
    const distance = event.target[2].value
    const weight = event.target[3].value
    const detailData = {
      sets_poses: sets_poses.value,
      time: time.value,
      distance: distance.value,
      weight: weight.value
    }
    api.addDetail(detailData).then(res => console.log(res))
   
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
      <form id="detail-form">
        <p><input type="text name="sets_poses" value=""> Sets/Poses</input></p> 
        <p><input type="text name="distance" value=""> Total Time</input></p>
        <p><input type="text name="time" value=""> Distance</input></p>
        <p><input type="text name="weight" value=""> Weight</input></p>
        <p><input type="submit" value="submit" </input></p>
      </form>
      <p>Rating: ${rating}</p>
      <button id="deleteBtn">Delete</button>
    `
  }

  attachDeleteListener = () => {
    this.board.addEventListener("click", event => this.handleDeleteClick(event))
  }

  handleDeleteClick = (event) => {
    if (event.target.id == "deleteBtn"){
      console.log(event.target)
      const trashWorkout = event.target.parentElement.dataset.id; //is this the id of the individual workout???
      const workoutDiv = event.target.parentElement;
      api.removeWorkout(trashWorkout);
      workoutDiv.remove()
      } 
  }
    
  

}