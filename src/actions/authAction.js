import jwtDecode from 'jwt-decode';

import { request } from '../config';
import { ADD_USER } from '../types';

/**
 * @description set User
 * @param {object} user - user information
 * @return {object} redux action dispatched
 */
export const setUser = user => ({
  type: ADD_USER,
  payload: user
});

/**
 * @description Request to the  API to signup a user
 * @param {object} userData - user data
 * @return {object} response object
 */
export const register = userData => async dispatch => {
  try {
    const response = await request.post('auth/signup', userData);
    if (response.data.status === 'error') {
      return response.data;
    } else {
      const { token } = response.data.data;
      localStorage.setItem('token-key', token);
      request.defaults.headers.get['x-access-token'] = token;
      request.defaults.headers.post['x-access-token'] = token;
      const user = jwtDecode(token);
      response.data.isAdmin = user.isAdmin;
      dispatch(setUser(response.data.data));
      return response.data;
    }
  } catch (error) {
    return ({ status: 'error', message: error.message });
  }
};

/**
 * @description Request to the  API to login a user
 * @param {object} userData - user data
 * @return {object} response object
 */
export const login = userData => async dispatch => {
  try {
    const response = await request.post('auth/login', userData);
    if (response.data.status === 'error') {
      return response.data;
    } else {
      const { token } = response.data;
      localStorage.setItem('token-key', token);
      request.defaults.headers.get['x-access-token'] = token;
      request.defaults.headers.post['x-access-token'] = token;
      const res = await request.get('user');
      const decoded = jwtDecode(token);
      res.data.data.isAdmin = decoded.isAdmin;
      res.data.data.id = decoded.userId;
      res.data.data.token = token;
      dispatch(setUser(res.data.data));
      return res.data;
    }
  } catch (error) {
    return ({ status: 'error', message: error.message });
  }
};
