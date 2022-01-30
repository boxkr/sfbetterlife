import './App.css';
import {BrowserRouter as Router, Route, Routes, Redirect} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import UserLogin from './components/UserLogin'
import UserHome from './components/UserHome'
import DoctorLogin from './components/DoctorLogin'
import DoctorHome from './components/DoctorHome'

function App() {
  return (

      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/userLogin' element={<UserLogin/>}/>
          <Route path='/doctorLogin' element={<DoctorLogin/>}/>
          <Route path='/dHome' element={<DoctorHome/>}/>
          <Route path='/uHome' element={<UserHome/>}/>
        </Routes>
      </Router>
  );
}

export default App;
