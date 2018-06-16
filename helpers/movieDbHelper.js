import axios from 'axios';
import { API_KEY } from './config.js';

const getNowPlaying = function() {
  return axios({
    method: 'get',
    url: 'https://api.themoviedb.org/3/movie/now_playing',
    params: {
      api_key: API_KEY,
    },
  });
};

module.exports = {
  getNowPlaying: getNowPlaying,
};
