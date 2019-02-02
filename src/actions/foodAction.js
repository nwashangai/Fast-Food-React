import { request } from '../config';
import { ADD_MENU } from '../types';

/**
 * @description set Food menu
 * @param {object} menu - user information
 * @return {object} redux action dispatched
 */
export const setMenu = menu => ({
  type: ADD_MENU,
  payload: menu
});

/**
 * @description Request to the  API to get Menu
 * @return {object} response object
 */
export const menu = () => async dispatch => {
  try {
    const response = await request.get('menu');
    if (response.data.status === 'error') {
      return response.data;
    } else {
      dispatch(setMenu(response.data.data));
      return response.data;
    }
  } catch (error) {
    return ({
      status: 'error',
      message: error.response ? error.response.data.message : error.message
    });
  }
};
