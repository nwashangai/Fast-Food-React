import { ADD_USER } from '../types';

const initialState = {
  user: {},
};

/**
 * @description Request to the  API to signup a user
 * @param {object} state - initial state
 * @param {object} action - action dispatched
 * @return {object} current state
 */
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
  case ADD_USER:
    return { ...state, user: action.payload };
  default:
    return state;
  }
};
export default AuthReducer;
