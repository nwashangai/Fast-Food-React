import {
  ADD_ITEM,
  UPDATE_ITEM,
  CLEAR_CAT,
  DELETE_CART_ITEM
} from '../types';

/**
 * @description add to cat
 * @param {object} item - order information
 * @return {object} redux action dispatched
 */
export const addToCat = item => ({
  type: ADD_ITEM,
  payload: item
});

/**
 * @description clear cat items
 * @return {object} redux action dispatched
 */
export const clear = () => ({
  type: CLEAR_CAT
});

/**
 * @description update cat
 * @param {object} id - food id
 * @param {object} action - action to perform
 * @return {object} redux action dispatched
 */
export const updateItem = (id, action) => ({
  type: UPDATE_ITEM,
  payload: { id, action }
});

/**
 * @description delete foodItem from cat
 * @param {object} id - food id
 * @return {object} redux action dispatched
 */
export const deleteCartFood = (id) => ({
  type: DELETE_CART_ITEM,
  payload: id
});

/**
 * Decrease quantity of item by one
 * @param {object} item - fodd item to be added to cat
 * @return {object} redux action dispatched
 */
export const addItem = (item) => dispatch => {
  dispatch(addToCat(item));
};

/**
 * Decrease quantity of item by one
 * @param {object} id - fodd id
 * @param {object} action - action to perform
 * @return {null} no data returned
 */
export const update = (id, action) => dispatch => {
  dispatch(updateItem(id, action));
};

/**
 * Remove item from list
 * @param {object} id - fodd id
 * @return {null} no data returned
 */
export const deleteCartItem = (id) => dispatch => {
  dispatch(deleteCartFood(id));
};

/**
 * @description Clear cat items
 * @return {object} response object
 */
export const clearCat = () => dispatch => {
  dispatch(clear());
};
