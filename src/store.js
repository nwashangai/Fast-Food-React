import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { browserHistory } from 'react-router';

import rootReducer from './reducers';

const middleware = (process.env.NODE_ENV === 'development') ?
  composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk);
const store = createStore(rootReducer, middleware);

export const history = syncHistoryWithStore(browserHistory, store);
export default store;
