const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../controllers/workouts');


// All path start with '/api/workouts'

// POST /api/workouts
router.post('/', workoutsCtrl.create);

// GET /api/workouts
router.get('/', workoutsCtrl.index);

// GET /api/workouts/:id
router.get('/:id', workoutsCtrl.show);

// DELETE /api/workouts/delete-exercise/:exerciseId
router.delete('/delete-exercise/:exerciseId', workoutsCtrl.deleteExercise);

// PUT /api/workouts/:workoutId/exercises/:exerciseId
router.put('/:workoutId/exercises/:exerciseId', workoutsCtrl.updateExercise);

// PUT /api/workouts/:workoutId
router.put('/:workoutId', workoutsCtrl.updateWorkout);



// Path start with '/api/workouts/exercises'

// GET /api/workouts/exercises (INDEX action)
router.get('/exercises', workoutsCtrl.allExercises);

// POST /api/workouts/:id/exercises (CREATE action)
router.get('/:id/exercises', workoutsCtrl.createExercise);

module.exports = router;