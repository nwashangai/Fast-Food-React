
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import AuthReducer from './authReducer';
import FoodReducer from './foodReducer';
import CatReducer from './catReducer';

const rootReducer = combineReducers({
  CatReducer,
  AuthReducer,
  FoodReducer,
  routing: routerReducer,
});

export default rootReducer;
