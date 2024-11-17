import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Dashboard1 from './components/Dashboard1';
import Login from './components/Login';
import Register from './components/Register';
import PaymentDetails from './components/PaymentDetails';
import PesanTiket from './components/PesanTiket';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define the routes for each component */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard1" element={<Dashboard1 />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="/test-payment" element={<PaymentDetails />} />
          <Route path="/pesan-tiket" element={<PesanTiket />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
