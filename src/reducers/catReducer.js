import { ADD_ITEM, UPDATE_ITEM, CLEAR_CAT } from "../types";

const cat = [];
let updated;
/**
 * @description Reducer to add item to cat
 * @param {object} state - initial state
 * @param {object} action - action dispatched
 * @return {object} current state
 */
/* eslint-disable no-nested-ternary */
const CatReducer = (state = cat, action) => {
  switch (action.type) {
  case ADD_ITEM:
    return [...state, action.payload];
  case UPDATE_ITEM:
    updated = state.map(element => {
      if (element.foodId === action.payload.id) {
        element.quantity =
            action.payload.action === "+" && element.quantity < 30 ?
              element.quantity + 1 :
              action.payload.action === "-" && element.quantity > 1 ?
                element.quantity - 1 :
                element.quantity;
        element.subTotal =
            parseFloat(element.price) * parseInt(element.quantity, 10);
      }
      return element;
    });
    return [...updated];
  case CLEAR_CAT:
    return [];
  default:
    return state;
  }
};
/* eslint-enable no-nested-ternary */
export default CatReducer;
