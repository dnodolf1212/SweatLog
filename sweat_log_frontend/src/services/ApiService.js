class ApiService {
  constructor(baseURL){
    this.baseURL = baseURL;
  }

getAllWorkouts = () => fetch(`${this.baseURL}/workouts`).then(res => res.json());

addCount = (id) => fetch(`${this.baseURL}/workouts/${id}`, {method: "POST" }).then(res => res.json());
}



 
  