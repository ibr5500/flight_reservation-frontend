import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavigationPanel from './Components/NavigationPanel';
import Home from './Components/Home';
import DeletedFlights from './Components/DeletedFlights';
import Reservations from './Components/Reservations';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import AirlineForm from './Components/AirlineForm';
import ReservationForm from './Components/ReservationForm';
import AirlineDetails from './Components/AirlineDetails';

function App() {
  if (sessionStorage.getItem('loginToken')) {
    return (
      <div>
        <NavigationPanel />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/airline/:id" element={<AirlineDetails />} />
          <Route path="/cancelled" element={<DeletedFlights />} />
          <Route path="/airlineForm" element={<AirlineForm />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/reservationForm/:id" element={<ReservationForm />} />
        </Routes>
      </div>
    );
  } return <Login />;
}

export default App;
