import { useState } from 'react';
import { useNavigate } from 'react-router';
import * as workoutService from '../../services/workoutService';
import NewWorkout from '../../components/NewWorkout/NewWorkout';

export default function NewWorkoutPage() {
  const [content, setContent] = useState('');

  const navigate = useNavigate();

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const workout = await workoutService.create(content);
      navigate('/workouts');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h2>New Workout</h2>
      <NewWorkout />
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Post Workout</label>
        <input
          type="text"
          value={content}
          onChange={(evt) => setContent(evt.target.value)}
          required
        />
        <button type="submit">Add Workout</button>
      </form>
    </>
  );
}

