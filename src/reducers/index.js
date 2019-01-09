
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import AuthReducer from './authReducer';
import FoodReducer from './foodReducer';

const rootReducer = combineReducers({
  AuthReducer,
  FoodReducer,
  routing: routerReducer,
});

export default rootReducer;
