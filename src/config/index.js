import axios from 'axios';

export const request = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': window.localStorage.getItem('token-key') || null,
  },
  credentials: 'omit',
});

export default request;
