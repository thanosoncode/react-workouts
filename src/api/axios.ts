import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://workouts-api-fzz9.onrender.com/api'
});

export default axiosInstance;
