class ApiService {
  constructor(baseURL){
    this.baseURL = baseURL;
  }

getAllWorkouts = () => fetch(`${this.baseURL}/workouts`).then(res => res.json());

addWorkout = () => fetch(`${this.baseURL}/workouts`, {method: "POST" }).then(res => res.json());
}



 
  