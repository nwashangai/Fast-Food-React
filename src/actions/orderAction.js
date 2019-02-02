import { request } from '../config';
import { CLEAR_CAT, ADD_ORDER } from '../types';

/**
 * @description clear cat items
 * @return {object} redux action dispatched
 */
export const clear = () => ({
  type: CLEAR_CAT
});

/**
 * @description set orders
 * @param {object} orders - user information
 * @return {object} redux action dispatched
 */
export const setOders = (orders) => ({
  type: ADD_ORDER,
  payload: orders
});

/**
 * @description Request to the  API to get Menu
 * @param {object} order - user information
 * @return {object} response object
 */
export const placeOrder = (order) => async dispatch => {
  try {
    const response = await request.post('orders', order);
    if (response.data.status === 'error') {
      return response.data;
    } else {
      dispatch(clear());
      return ({ status: 'success', message: 'Order sent successfully' });
    }
  } catch (error) {
    return ({
      status: 'error',
      message: error.response ? error.response.data.message : error.message
    });
  }
};

/**
 * @description Request to the  API to get orders
 * @param {object} id - user id
 * @return {object} response object
 */
export const getOrders = (id) => async dispatch => {
  try {
    const response = await request.get(`users/${id}/orders`);
    if (response.data.status === 'error') {
      return response.data;
    } else {
      dispatch(setOders(response.data.data));
      return (response.data);
    }
  } catch (error) {
    return ({
      status: 'error',
      message: error.response ? error.response.data.message : error.message
    });
  }
};
