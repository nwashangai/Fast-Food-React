import { ADD_MENU } from '../types';

/**
 * @description Reducer to add Food Menu
 * @param {object} state - initial state
 * @param {object} action - action dispatched
 * @return {object} current state
 */
const FoodReducer = (state = [], action) => {
  switch (action.type) {
  case ADD_MENU:
    return [...action.payload];
  default:
    return state;
  }
};
export default FoodReducer;
