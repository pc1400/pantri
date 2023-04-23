import React, { useState } from 'react';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Validate the user's login information here and set loggedIn to true if it's valid
    // You could do this with an API call to your database or by storing user information in AsyncStorage
    // For simplicity, I'll just check if the username and password are "admin"
    if (username === 'admin' && password === 'admin') {
      setLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <React.Fragment>
      {loggedIn ? (
        <HomeScreen onLogout={handleLogout} />
      ) : (
        <LoginScreen onLogin={handleLogin} />
      )}
    </React.Fragment>
  );
}
