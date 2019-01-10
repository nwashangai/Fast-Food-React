import { ADD_ITEM, UPDATE_ITEM, CLEAR_CAT } from '../types';

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
 * @description Clear cat items
 * @return {object} response object
 */
export const clearCat = () => dispatch => {
  dispatch(clear());
};
