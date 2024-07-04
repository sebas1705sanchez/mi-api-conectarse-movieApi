import express from 'express';
import { getPopularMovies, getMovieById, getTv } from '../controllers/moviesController.js';

const moviesRoutes = express.Router();

moviesRoutes.get('/movies', getPopularMovies);
moviesRoutes.get('/movies/:id', getMovieById);
moviesRoutes.get('/tv', getTv);

export default moviesRoutes;
