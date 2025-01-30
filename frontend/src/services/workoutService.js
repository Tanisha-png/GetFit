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

export async function updateExercise( workoutId, exerciseId, exercise) {
  return sendRequest(`${BASE_URL}/${workoutId}/exercises/${exerciseId}`, 'PUT', exercise);
}

export async function create(workout) {
  return sendRequest(BASE_URL, 'POST', { workout });
}

export async function deleteExercise(workout) {
  return sendRequest(BASE_URL, 'DELETE', {workout})
}

export async function getAll() {
  return sendRequest(BASE_URL);
}

export async function getOne(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}
