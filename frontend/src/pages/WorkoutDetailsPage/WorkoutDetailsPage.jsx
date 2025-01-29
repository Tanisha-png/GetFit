import { useState, useEffect } from "react";
import * as workoutService from "../../services/workoutService";
import "./WorkoutDetailsPage.css";

export default function WorkoutDetailsPage() {
  const [workouts, setWorkouts] = useState(null);
  const [availWorkouts, setAvailWorkouts] = useState([]);
  const { id } = useParams();

useEffect(() => {
    async function fetchWorkout() {
        const workouts = await workoutService.getOne(id);
        setWorkouts(workouts);
    }
    fetchWorkout();

    async function fetchAvailWorkouts() {
        const fetchAvailWorkouts = await workoutService.getAvailWorkouts(workoutId);
        setAvailWorkouts(fetchAvailWorkouts);
    }
    fetchAvailWorkouts();
}, [id]);

if (!workouts) return null;

return (
    <>
        <h1>Workout Details</h1>
            <section className="WorkoutDetailsPage">
        <article>
            <h2>{workouts.name}</h2>
            <p>{workouts.description}</p>
            <hr />
            <h4>Workouts</h4>
            {workouts.exercise.length ? <p>Workouts exist</p> : <p>No workouts yet</p>}
        </article>
        <article>
            <h2>Available Workouts</h2>
            {availWorkouts.length ? <p>Available Workouts Exist</p> : <p>No Available Workouts Yet</p>}
        </article>
      </section>
    </>
  );
}
