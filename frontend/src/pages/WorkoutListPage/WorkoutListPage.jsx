import { useState, useEffect } from 'react';
// import {useNavigate} from "react-router";
import * as workoutService from '../../services/workoutService';
import './WorkoutListPage.css';
import WorkoutItem from '../../components/WorkoutItem/WorkoutItem';

export default function WorkoutListPage() {
  const [workouts, setWorkouts] = useState([]);

  // const navigate = useNavigate();

  async function handleDeleteWorkoutItem(workoutId) {
        const deletedWorkout = await workoutService.deleteWorkout(workoutId);
        setWorkouts(workouts.filter(workout => workout._id !== deletedWorkout._id));
        // navigate('/workouts');
    }

  useEffect(() => {
    async function fetchWorkouts() {
      const workouts = await workoutService.index();
      setWorkouts(workouts);
    }
    fetchWorkouts();
  }, []);

  const workoutItems = workouts.map((w) => <WorkoutItem 
  key={w._id} 
  workout={w} 
  handleDeleteWorkoutItem={handleDeleteWorkoutItem}
  />);

  return (
    <>
      <h1>Workout List</h1>
      <section className="workout-item-container">{workoutItems}</section>
    </>
  );
}
