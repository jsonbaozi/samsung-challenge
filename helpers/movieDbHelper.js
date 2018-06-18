import axios from 'axios';
import { API_KEY, API_URL } from './config.js';

const getNowPlaying = function() {
  return axios({
    method: 'get',
    url: `${API_URL}/movie/now_playing`,
    params: {
      api_key: API_KEY,
      region: 'US',
    },
  });
};

const getUpcoming = function() {
  return axios({
    method: 'get',
    url: `${API_URL}/movie/upcoming`,
    params: {
      api_key: API_KEY,
      region: 'US',
    },
  });
};

const parseApiResponse = function(response) {
  return response.data.results.map(movie => ({
    key: String(movie.id),
    title: movie.title,
    popularity: movie.popularity,
    vote_avg: movie.vote_average,
    genres: movie.genre_ids,
    poster_path: movie.poster_path,
    release_date: movie.release_date,
  }));
};

module.exports = {
  getNowPlaying: getNowPlaying,
  getUpcoming: getUpcoming,
  parseApiResponse: parseApiResponse,
};
