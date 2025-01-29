import { useState, useEffect } from "react";
import * as workoutService from "../../services/workoutService";
import "./WorkoutListPage.css";

export default function WorkoutDetailsPage() {
  const [workouts, setWorkouts] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchWorkout() {
      const workouts = await workoutService.getOne(id);
      setWorkouts(workouts);
    }
    fetchWorkout();
  }, [id]);

if (!workouts) return null;

  return (
    <>
      <h1>Workout Details</h1>
      <section>
        <h2>{workouts.name}</h2>
        <p>{workouts.description}</p>
        <hr />
        <h4>Workouts</h4>
        {workouts.exercise.length ? <p>Workouts exist</p> : <p>No workouts yet</p>}
      </section>
    </>
  );
}
