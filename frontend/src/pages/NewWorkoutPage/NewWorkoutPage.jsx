import { useState } from 'react';
import { useNavigate } from 'react-router';
import * as workoutService from '../../services/workoutService';


export default function NewWorkoutPage() {
  const [content, setContent] = useState('');
  const [workout, setWorkout] = useState({
    type: '',
    day: '',
    exercise: []
  });

  const emptyExerciseState = {
    name: '',
    description: '',
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
  setWorkout({...workout, exercises: [...workout.exercises, exercise]})
  setExercise({...emptyExerciseState});
};



  return (
    <>
      <h2>New Workout</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Post Workout</label>
        
        <input
          type="text"
          value={workout.type}
          name='type'
          onChange={(evt) => setWorkout(prevState =>({...prevState,type:evt.target.value}))}
          required
        />
        <input
          type="date"
          value={workout.date}
          name='date'
          onChange={(evt) => setWorkout(prevState =>({...prevState,day: evt.target.value}))}
          required
        />
        <button type="submit">Add Workout</button>
      </form>

      <form autoComplete="off" onSubmit={handleSubmitExercise}>
        <label>Post Exercise</label>
        <input 
          type="text"
          name="name"
          value={exercise.name}
          onChange={(evt) => setExercise(prevState =>({...prevState,name: evt.target.value}))}
        />
      </form>
    </>
  );
}


