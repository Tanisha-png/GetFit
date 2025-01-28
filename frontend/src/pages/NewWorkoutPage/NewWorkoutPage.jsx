import { useState } from 'react';
import { useNavigate } from 'react-router';
import * as workoutService from '../../services/workoutService';


export default function NewWorkoutPage() {
  // const [content, setContent] = useState('');
  const [workout, setWorkout] = useState({
    type: '',
    day: Date,
    exercise: [],
    enum: []
  });

  const emptyExerciseState = {
    name: '',
    description: '',
    muscleGroup: '',
    sets: '',
    reps: '',
    weight: ''
  };

  const [exercise, setExercise] = useState({...emptyExerciseState})

  const navigate = useNavigate();

  async function handleSubmit(evt) {
    console.log(workout)
    evt.preventDefault();
    try {
      await workoutService.create(workout);
      navigate('/workouts');
    } catch (err) {
      console.log(err);
    }
  }



  


async function handleSubmitExercise(evt) {
  evt.preventDefault();
  setWorkout({...workout, exercises: [...workout.exercise, exercise]})
  setExercise({...emptyExerciseState});
};



  return (
    <>
      <h2>New Workout</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Post Workout</label>
        <select htmlFor="workout" id="workout" value={workout.type} onChange={handleSubmit}>
          <option value="exercises">Exercises</option>
          <option value="calisthenics">Calisthenics</option>
        </select>
        <input
          type="text"
          value={workout.type}
          name='type'
          onChange={(evt) => setWorkout(prevState =>({...prevState,type:evt.target.value}))}
          required
        />
        <input
          type="date"
          value={workout.day}
          name='day'
          onChange={(evt) => setWorkout(prevState =>({...prevState,day: evt.target.value}))}
          required
        />
        <button type="submit">Add Workout</button>
      </form>

      <form autoComplete="off" onSubmit={handleSubmitExercise}>
        <label>Post Exercise</label>

        <label>Name</label>
        <input 
          type="text"
          name="name"
          value={exercise.name}
          onChange={(evt) => setExercise(prevState =>({...prevState,name: evt.target.value}))}
        />

        <label>Description</label>
        <input 
          type="text"
          name="description"
          value={exercise.description}
          onChange={(evt) => setExercise(prevState =>({...prevState,description: evt.target.value}))}
        />

        <label>Muscle Group</label>
        <input 
          type="text"
          name="muscleGroup"
          value={exercise.muscleGroup}
          onChange={(evt) => setExercise(prevState =>({...prevState,muscleGroup: evt.target.value}))}
        />

        <label>Sets</label>
        <input 
          type="text"
          name="sets"
          value={exercise.sets}
          onChange={(evt) => setExercise(prevState =>({...prevState,sets: evt.target.value}))}
        />

        <label>Reps</label>
        <input 
          type="text"
          name="reps"
          value={exercise.reps}
          onChange={(evt) => setExercise(prevState =>({...prevState,reps: evt.target.value}))}
        />

        <label>Weight</label>
        <input 
          type="text"
          name="weight"
          value={exercise.weight}
          onChange={(evt) => setExercise(prevState =>({...prevState,weight: evt.target.value}))}
        />
        <button type="submit">Add Exercise</button>
      </form>
    </>
  );
}


