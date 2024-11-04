import logo from './logo.svg';
// import LandingPage from './components/LandingPage'
import Dashboard from './components/Dashboard';
import Dashboard1 from './components/Dashboard1';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      {/* <LandingPage/> */}
      <Dashboard />
      <Dashboard1 />
      <Login /> 
      <Register />
    </div>
  );
}

export default App;
