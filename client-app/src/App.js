import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Note the import change
import Homescreen from './screen/Homescreen';
import BookingScreen from './screen/Bookingscreen';
import RegistrationScreen from './screen/Registration';
import LoginScreen from './screen/Login';


function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Homescreen />} /> 
          <Route path='/book/:roomid/:formattedStartDate/:formattedEndDate' element={<BookingScreen />} />
          <Route path='/register' element={<RegistrationScreen/>} />
          <Route path='/login' element={<LoginScreen/>} />
          <Route path="/homescreen" element={<Homescreen />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
