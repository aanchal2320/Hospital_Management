import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css'; 
import '../styles/BookAppointmentPage.css'; 
import doctorImage from '../images/doctor.jpeg'; 
 
const BookAppointmentPage = () => { 
    const [doctorId, setDoctorId] = useState(''); 
    const [patientId, setPatientId] = useState(''); 
    const [selectedDate, setSelectedDate] = useState(null);
    const [bookingDetails, setBookingDetails] = useState(null);
    const [bookingMessage, setBookingMessage] = useState('');

    useEffect(() => {
        if (bookingDetails && doctorId) {
            fetchDoctorDetails();
        }
    }, [bookingDetails]);

    const handleBookAppointment = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8082/patients/appointments', {
                doctorId,
                patientId,
                appointmentDate: selectedDate
            });

            if (response.status === 200) {
                const appointmentId = response.data.id; // Assuming backend sends back the generated ID
                const formattedDate = selectedDate.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });

                // Set booking details for immediate display
                setBookingDetails({
                    appointmentId,
                    patient: { id: patientId }, // Simulate patient details if not fetched
                    appointmentDate: formattedDate
                });

                setBookingMessage("Appointment booked successfully!");
            }
        } catch (error) {
            console.error('Error booking appointment:', error);
            setBookingMessage('Failed to book appointment. Please try again.');
        }
    };

    const fetchDoctorDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:8083/doctors/${doctorId}`);
            const doctorDetails = response.data;

            setBookingDetails(prevDetails => ({
                ...prevDetails,
                doctor: doctorDetails
            }));
        } catch (error) {
            console.error('Error fetching doctor details:', error);
        }
    };

 
    return ( 
        <div className="book-appointment-page"> 
            <div className='book-appointment-page-image'> 
                <img src={doctorImage} alt='...' width="100%" height="100%"/> 
            </div> 
            <form className="book-appointment-page-form"> 
                <h2>Book Appointment</h2> 
                <label className='book-appointment-page-form-input-fields'>Doctor ID: 
                    <input className='book-appointment-page-form-inputs' type="text" value={doctorId} onChange={(e) => setDoctorId(e.target.value)} /> 
                </label> 
                <label className='book-appointment-page-form-input-fields'>Patient ID: 
                    <input className='book-appointment-page-form-inputs' type="text" value={patientId} onChange={(e) => setPatientId(e.target.value)} /> 
                </label> 
                <label className='book-appointment-page-form-input-fields'>Select Date:</label> 
                <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} /> 
                <button className='book-appointment-page-form-button' onClick={handleBookAppointment}>Book Appointment</button> 
                {bookingDetails && ( 
                    <div className="appointment-details"> 
                        <h3>Appointment Details</h3> 
                        <p><strong>Patient ID:</strong> {bookingDetails.patient ? bookingDetails.patient.id : 
'Loading...'}</p> 
                        <p><strong>Patient Name:</strong> {bookingDetails.patient ? bookingDetails.patient.name : 'Loading...'}</p> 
                        <p><strong>Doctor ID:</strong> {bookingDetails.doctor ? bookingDetails.doctor.id : 'Loading...'}</p> 
                        <p><strong>Doctor Name:</strong> {bookingDetails.doctor ? bookingDetails.doctor.name : 'Loading...'}</p> 
                        <p><strong>Specialization:</strong> {bookingDetails.doctor ? bookingDetails.doctor.specialization : 'Loading...'}</p> 
                        <p><strong>Appointment Date:</strong> {bookingDetails.appointmentDate}</p> 
                        <p><strong>Appointment ID:</strong> {bookingDetails.appointmentId}</p> 
                    </div> 
                )} 
                <p>{bookingMessage}</p> 
            </form> 
        </div> 
    ); 
}; 
 
export default BookAppointmentPage;

