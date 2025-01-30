import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./EditWorkoutPage.css";
import * as workoutService from "../../services/workoutService";

export default function EditWorkoutPage() {
  const [workout, setWorkout] = useState(null);
  // const [workoutData, setWorkoutData] = useState({
  //   type: "",
  //   day: "",
  //   exercises: [],
  // });

  const emptyExerciseState = {
    name: "",
    description: "",
    muscleGroup: "",
    sets: "",
    reps: "",
    weight: "",
  };

  const [exercise, setExercise] = useState({ ...emptyExerciseState });

  const [exerciseData, setExerciseData] = useState({});

  const navigate = useNavigate();

  const { id } = useParams();

  async function handleSubmitWorkout(evt) {
    console.log(workout);
    evt.preventDefault();
    try {
      const updatedWorkout = await workoutService.updateWorkout(workout, workout._id);
      setWorkout(updatedWorkout)
      navigate("/workouts");
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
      async function fetchWorkout() {
        const workout = await workoutService.getOne(id);
        setWorkout(workout);
      }
      fetchWorkout();
    }, [id]);

  async function handleSubmitExercise(evt) {
    evt.preventDefault();
    try {
      const updatedWorkout = await workoutService.updateExercise(workout._id, exercise._id, exerciseData);
      setWorkout(updatedWorkout)
      navigate("/workouts");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h2>Edit Workout</h2>
      <div className="EditWorkoutPage">
        <section>
          <form autoComplete="off" onSubmit={handleSubmitWorkout}>
            <label>Update Workout</label>
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
            <button type="submit">Edit Workout</button>
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
            <a><p>New Exercise</p></a>
          )}
        </section>

        {/* <form autoComplete="off" onSubmit={handleSubmitExercise}>
          <label>Post Exercise</label>

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
        </form> */}
      </div>
    </>
  );
}
