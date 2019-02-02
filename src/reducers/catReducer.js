import {
  ADD_ITEM,
  UPDATE_ITEM,
  CLEAR_CAT,
  DELETE_CART_ITEM
} from "../types";

const retrievedData = localStorage.getItem('user-cart');
const cat = (retrievedData) ?
  JSON.parse(retrievedData) :
  [];
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
    localStorage
      .setItem('user-cart', JSON.stringify([...state, action.payload]));
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
    localStorage.setItem('user-cart', JSON.stringify(updated));
    return [...updated];
  case DELETE_CART_ITEM:
    updated = state.filter(element => element.foodId !== action.payload);
    localStorage.setItem('user-cart', JSON.stringify(updated));
    return [...updated];
  case CLEAR_CAT:
    localStorage.setItem('user-cart', JSON.stringify([]));
    return [];
  default:
    return state;
  }
};
/* eslint-enable no-nested-ternary */
export default CatReducer;
