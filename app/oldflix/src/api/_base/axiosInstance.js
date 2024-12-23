import axios from 'axios';

const BASE_API = 'http://localhost:3000/filmes';

export const axiosInstance = axios.create({
  baseURL: BASE_API,
  withCredentials: true,
  timeout: 5000,
});
