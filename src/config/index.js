import axios from 'axios';

export const request = axios.create({
  baseURL: 'https://my-fast-food.herokuapp.com/api/v1/',
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': window.localStorage.getItem('token-key'),
  },
  credentials: 'omit',
});

request.interceptors.request.use(config => {
  config.headers['x-access-token'] = localStorage.getItem("token-key");
  return config;
}, error => Promise.reject(error));

export default request;
