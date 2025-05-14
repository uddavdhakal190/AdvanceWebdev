import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' 
  ? 'https://mern-ud-h5hge9d2bqddezhx.northeurope-01.azurewebsites.net'
  : 'http://localhost:8080';

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance; 