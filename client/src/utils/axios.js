import axios from 'axios';

// Get the current domain
const getBaseURL = () => {
  if (process.env.NODE_ENV === 'production') {
    // Use the same domain as the frontend
    return window.location.origin;
  }
  return 'http://localhost:8080';
};

const axiosInstance = axios.create({
  baseURL: getBaseURL(),
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

export default axiosInstance; 