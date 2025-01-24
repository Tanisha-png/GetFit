const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    muscleGroup: {
        type: [Schema.Types.ObjectId],
    },
});

const workoutSchema = new mongoose.Schema({
    sets: {
        type: String,
        required: true,
    },
    reps: {
        type: String,
        required: true,
    },
    weight: {
        type: String,
        required: true,
    },
    workout: [exerciseSchema],
});

module.exports = mongoose.model('Workout', workoutSchema);