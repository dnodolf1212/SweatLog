# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

workouts = [
  {
    "id": 1,
    "name": "Running",
    "rating": 4
  },
  {
    "id": 2,
    "name": "Lifting",
    "rating": 8
  },
  {
    "id": 3,
    "name": "Walking",
    "rating": 9
  },
  {
    "id": 4,
    "name": "Cycling",
    "rating": 10
  },
  {
    "id": 5,
    "name": "Yoga",
    "rating": 10
  }
]

details = [
  {
    
  }
]

workout_choices = []

workouts.each do |workout|
  workout_choices << Workout.create(name: workout[:name], rating: workout[:rating])
end

