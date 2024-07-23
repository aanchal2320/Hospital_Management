import React from 'react'; 
import { Link } from 'react-router-dom'; 
import '../styles/BookAppointmentOptions.css'; 
import doctorImage from '../images/doctor.jpeg'; 
 
const BookAppointmentOptions = () => { 
    return ( 
        <> 
            <div className="book-appointment"> 
                <div className='book-appointment-image'> 
                    <img src={doctorImage} alt='...' width="100%" /> 
                </div> 
            </div> 
            <div className="book-appointment-options"> 
                <div className="book-appointment-option"> 
                    <Link to="/patient-login"><button className='book-appointment-option-buttons'>Login as Patient</button></Link> 
                </div> 
                <div className="book-appointment-option"> 
                    <Link to="/patient-register"><button className='book-appointment-option-buttons'>Register as Patient</button></Link> 
                </div> 
            </div> 
        </> 
    ); 
}; 
 
export default BookAppointmentOptions;

