import { useState } from "react";
import { useNavigate } from "react-router";
import "./NewWorkoutPage.css";
import * as workoutService from "../../services/workoutService";

export default function NewWorkoutPage() {
  const [workout, setWorkout] = useState({
    type: "exercise",
    day: "",
    exercises: [],
  });

  const emptyExerciseState = {
    name: "",
    description: "",
    muscleGroup: "",
    sets: "",
    reps: "",
    weight: "",
  };

  const [exercise, setExercise] = useState({ ...emptyExerciseState });

  const navigate = useNavigate();

  async function handleSubmit(evt) {
    console.log(workout);
    evt.preventDefault();
    try {
      await workoutService.create(workout);
      navigate("/workouts");
    } catch (err) {
      console.log(err);
    }
  }

  async function handleSubmitExercise(evt) {
    evt.preventDefault();
    setWorkout({ ...workout, exercises: [...workout.exercises, exercise] });
    setExercise({ ...emptyExerciseState });
  }

  return (
    <>
      <h2>New Workout</h2>
      <div className="NewWorkoutPage">
        <section>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Post Workout</label>
            <select
              htmlFor="workout"
              id="workout"
              value={workout.type}
              onChange={(evt) =>
                setWorkout((prevState) => ({
                  ...prevState,
                  type: evt.target.value,
                }))
              }
            >
              <option value="exercises">Exercises</option>
              <option value="calisthenics">Calisthenics</option>
            </select>

            <input
              type="date"
              value={workout.day}
              name="day"
              onChange={(evt) =>
                setWorkout((prevState) => ({
                  ...prevState,
                  day: evt.target.value,
                }))
              }
              required
            />
            <button type="submit">Add Workout</button>
          </form>
          <hr />
          <h5>Exercises</h5>
          {workout.exercises.length ? (
            workout.exercises.map((ex, idx) => (
              <article key={idx}>
                <h4>{ex.name}</h4>
              </article>
            ))
          ) : (
            <p>Must add exercises.</p>
          )}
        </section>

        <form autoComplete="off" onSubmit={handleSubmitExercise}>
          <label>Workout Exercise</label>

          <label>Name</label>
          <input
            type="text"
            name="name"
            value={exercise.name}
            onChange={(evt) =>
              setExercise((prevState) => ({
                ...prevState,
                name: evt.target.value,
              }))
            }
          />

          <label>Description</label>
          <input
            type="text"
            name="description"
            value={exercise.description}
            onChange={(evt) =>
              setExercise((prevState) => ({
                ...prevState,
                description: evt.target.value,
              }))
            }
            required
          />

          <label>Muscle Group</label>
          <input
            type="text"
            name="muscleGroup"
            value={exercise.muscleGroup}
            onChange={(evt) =>
              setExercise((prevState) => ({
                ...prevState,
                muscleGroup: evt.target.value,
              }))
            }
            required
          />

          <label>Sets</label>
          <input
            type="text"
            name="sets"
            value={exercise.sets}
            onChange={(evt) =>
              setExercise((prevState) => ({
                ...prevState,
                sets: evt.target.value,
              }))
            }
            required
          />

          <label>Reps</label>
          <input
            type="text"
            name="reps"
            value={exercise.reps}
            onChange={(evt) =>
              setExercise((prevState) => ({
                ...prevState,
                reps: evt.target.value,
              }))
            }
            required
          />

          <label>Weight</label>
          <input
            type="text"
            name="weight"
            value={exercise.weight}
            onChange={(evt) =>
              setExercise((prevState) => ({
                ...prevState,
                weight: evt.target.value,
              }))
            }
            required
          />
          <button type="submit">Add Exercise</button>
        </form>
      </div>
    </>
  );
}
