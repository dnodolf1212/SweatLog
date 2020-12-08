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

  addDetail = (detailData) => { //error for "post route not found", but Im using "resources" for details model
    const config = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(detailData)
    };
    return fetch(`${this.baseURL}/details`, config)
    .then(res => res.json()
    .catch(error => console.error(error)));
  };

  removeWorkout = (trashWorkout) => {
  fetch(`${this.baseURL}/workouts/${trashWorkout}`, { method: "DELETE" })//how do I get the "id" in here???
    .then(res => res.json)
    .catch(error => console.error(error))
  };
}
// do I need a config object??
 //const config = {
    //method: "DELETE",
    //headers: {
    //  'Content-Type': 'application/json',
    //  'Accept': 'application/json',
    //}
 
   