import React, { useState } from 'react'; 
import { registerDoctor } from '../api/api'; 
import '../styles/DoctorRegister.css'; 
import doctorImage from '../images/doctor.jpeg';
 
const DoctorRegister = () => { 
    const [doctor, setDoctor] = useState({ 
        name: '', 
        specialization: '' 
    }); 
 
    const [registrationStatus, setRegistrationStatus] = useState(''); 
    const [error, setError] = useState(''); 
 
    const handleChange = (e) => { 
        setDoctor({ 
            ...doctor, 
            [e.target.name]: e.target.value 
        }); 
    }; 
 
    const handleSubmit = (e) => { 
        e.preventDefault(); 
        registerDoctor(doctor) 
            .then(response => { 
                console.log('Doctor registered successfully:', response); 
                setRegistrationStatus(`Registration Successful.Doctor ID: ${ response.id }`); 
                // Optionally, you can redirect or show a success message here 
            }) 
            // .catch(error => { 
            //   console.error('Error registering doctor:', error); 
            //   setRegistrationStatus('Registration Failed'); 
            // }); 
            .catch(error => { 
                if (error.response) { 
                    console.error('Server responded with an error status:', error.response.status); 
                    console.error('Error message:', error.response.data); 
                } 
                else if (error.request) { 
                    console.error('No response received:', error.request); 
                } 
                else { 
                    console.error('Error setting up the request:', error.message); 
                } 
                setRegistrationStatus('Registration Failed'); 
            }) ;
             }; 
 
    return ( 
        <div className="doctor-register"> 
            <div className='doctor-register-image'> 
                <img src={doctorImage} alt='...' width="100%" height="100%" /> 
            </div> 
            <form className='doctor-register-form' onSubmit={handleSubmit}> 
                <h2>Doctor Registration</h2> 
                
                <input className='doctor-register-form-inputs' type="text" name="name" placeholder="Name" onChange={handleChange} required /> 
                <input className='doctor-register-form-inputs' type="text" name="specialization" placeholder="Specialization" onChange={handleChange} required /> 
                <button className='doctor-register-form-button' type="submit">Register</button> 
            </form> 
            <p>{registrationStatus}</p> 
            {error && <p className='error-message'>{error}</p>} 
        </div> 
    ); 
}; 
 
export default DoctorRegister;

