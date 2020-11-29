class WorkoutBoard {
  constructor(workout){
    this.workout = workout
    console.log(this)
  }

  static getData(){
    api.getAllWorkouts().then(data => 
      data.forEach(workout => new WorkoutBoard(workout)));
  }

}