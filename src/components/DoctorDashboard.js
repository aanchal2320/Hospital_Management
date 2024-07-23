import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import { getAppointmentsForDoctor } from '../api/api';
import moment from 'moment';
import '../styles/DoctorDashboard.css';

const DoctorDashboard = () => {
  const { doctorId } = useParams();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (doctorId) {
      getAppointmentsForDoctor(doctorId)
        .then(setAppointments)
        .catch(console.error);
    }
  }, [doctorId]);

  return (
    <div className="doctor-dashboard">
      <h2>Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            Patient ID: {appointment.patientId}, Date: {moment(appointment.appointmentDate).format('MMMM Do YYYY')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorDashboard;

