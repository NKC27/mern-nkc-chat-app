import Navbar from './components/Navbar';
import HomePage from './pages/Homepage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import Settings from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';

import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuthStore } from './store/useAuthStore.js';

const App = () => {
  const { authUser, checkAuth } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log('authUser', { authUser });
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/signup" element={<SignUpPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default App;
