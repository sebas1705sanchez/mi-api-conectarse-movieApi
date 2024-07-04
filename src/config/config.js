import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.TMDB_API_KEY) {
  throw new Error('No se encuetra la TMDB_API_KEY ');
}

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: process.env.TIMEOUT || 12000,
  params: {
    api_key: process.env.TMDB_API_KEY
  }
});

// Interceptor para manejar errores
api.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default api;
