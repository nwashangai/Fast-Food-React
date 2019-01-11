import { ADD_ORDER } from '../types';

/**
 * @description Reducer to signup a user
 * @param {object} state - initial state
 * @param {object} action - action dispatched
 * @return {object} current state
 */
const OrderReducer = (state = [], action) => {
  switch (action.type) {
  case ADD_ORDER:
    return [...action.payload];
  default:
    return state;
  }
};
export default OrderReducer;
