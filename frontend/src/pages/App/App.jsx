import { useState } from 'react';
import { Routes, Route } from 'react-router';
import { getUser } from '../../services/authService';
import './App.css';
import HomePage from '../HomePage/HomePage';
import WorkoutListPage from '../WorkoutListPage/WorkoutListPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import LogInPage from '../LogInPage/LogInPage';
import NavBar from '../../components/NavBar/NavBar';
import NewWorkoutPage from '../NewWorkoutPage/NewWorkoutPage';
import WorkoutDetailsPage from '../WorkoutDetailsPage/WorkoutDetailsPage';


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <section id="main-section">
        {user ? (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/workouts" element={<WorkoutListPage />} />
            <Route path="/workouts/new" element={<NewWorkoutPage />} />
            <Route path="/workouts/edit" element={<EditWorkoutPage />} />
            <Route path="/workouts/:id" element={<WorkoutDetailsPage />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage setUser={setUser} />} />
            <Route path="/login" element={<LogInPage setUser={setUser} />} />
          </Routes>
        )}
      </section>
    </main>
  );
}
