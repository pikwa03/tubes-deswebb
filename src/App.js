import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard'; // Import the Dashboard component
import Contact from './components/Contact';     // Import the Contact component
import Masuk from './components/Masuk';       // Import the SignIn component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define the routes for each component */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Masuk" element={<Masuk />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
