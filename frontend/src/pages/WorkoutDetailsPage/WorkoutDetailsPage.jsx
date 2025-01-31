import { useState, useEffect } from "react";
import { useParams } from "react-router";
import * as workoutService from "../../services/workoutService";
import "./WorkoutDetailsPage.css";

export default function WorkoutDetailsPage() {
  const [workout, setWorkout] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editingExerciseId, setEditingExerciseId] = useState(null);
  const [exerciseData, setExerciseData] = useState(null);

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

  async function handleEditExercise(evt) {
    evt.preventDefault();
    setWorkout(updatedWorkout);
    setEditingExerciseId(null);
  }

  async function handleChange(evt) {
    setExerciseData({...exerciseData, [evt.target.name]: evt.target.value});
  }

  function handleEditClick(exercise) {
    setEditingExerciseId(exercise._id);
    const exerciseCopy = {...exercise};
    delete exerciseCopy._id;
    setExerciseData(exerciseCopy);
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
              workout.exercises.map((ex) =>
                ex._id === editingExerciseId ? (
                  <form onSubmit={handleEditExercise}>
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={exerciseData.name}
                      onChange={handleChange}
                    />

                    <label>Description</label>
                    <input
                      type="text"
                      name="description"
                      value={exerciseData.description}
                      onChange={handleChange}
                      required
                    />

                    <label>Muscle Group</label>
                    <input
                      type="text"
                      name="muscleGroup"
                      value={exerciseData.muscleGroup}
                      onChange={handleChange}
                      required
                    />

                    <label>Sets</label>
                    <input
                      type="text"
                      name="sets"
                      value={exerciseData.sets}
                      onChange={handleChange}
                      required
                    />

                    <label>Reps</label>
                    <input
                      type="text"
                      name="reps"
                      value={exerciseData.reps}
                      onChange={handleChange}
                      required
                    />

                    <label>Weight</label>
                    <input
                      type="text"
                      name="weight"
                      value={exerciseData.weight}
                      onChange={handleChange}
                      required
                    />
                    <button type="submit">Save Exercise</button>
                  </form>
                ) : (
                  <div key={ex._id}>
                    <h3>Description: {ex.description}</h3>
                    <h3>Name: {ex.name}</h3>
                    <h3>Muscle Group: {ex.muscleGroup}</h3>
                    <h3>Sets: {ex.sets}</h3>
                    <h3>Reps: {ex.reps}</h3>
                    <h3>Weight: {ex.weight}</h3>
                    <button onClick={() => handleEditClick(ex)}>
                      Edit 📝
                    </button>
                    <button onClick={() => handleDeleteExercise(ex._id)}>
                      Delete ❌
                    </button>
                  </div>
                )
              )
            ) : (
              <p>No exercises yet</p>
            )}
          </article>
          <div></div>
        </section>
      )}
    </>
  );
}
