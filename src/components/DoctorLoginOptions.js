import React from 'react'; 
import { Link } from 'react-router-dom'; 
import '../styles/DoctorLoginOptions.css'; 
import doctorImage from '../images/doctor.jpeg'; 
 
const DoctorLoginOptions = () => { 
    return ( 
        <> 
            <div className="doctor-login-options"> 
                <div className='doctor-login-options-image'> 
                    <img src={doctorImage} alt='...' width="100%" /> 
                </div> 
 
            </div> 
            <div className="options"> 
                <div className="option"> 
                    <Link to="/doctor-register"><button className='option-buttons'>Register as Doctor</button></Link> 
                </div> 
                <div className="option"> 
                    <Link to="/doctor-login"><button className='option-buttons'>Login as Doctor</button></Link> 
                </div> 
            </div> 
        </> 
    ); 
}; 
 
export default DoctorLoginOptions;

