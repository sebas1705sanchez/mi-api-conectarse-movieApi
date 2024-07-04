import express from 'express';
import { getPopularMovies, getMovieById } from '../controllers/moviesController.js';

const moviesRoutes = express.Router();

moviesRoutes.get('/movies', getPopularMovies);
moviesRoutes.get('/movies/:id', getMovieById);

export default moviesRoutes;
