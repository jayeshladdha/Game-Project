import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useClerk } from '@clerk/clerk-react';
import HomePage from './pages/HomePage';
import GameDetailPage from './pages/GameDetailPage';
import AuthPage from './pages/AuthPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const { isLoaded, isSignedIn } = useClerk();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/auth/*" element={<AuthPage />} />
        <Route path="/" element={<ProtectedRoute isSignedIn={isSignedIn}><HomePage /></ProtectedRoute>} />
        <Route path="/game/:id" element={<ProtectedRoute isSignedIn={isSignedIn}><GameDetailPage /></ProtectedRoute>} />
      </Routes>
    </div>
  );
}

export default App;