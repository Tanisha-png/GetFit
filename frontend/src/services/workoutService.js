import sendRequest from "./sendRequest";

const BASE_URL = '/api/workouts';

export async function index() {
  return sendRequest(BASE_URL);
}

export async function create(workout) {
  return sendRequest(BASE_URL, 'POST', { workout });
}