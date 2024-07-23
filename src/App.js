import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import PatientRegister from './components/PatientRegister';
import PatientLogin from './components/PatientLogin';
import DoctorRegister from './components/DoctorRegister';
import DoctorLogin from './components/DoctorLogin';
import BookAppointmentOptions from './components/BookAppointmentOptions';
import DoctorLoginOptions from './components/DoctorLoginOptions';
import DoctorDashboard from './components/DoctorDashboard';
import PatientDashboard from './components/PatientDashboard';
import ViewDoctors from './components/ViewDoctors';
import BookAppointmentPage from './components/BookAppointmentPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ServicePage from './components/ServicePage';
import BlogPage from './components/BlogPage';
// import other components as needed

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/services' element={<ServicePage/>} />
        <Route path='/blog' element={<BlogPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path="/patient-register" element={<PatientRegister />} />
        <Route path="/patient-login" element={<PatientLogin />} />
        <Route path="/view-doctors" element={<ViewDoctors/>} />
        <Route path="/book-appointment/:doctorId" element={<BookAppointmentPage/>} />
        <Route path="/doctor-register" element={<DoctorRegister />} />
        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/book-appointment-options" element={<BookAppointmentOptions />} />
        <Route path="/doctor-login-options" element={<DoctorLoginOptions />} />
        <Route path="/doctor-dashboard/:doctorId" element={<DoctorDashboard/>} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        {/* add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;

