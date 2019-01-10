import { request } from '../config';
import { CLEAR_CAT } from '../types';

/**
 * @description clear cat items
 * @return {object} redux action dispatched
 */
export const clear = () => ({
  type: CLEAR_CAT
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
    return ({ status: 'error', message: error.message });
  }
};
