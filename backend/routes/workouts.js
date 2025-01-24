const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../controllers/workouts');

// All path start with '/api/workouts'

// POST /api/workouts
router.post('/', workoutsCtrl.create);

// GET /api/workouts
router.get('/', workoutsCtrl.index);

module.exports = router;