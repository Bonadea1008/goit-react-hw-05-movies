import axios from 'axios';

const API_KEY = '6517314411afe114436dbf57ea19a496';
const BASE_URL = 'https://api.themoviedb.org/3';

export function fetchTrendingMovies() {
  return axios
    .get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
    .then(response => {
      if (response.status === 200) {
        return response.data;
      } else {
        return Promise.reject(new Error('There is no movies'));
      }
    });
}

export function fetchMoviesById(id) {
  return axios
    .get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
    .then(response => {
      if (response.status === 200) {
        return response;
      } else {
        return Promise.reject(new Error('There is no movies'));
      }
    });
}

export function fetchCastByMovieId(id) {
  return axios
    .get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`)
    .then(response => {
      if (response.status === 200) {
        return response;
      } else {
        return Promise.reject(new Error('There is no movies'));
      }
    });
}

export function fetchReviewsByMovieId(id) {
  return axios
    .get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`)
    .then(response => {
      if (response.status === 200) {
        return response;
      } else {
        return Promise.reject(new Error('There is no movies'));
      }
    });
}

export function fetchSearchMovie(query) {
  return axios
    .get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
    .then(response => {
      if (response.status === 200) {
        return response;
      } else {
        return Promise.reject(new Error('There is no movies'));
      }
    });
}
