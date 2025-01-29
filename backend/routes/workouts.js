const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../controllers/workouts');


// All path start with '/api/workouts'

// POST /api/workouts
router.post('/', workoutsCtrl.create);

// GET /api/workouts
router.get('/', workoutsCtrl.index);

// GET /api/:id
router.get('/:id', workoutsCtrl.show);

// DELETE /api/workouts/:id
router.delete('/:workoutId/exercises/:exerciseId', workoutsCtrl.deleteExercise);


// Path start with '/api/workouts/exercises'

// GET /api/workouts/exercises (INDEX action)
router.get('/exercises', workoutsCtrl.allExercises);

// POST /api/workouts/:id/exercises (CREATE action)
router.get('/:id/exercises', workoutsCtrl.createExercise);

module.exports = router;