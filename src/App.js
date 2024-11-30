import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
// import Dashboard1 from './components/Dashboard1';
import Login from './components/Login';
import Register from './components/Register';
import PaymentDetails from './components/PaymentDetails';
import PesanTiket from './components/PesanTiket';
import Ticket from './components/Ticket';
import Profil1 from './components/Profil1';
import Profil2 from './components/Profil2';
import Profil3 from './components/Profil3';

// import Tiket from './components/Ticket'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define the routes for each component */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/dashboard1" element={<Dashboard1 />} /> */}
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="/PaymentDetails" element={<PaymentDetails />} />
          <Route path="/PesanTiket" element={<PesanTiket />} />
          <Route path="/Ticket" element={<Ticket />} />
          <Route path="/profil1" element={<Profil1 />}/>
          <Route path="/profil2" element={<Profil2 />}/>
          <Route path="/profil3" element={<Profil3 />}/>
        </Routes>
        {/* <Tiket/> */}
      </div>
    </Router>
  );
}

export default App;
