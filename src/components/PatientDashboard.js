import React, { useState, useEffect } from 'react'; 
import { useLocation } from 'react-router-dom';
import { getDoctors } from '../api/api'; // Adjust this based on your API

const PatientDashboard = () => {
  const location = useLocation();
  const [patientId, setPatientId] = useState('');
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    if (location.state && location.state.patientId) {
      const { patientId } = location.state;
      setPatientId(patientId);
      fetchDoctors();
    }
  }, [location.state]);

  const fetchDoctors = () => {
    getDoctors() // Fetch list of doctors from your backend API
      .then(data => {
        setDoctors(data); // Assuming data is an array of doctors with id, name, specialization
      })
      .catch(error => {
        console.error('Error fetching doctors:', error);
      });
  };

  return (
    <div className="patient-dashboard">
      <h2>Welcome Patient ID: {patientId}</h2>

      <div className="doctors-list">
        <h3>Doctors List</h3>
        <ul>
          {doctors.map(doctor => (
            <li key={doctor.id}>
              Doctor ID: {doctor.id}, Name: {doctor.name}, Specialization: {doctor.specialization}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PatientDashboard;

