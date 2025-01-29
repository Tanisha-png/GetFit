const Workout = require('../models/workout');

module.exports = {
    create,
    index,
    show,
    allExercises,
    createExercise,
    deleteExercise,
};

// GET /api/workouts (INDEX action)
async function index(req, res) {
    const workouts = await Workout.find({}).populate('user');
    res.json(workouts);
}

// GET /api/workouts/:workoutsId (SHOW action)
async function show(req, res) {
    const workout = await Workout.findById(req.params.id);
    res.json(workout);
}

// POST /api/workouts (CREATE action)
async function create(req, res) {
    console.log(req.body);
    const newWorkout = req.body.workout
    
    console.log(newWorkout)
    try {
        newWorkout.user = req.user._id;
        const workout = await Workout.create(newWorkout);
        res.json(workout);
    } catch (err) {
        console.log(err);
        res.status(400).json({message: 'Create Post Failed'});
    }
};


// GET /api/workouts/exercises (INDEX action)
async function allExercises(req, res) {
    const workout = await Workout.find({}).populate('exercises');
    res.json(workout);
};

// POST /api/workouts/:id/exercises (CREATE action)
async function createExercise(req, res) {
    try {
        const workout = await Workout.findById(req.params.id);
        workout.exercises.push(req.body);
        await workout.save();
        res.json(workout)
    } catch (err) {
        console.log(err);
        res.status(400).json({message: 'Create Post Failed '})
    }
};

// DELETE /api/workouts/:workoutId/exercises/:exerciseId (DELETE action)
async function deleteExercise(req, res) {
    const workout = await Workout.findById(req.params.workoutId)
    workout.exercises.id(req.params.exerciseId).deleteOne();
    await workout.save();
};

