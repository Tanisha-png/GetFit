const Workout = require('../models/workout');

module.exports = {
    create,
    index
};

// GET /api/workouts (INDEX action)
async function index(req, res) {
    const workouts = await Workout.find({}).populate('user').sort('-createdAt');
    res.json(workouts);
}

// POST /api/workouts (CREATE action)
async function create(req, res) {
    try {
        req.body.user = req.user._id;
        const workout = await Workout.create(req.body);
        res.json(workout);
    } catch (err) {
        console.log(err);
        res.status(400).json({message: 'Create Post Failed'});
    }
};