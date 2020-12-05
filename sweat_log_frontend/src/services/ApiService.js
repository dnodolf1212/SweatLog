class ApiService {
  constructor(baseURL){
    this.baseURL = baseURL;
  }

  getAllWorkouts = () => fetch(`${this.baseURL}/workouts`).then(res => res.json());

  addWorkout = (data) => { 
    const config = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data)
    };
    return fetch(`${this.baseURL}/workouts`, config).then(res => res.json());
  };
  
}

 
 
   