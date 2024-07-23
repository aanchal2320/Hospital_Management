import React, { useState } from 'react'; 
import axios from 'axios'; 
import doctorImage from '../images/doctor.jpeg'; 
import '../styles/PatientLogin.css'; 
 
const PatientLogin = () => { 
    const [patientId, setPatientId] = useState(''); 
    const [patientName, setPatientName] = useState(''); 
    const [loginSuccess, setLoginSuccess] = useState(false); 
 
    const handleLogin = async (e) => { 
        e.preventDefault(); 
        try { 
            const response = await axios.post('http://localhost:8082/patients/login', { 
                patientId, 
                patientName 
            }); 
            if (response.status === 200) { 
                setLoginSuccess(true); 
            } 
        } catch (error) { 
            console.error('Login failed', error); 
        } 
    }; 
 
    return ( 
        <div className='patient-login'> 
            <div className='patient-login-image'> 
                <img src={doctorImage} alt='...' width="100%" height="100%" /> 
            </div> 
            <form className='patient-login-form' onSubmit={handleLogin}> 
                {/* <form onSubmit={handleLogin}> */} 
                <h2>Patient Login</h2> 
                <div> 
                    <label className='patient-login-form-input-fields' style={{ marginLeft: '4%', width: '300px' }}>Patient ID 
                        <input className='patient-login-form-inputs' 
                            type="text" 
                            value={patientId} 
                            onChange={(e) => setPatientId(e.target.value)} 
                        /> 
                    </label> 
                </div> 
                <div> 
                    <label className='patient-login-form-input-fields'>Patient Name 
                        <input className='patient-login-form-inputs' 
                            type="text" 
                            value={patientName} 
                            onChange={(e) => setPatientName(e.target.value)} 
                        /> 
                    </label> 
                </div> 
                <button className='patient-login-form-button' type="submit">Login</button> 
            </form> 
            {loginSuccess && ( 
                <button onClick={() => window.location.href = '/view-doctors'}> 
                    View All Doctors 
                </button> 
            )}
        </div> 
    ); 
}; 
 
export default PatientLogin;
