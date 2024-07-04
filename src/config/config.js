import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  timeout: 12000,
  params: {
    api_key: process.env.TMDB_API_KEY
  }
});

export default api;
