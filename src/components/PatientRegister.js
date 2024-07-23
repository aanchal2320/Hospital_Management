import React, { useState } from 'react'; 
 import { registerPatient } from '../api/api'; 
import '../styles/PatientRegister.css'; 
import doctorImage from '../images/doctor.jpeg'; 
 
const PatientRegister = () => { 
    const [patient, setPatient] = useState({ 
        name: '', 
        address: '', 
        phoneNumber: '', 
        disease: '' 
    }); 
 
    const [registrationStatus, setRegistrationStatus] = useState(''); 
    const [registeredPatient, setRegisteredPatient] = useState(null); 
 
    const handleChange = (e) => { 
        setPatient({ 
            ...patient, 
            [e.target.name]: e.target.value 
        }); 
    }; 
 
    const handleSubmit = (e) => { 
        e.preventDefault(); 
        registerPatient(patient) 
            .then(response => { 
                console.log(response); 
                setRegisteredPatient(response); // Assuming response contains registered patient details 
                setRegistrationStatus('Registration successful'); 
            }) 
            .catch(error => { 
                console.error(error); 
                setRegistrationStatus('Registration failed'); 
            }); 
    }; 
 
    return ( 
        <div className="patient-register"> 
            <div className='patient-register-image'> 
                <img src={doctorImage} alt='...' width="100%" height="100%" /> 
            </div> 
            <form className='patient-register-form' onSubmit={handleSubmit}> 
                <h2>Register as Patient</h2> 
                {/* <form onSubmit={handleSubmit}> */} 
                <input className='patient-register-form-inputs' type="text" name="name" placeholder="Name" onChange={handleChange} required /> 
                <input className='patient-register-form-inputs' type="text" name="address" placeholder="Address" onChange={handleChange} required /> 
                <input className='patient-register-form-inputs' type="text" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required /> 
                <input className='patient-register-form-inputs' type="text" name="disease" placeholder="Disease" onChange={handleChange} required /> 
                <button className='patient-register-form-button' type="submit">Register</button> 
            </form> 
 
            {registrationStatus && <p>{registrationStatus}</p>} 
 
            {registeredPatient && ( 
                <div className="registered-patient-details"> 
                    <h3>Registered Patient Details</h3> 
                    <p><strong>Your ID:</strong> {registeredPatient.id}</p> 
                    <p><strong>Name:</strong> {registeredPatient.name}</p> 
                    <p><strong>Address:</strong> {registeredPatient.address}</p> 
                    <p><strong>Phone Number:</strong> {registeredPatient.phoneNumber}</p> 
                    <p><strong>Disease:</strong> {registeredPatient.disease}</p> 
                </div> 
            )} 
 
 
        </div> 
    ); 
}; 
 
export default PatientRegister;
