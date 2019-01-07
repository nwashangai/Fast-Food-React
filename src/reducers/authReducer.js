import { ADD_USER } from '../types';

const initialState = {
  user: {},
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
  case ADD_USER:
    return { ...state, user: action };
  default:
    return state;
  }
};
export default AuthReducer;