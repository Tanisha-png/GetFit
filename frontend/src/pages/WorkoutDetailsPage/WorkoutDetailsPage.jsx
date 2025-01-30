import { useState, useEffect } from "react";
import { useParams } from "react-router";
import * as workoutService from "../../services/workoutService";
import "./WorkoutDetailsPage.css";

export default function WorkoutDetailsPage() {
  const [workout, setWorkout] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [exerciseData, setExerciseData] = useState({
    name: "",
    description: "",
    muscleGroup: "",
    sets: "",
    reps: "",
    weight: "",
  });

  const { id } = useParams();

  useEffect(() => {
    async function fetchWorkout() {
      const workout = await workoutService.getOne(id);
      setWorkout(workout);
    }
    fetchWorkout();
  }, [id]);

  async function handleDeleteExercise(exerciseId) {
    const updatedWorkout = await workoutService.deleteExercise(exerciseId);
    setWorkout(updatedWorkout);
  }

  if (!workout) return null;

  return (
    <>
      <h1>Workout Details</h1>
      {isEditing ? (
        <h3>Editing</h3>
      ) : (
        <section className="WorkoutDetailsPage">
          <article>
            <h2>{new Date(workout.day).toLocaleDateString()}</h2>
            <p>Type: {workout.type}</p>
            <hr />
            <h4>Exercises</h4>
            {workout.exercises.length ? (
              workout.exercises.map((ex) => <div key={ex._id}>
                <h3>{ex.description}</h3>
                <button>Edit 📝</button>
                <button onClick={() => handleDeleteExercise(ex._id)}>Delete ❌</button>
              </div>)
            ) : (
              <p>No exercises yet</p>
            )}
          </article>
          <div>
          </div>
        </section>
      )}
    </>
  );
}
