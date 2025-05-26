import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Events from './pages/Events';
import Profile from './pages/Profile';

function App() {
  const [userId, setUserId] = React.useState(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            userId ? <Navigate to="/events" /> : <Login setUserId={setUserId} />
          }
        />
        <Route
          path="/events"
          element={userId ? <Events userId={userId} /> : <Navigate to="/" />}
        />
        <Route
          path="/profile"
          element={userId ? <Profile userId={userId} /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
