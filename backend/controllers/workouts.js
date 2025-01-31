const Workout = require('../models/workout');

module.exports = {
    create,
    index,
    show,
    updateWorkout,
    updateExercise,
    allExercises,
    createExercise,
    deleteExercise,
    deleteWorkout,
};

// GET /api/workouts (INDEX action)
async function index(req, res) {
    const workouts = await Workout.find({user: req.user._id}).populate('user');
    res.json(workouts);
}

// GET /api/workouts/:workoutsId (SHOW action)
async function show(req, res) {
    const workout = await Workout.findById(req.params.id);
    res.json(workout);
}



// POST /api/workouts (CREATE action)
async function create(req, res) {
    const newWorkout = req.body.workout
    try {
        newWorkout.user = req.user._id;
        const workout = await Workout.create(newWorkout);
        res.json(workout);
    } catch (err) {
        console.log(err);
        res.status(400).json({message: 'Create Post Failed'});
    }
};

// PUT /api/workouts/:workoutId (UPDATE action)
async function updateWorkout(req, res) {
    try {
        const workout = await Workout.findByIdAndUpdate(req.params.workoutId, req.body);
        res.json(workout);
    } catch (err) {
        res.json(err);
    };
};

// PUT /api/workouts/exercises/:exerciseId (UPDATE action)
async function updateExercise(req, res) {
    try {
        const workout = await Workout.findOne({'exercises._id': req.params.exerciseId});
        const exercise = workout.exercises.id(req.params.exerciseId);
        exercise.set(req.body);
        await workout.save();
        res.json(workout);
    } catch (err) {
        res.json(err);
    };
};


// GET /api/workouts/exercises (INDEX action)
async function allExercises(req, res) {
    const workout = await Workout.find({user: req.user._id}).populate('exercises');
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
    const workout = await Workout.findOne({"exercises._id": req.params.exerciseId});
    workout.exercises.id(req.params.exerciseId).deleteOne();
    await workout.save();
    res.json(workout);
};

// DELETE /api/workouts/delete-workout/:workoutId (DELETE action)
async function deleteWorkout(req, res) {
    const workout = await Workout.findByIdAndDelete(req.params.workoutId);
    res.json(workout);
};

