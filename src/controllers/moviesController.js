import api from '../config/config.js';

export const getPopularMovies = async (req, res) => {
  try {
    const response = await api.get('/movie/popular');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMovieById = async (req, res) => {
  try {
    const response = await api.get(`/movie/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
