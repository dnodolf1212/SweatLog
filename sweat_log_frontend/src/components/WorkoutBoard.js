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
    this.board.addEventListener("submit", this.handleOnSubmit)
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const formDiv = document.getElementById("detail-form")
    formDiv.style.display = 'none'
    const sets_poses = event.target.sets_poses.value
    const time = event.target.time.value
    const distance = event.target.distance.value
    const weight = event.target.weight.value
    const detailData = {
      sets_poses,
      time,
      distance,
      weight    
    }
    api.addDetail(detailData, this.workout.id).then(workoutDetail => this.updateDetails(workoutDetail))
  }

  updateDetails(workoutDetail){
    console.log(workoutDetail);
    //getAttribute??
    const detailsDiv = document.querySelector(`.details[id="${this.workout.id}"]`); 
    detailsDiv.innerHTML = this.detailHTML(workoutDetail);
     debugger;
  }

  renderWorkout(){
    const board = document.createElement("div");
    console.log(board)
    board.className = "workout";
    board.dataset.id = this.workout.id;
    this.board = board; 
    this.renderInnerHTML();
    this.constructor.container.append(board);
  }

  renderInnerHTML(){
    const { name, rating } = this.workout;
    this.board.innerHTML = 
    `                                    
      <h2>${name}</h2>
      <div class='details' id="${this.workout.id}"> 
        ${this.renderDetailsHTML()}
      </div>
      <form id="detail-form" onsubmit="document.getElementById('detail-form').style.display = 'none'">
        <input type="text" name="sets_poses" value=""> Sets/Poses</input>
        <input type="text" name="time" value="a string?"> Total Time</input>
        <input type="text" name="distance" value="a sting?"> Distance</input>
        <input type="text" name="weight" value=""> Weight</input>
        <input type="submit" value="submit" </input>
      </form>
      <p>Rating: ${rating}</p>
      <button id="deleteBtn">Delete</button>
    `
  }

  renderDetailsHTML(){
    const html = this.workout.details.map(detail => {
      return this.detailHTML(detail)
    }).join("");
    console.log (html)
    return html
    
  }

  detailHTML(detail){
    const currentDate = new Date().toLocaleDateString();
    return `
    ${currentDate} 
    <p>Sets/Poses:  ${detail.sets_poses}</p>
    <p>Distance:  ${detail.distance} </p>
    <p>Total Time:  ${detail.time} </p>
    <p>Weight Lifted:  ${detail.weight} lbs./kgs.</p>
    `
  }

  attachDeleteListener = () => {
    this.board.addEventListener("click", event => this.handleDeleteClick(event))
  }

  handleDeleteClick = (event) => {
    if (event.target.id == "deleteBtn"){
      const trashWorkout = event.target.parentElement.dataset.id; 
      const workoutDiv = event.target.parentElement;
      api.removeWorkout(trashWorkout);
      workoutDiv.remove()
      } 
  }
    
  

}