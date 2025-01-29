import { useState, useEffect } from 'react';
import * as workoutService from '../../services/workoutService';
import './WorkoutListPage.css';
import WorkoutItem from '../../components/WorkoutItem/WorkoutItem';

export default function WorkoutListPage() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    async function fetchWorkouts() {
      const workouts = await workoutService.index();
      setWorkouts(workouts);
    }
    fetchWorkouts();
  }, []);

  const workoutItems = workouts.map((w) => <WorkoutItem key={w._id} workout={w} />);

  return (
    <>
      <h1>Workout List</h1>
      <section className="workout-item-container">{workoutItems}</section>
    </>
  );
}
