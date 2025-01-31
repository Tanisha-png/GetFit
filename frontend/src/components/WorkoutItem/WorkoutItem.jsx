import {Link} from "react-router";

export default function WorkoutItem({ workout, handleDeleteWorkoutItem }) {

  return (
    <article className='WorkoutItem'>
      <h4>{new Date(workout.day).toLocaleDateString()}</h4>
      <p>{workout.type}</p>
      {/* <h4>{workout.user.name}</h4> */}
      <Link to={`/workouts/${workout._id}`}>Details</Link>
      <button onClick={() => handleDeleteWorkoutItem(workout._id)}>❌</button>
    </article>
  );
};
