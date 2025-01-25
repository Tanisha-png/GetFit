const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
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
        type: [String],
    },
});

const workoutSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
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
    day: {
        type: String,
        required: true,
    },
    exercises: [exerciseSchema],
});

module.exports = mongoose.model('Workout', workoutSchema);