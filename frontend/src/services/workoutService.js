import sendRequest from "./sendRequest";

const BASE_URL = '/api/workouts';

export async function index() {
  return sendRequest(BASE_URL);
}

export async function edit(workout) {
  return sendRequest(BASE_URL, 'GET', {workout});
}

export async function show(workout) {
  return sendRequest(BASE_URL, 'GET', {workout});
}

export async function updateWorkout(workout, workoutId) {
  return sendRequest(`${BASE_URL}/${workoutId}`, 'PUT', workout);
}

export async function updateExercise(exerciseId, exerciseData) {
  return sendRequest(`${BASE_URL}/exercises/${exerciseId}`, 'PUT', exerciseData);
}

export async function create(workout) {
  return sendRequest(BASE_URL, 'POST', { workout });
}

export async function deleteExercise(exerciseId) {
  return sendRequest(`${BASE_URL}/delete-exercise/${exerciseId}`, 'DELETE')
}

export async function deleteWorkout(workoutId) {
  return sendRequest(`${BASE_URL}/delete-workout/${workoutId}`, 'DELETE')
}

export async function getAll() {
  return sendRequest(BASE_URL);
}

export async function getOne(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}
