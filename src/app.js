import express from 'express';
import moviesRoutes from './routes/moviesRoutes.js';

const app = express();

app.use(express.json());
app.use('/', moviesRoutes);

export default app;
