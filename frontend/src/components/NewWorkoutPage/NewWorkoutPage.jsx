import React,  { useState } from 'react';
import { useNavigate } from 'react-router';

const initialState = {
    sets: '',
    reps: '',
    weight: '',
    day: Date,
    exercises: [],
};

const NewWorkoutPage = ({addWorkout}) => {
    const [workout, setWorkout] = useState(initialState);

    const navigate = useNavigate();

    const handleChange = ({target}) => {
        setWorkout({...workout, [target.name]: target.value });
    };

    const handleSubmit =




    
}

export default NewWorkoutPage;