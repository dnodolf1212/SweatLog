class WorkoutBoard {
  constructor(workout){
    this.workout = workout;
    this.renderWorkout()
    console.log(this)
  }

  static getData(){
    api.getAllWorkouts().then(data => 
      data.forEach(workout => new WorkoutBoard(workout)));
  }

  renderWorkout(){
    div.innerHTML +=
    ` 
     <div class="workout">
      <p>${this.workout.name}</p>
      <p>Date will be present on DOMContentLoaded??</p>
      <p><button>Sets/Reps/Laps --></button> produce a field on click??</p>
      <p><button>Poses</button></p>
      <p><button>Total Time</button></p>
      <p><button>Log It</button>will create this element with input information</p>
     </div>
    `
  }
  

}