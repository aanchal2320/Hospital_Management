import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { getAppointmentsForDoctor } from '../api/api'; 
import '../styles/DoctorLogin.css'; 
import doctorImage from '../images/doctor.jpeg'; 
 
const DoctorLogin = () => { 
    const [doctorId, setDoctorId] = useState(''); 
    const navigate = useNavigate(); 
 
    const handleLogin = async (e) => { 
        e.preventDefault(); 
        try { 
            navigate(`/doctor-dashboard/${ doctorId }`); 
        } catch (error) { 
            console.error('Login failed', error); 
        } 
    }; 
 
    return ( 
        <div className="doctor-login"> 
            <div className='doctor-login-image'> 
                <img src={doctorImage} alt='...' width="100%" height="100%" /> 
            </div> 
            <form className='doctor-login-form' onSubmit={handleLogin}> 
                <h2>Doctor Login</h2> 
                <label className='doctor-login-form-input-fields'> 
                    Doctor ID: 
                    <input className='doctor-login-form-inputs' 
                        type="text" 
                        value={doctorId} 
                        onChange={(e) => setDoctorId(e.target.value)} 
                        required 
                    /> 
                </label> 
                <button className='doctor-login-form-button' type="submit">Login</button> 
            </form> 
        </div> 
    ); 
}; 
 
export default DoctorLogin;
