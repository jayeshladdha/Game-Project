import React from 'react';
import { SignIn, SignUp, RedirectToSignIn } from '@clerk/clerk-react';
import { Routes, Route } from 'react-router-dom';

function AuthPage() {
  return (
    <div className="auth-page">
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<RedirectToSignIn />} />
      </Routes>
    </div>
  );
}

export default AuthPage;