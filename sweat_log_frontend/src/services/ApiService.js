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

  addDetail = (detailData, workoutId) => { 
    const config = {
      method: "POST", 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(detailData)
    };
    return fetch(`${this.baseURL}/workouts/${workoutId}/details`, config)
    .then(res => res.json()
    .catch(error => console.error(error)));
  };

  removeWorkout = (trashWorkout) => {
  fetch(`${this.baseURL}/workouts/${trashWorkout}`, { method: "DELETE" })
    .then(res => res.json)
    .catch(error => console.error(error))
  };

  //getSearch = (newList) => {
  //  fetch(`${this.baseURL}/workouts/${newList}`, { method: "PATCH"})
  //  .then(res => res.json)
  //}


}

 
   