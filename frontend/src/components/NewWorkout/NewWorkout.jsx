import React,  { useState } from 'react';
import { useNavigate } from 'react-router';

const initialState = {
    sets: '',
    reps: '',
    weight: '',
    day: Date,
    exercises: [],
    muscleGroup: [],
};

const NewWorkout = ({addWorkout}) => {
    const [workout, setWorkout] = useState(initialState);

    const navigate = useNavigate();

    const handleChange = ({target}) => {
        setWorkout({...workout, [target.name]: target.value });
    };

    const handleSubmit = (evt) => {
        console.log(evt);
        evt.preventDefault();
        addWorkout(workout);
        navigate('/workouts');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='workout'>Workout:</label>
            <select name="workout" id="workout" value={workout.value} onChange={handleChange}>
                <option value="exercises">Exercises</option>
                <option value="sets">Sets</option>
                <option value="reps">Reps</option>
                <option value="weight">Weight</option>
            </select>

            <label htmlFor="muscleGroup">Muscle Group</label>
            <input 
                name="muscleGroup"
                type="text"
                id="muscleGroup"
                value={workout.muscleGroup}
                onChange={handleChange}
            />

            <button type="submit">Add Workout</button>
            </form>
    );

}

export default NewWorkout;