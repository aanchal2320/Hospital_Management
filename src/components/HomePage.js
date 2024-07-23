import React from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; 
import '../styles/HomePage.css'; 
import doctorImage from '../images/doctor.jpeg'; 
 
const HomePage = () => { 
    const navigate = useNavigate(); 
 
    const handleBookAppointment = () => { 
        navigate('/book-appointment-options'); 
    }; 
 
    return ( 
        <div className="home-page"> 
            <nav className="navbar"> 
                <div className="logo">Hospital Management</div> 
                <ul className="nav-links"> 
                    <li><Link to="/">Home</Link></li> 
                    <li><Link to="/about">About</Link></li> 
                    <li><Link to="/services">Services</Link></li> 
                    <li><Link to="/blog">Blog</Link></li> 
                    <li><Link to="/contact">Contact</Link></li> 
                    <li><Link to="/doctor-login-options">Login as Doctor</Link></li> 
                </ul> 
            </nav> 
            <header className="hero-section"> 
                <div className="hero-content"> 
                    <h1>Your Partner In Health and Wellness</h1> 
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p> 
                    <button onClick={handleBookAppointment}>Book an Appointment</button> 
                </div> 
                <img src={doctorImage} alt='...' width='100%' height='500px' /> 
            </header> 
            <section className="healthcare-services"> 
                <h2>Our Healthcare Service</h2> 
                <div className="service-cards"> 
                    <div className="card"> 
                        <h3>Emergency Department</h3> 
                        <p>If you use this site regularly and would like to.</p> 
                    </div> 
                    <div className="card"> 
                        <h3>Pediatric Department</h3> 
                        <p>If you use this site regularly and would like to.</p> 
                    </div> 
                    <div className="card"> 
                        <h3>General Physician</h3> 
                        <p>If you use this site regularly and would like to.</p> 
                    </div> 
                    <div className="card"> 
                        <h3>Neurology Department</h3> 
                        <p>If you use this site regularly and would like to.</p> 
                    </div> 
                    <div className="card"> 
                        <h3>Cardiology Department</h3> 
                        <p>If you use this site regularly and would like to.</p> 
                    </div> 
                </div> 
            </section> 
        </div> 
    ); 
}; 
 
export default HomePage;

