import jwtDecode from 'jwt-decode';

import { request } from '../config';
import { ADD_USER } from '../types';

export const setUser = user => ({
    type: ADD_USER,
    user
  })

export const register = userData => async dispatch => {
  try {
    const response = await request.post('auth/signup', userData);
    if (response.data.status === 'error') {
      return response.data;
    } else {
      const token = response.data.data.token;
      localStorage.setItem('token', token);
      const user = jwtDecode(token);
      response.data.isAdmin = user.isAdmin;
      dispatch(setUser(response.data.data));
      return response.data;
    }
  } catch (error) {
    return ({ status: 'error', message: error.message });
  }
  
}