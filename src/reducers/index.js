
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';

const rootReducer = combineReducers({
  AuthReducer,
  routing: routerReducer,
});

export default rootReducer;