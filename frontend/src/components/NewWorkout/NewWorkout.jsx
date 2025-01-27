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
                <option value="calisthenics">Calisthenics</option>
            </select>

            <label htmlFor="muscleGroup">Muscle Group</label>
            <textarea 
                name="muscleGroup"
                type="text"
                id="muscleGroup"
                value={workout.muscleGroup}
                onChange={handleChange}
            />

            <label htmlFor="Sets">Sets</label>
            <textarea 
                name="sets"
                type="text"
                id="sets"
                value={workout.sets}
                onChange={handleChange}
            />

            <label htmlFor="Reps">Reps</label>
            <textarea 
                name="reps"
                type="text"
                id="reps"
                value={workout.reps}
                onChange={handleChange}
            />

            <label htmlFor="Weight">Weight</label>
            <textarea 
                name="weight"
                type="text"
                id="weight"
                value={workout.weight}
                onChange={handleChange}
            />

            <button type="submit">Add Workout</button>
            </form>
    );

}

export default NewWorkout;