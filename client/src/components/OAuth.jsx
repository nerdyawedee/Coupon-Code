import React, { useState } from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../Firebase.js';
import { useNavigate } from 'react-router-dom';
import { Button, CircularProgress } from '@mui/material';

export default function OAuth() {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const [user, setUser] = useState(null); // User state for managing session

  const handleGoogleClick = async () => {
    if (isLoading) return; // Prevent multiple triggers
    setIsLoading(true);

    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });

    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      const res = await fetch('http://localhost:3000/api/user/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: resultsFromGoogle.user.name,
          email: resultsFromGoogle.user.email,
          googlePhotoUrl: resultsFromGoogle.user.photoURL,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // Update user state and store JWT in localStorage
        setUser(data);
        localStorage.setItem('token', data.token);

        navigate('/'); // Redirect to the homepage
      } else {
        console.error('Failed to authenticate', data);
      }
    } catch (error) {
      console.error('Error during authentication:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {!user ? (
        <Button
          variant="contained"
          color="primary"
          onClick={handleGoogleClick}
          disabled={isLoading} // Disable button while loading
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            background: 'linear-gradient(to right, #FF4081, #FF5722)',
            '&:hover': {
              background: 'linear-gradient(to right, #F50057, #FF3D00)',
            },
          }}
        >
          {isLoading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            <AiFillGoogleCircle className="w-6 h-6" />
          )}
          {isLoading ? 'Signing in...' : 'Continue with Google'}
        </Button>
      ) : (
        <div>
          <p>Welcome, {user.name}</p>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              setUser(null);
              localStorage.removeItem('userToken'); // Clear token on logout
            }}
          >
            Logout
          </Button>
        </div>
      )}
    </div>
  );
}
