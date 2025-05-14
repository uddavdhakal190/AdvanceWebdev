import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' 
  ? 'https://expense-tracker.onrender.com'
  : 'http://localhost:8080';

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance; 