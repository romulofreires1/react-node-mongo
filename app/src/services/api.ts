import axios from 'axios';

require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env',
});

const { REACT_APP_URL_API } = process.env;

const api = axios.create({
  baseURL: REACT_APP_URL_API,
});

export default api;
