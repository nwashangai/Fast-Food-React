
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import AuthReducer from './authReducer';
import FoodReducer from './foodReducer';
import CatReducer from './catReducer';
import OrderReducer from './orderReducer';

const appReducer = combineReducers({
  CatReducer,
  OrderReducer,
  AuthReducer,
  FoodReducer,
  routing: routerReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
