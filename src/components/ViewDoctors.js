import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/ViewDoctors.css';

const ViewDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [specialization, setSpecialization] = useState('');
    const [filteredDoctors, setFilteredDoctors] = useState([]);

    useEffect(() => {
        fetchDoctors();
    }, []);

    const fetchDoctors = async () => {
        try {
            const response = await axios.get('http://localhost:8082/patients/doctors');
            setDoctors(response.data);
            setFilteredDoctors(response.data); // Initialize filtered list with all doctors
        } catch (error) {
            console.error('Error fetching doctors:', error);
        }
    };

    const handleFilterChange = async (e) => {
        const spec = e.target.value;
        setSpecialization(spec);

        try {
            const response = await axios.get(`http://localhost:8082/patients/doctors/by-specialization?specialization=${spec}`);
            setFilteredDoctors(response.data);
        } catch (error) {
            console.error('Error fetching filtered doctors:', error);
        }
    };

    return (
        <div className="view-doctors-container">
            <h2>Doctors List</h2>
            <div className="filter-container">
                <label htmlFor="specialization">Filter by Specialization:</label>
                <input
                    type="text"
                    id="specialization"
                    value={specialization}
                    onChange={handleFilterChange}
                    placeholder="Enter specialization"
                />
            </div>
            <table className="doctors-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Specialization</th>
                        <th>Action</th> {/* New column for action */}
                    </tr>
                </thead>
                <tbody>
                    {filteredDoctors.map((doctor) => (
                        <tr key={doctor.id}>
                            <td>{doctor.id}</td>
                            <td>{doctor.name}</td>
                            <td>{doctor.specialization}</td>
                            <td>
                                {/* Link to BookAppointmentPage with doctor ID */}
                                <Link to={`/book-appointment/${doctor.id}`}>
                                    Book Appointment
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewDoctors;

