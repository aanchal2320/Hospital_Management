import axios from 'axios'; 
import config from '../config';

const apiPatient = axios.create({
  baseURL: config.BASE_URL_PATIENT,
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiDoctor = axios.create({
  baseURL: config.BASE_URL_DOCTOR,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerPatient = async (patientData) => {
  try {
    const response = await apiPatient.post('/patients', patientData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginPatient = async (patientId, name) => {
  try {
    const response = await apiPatient.post('/patients/login', { patientId, name });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getDoctors = async () => {
  try {
    const response = await apiPatient.get('/patients/doctors');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const bookAppointment = async (appointmentData) => {
  try {
    const response = await apiPatient.post('/patients/appointments', appointmentData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAppointmentsForPatient = async (patientId) => {
  try {
    const response = await apiPatient.get(`/patients/appointments/${patientId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAppointmentsForDoctor = async (doctorId) => {
  try {
    const response = await apiDoctor.get(`/doctors/appointments/${doctorId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const registerDoctor = async (doctorData) => {
  try {
    const response = await apiDoctor.post('/doctors', doctorData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  registerPatient,
  loginPatient,
  getDoctors,
  bookAppointment,
  getAppointmentsForPatient,
  getAppointmentsForDoctor,
  registerDoctor,
};

