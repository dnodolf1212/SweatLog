class WorkoutForm {
  static container = document.getElementById('container');

  constructor(){
    this.attachEventListener(); 
    this.form = document.getElementById('workout_form');
  }

  attachEventListener(){   
    this.form.addEventListener("submit", this.handleOnSubmit)
  }

  handleOnSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    //const {name, rating } = event.target;
    //const data = {
    //  name: name.value,
    //  rating: rating.value
    //}
    //api.addWorkout(data).then(workout => console.log(workout))
  }

  

}