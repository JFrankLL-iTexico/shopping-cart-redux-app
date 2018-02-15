import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger as logger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import mathReducer from './reducers/mathReducer';
import userReducer from './reducers/userReducer';
import productsReducer from './reducers/productsReducer';

export default createStore(
  combineReducers({
    mathReducer,
    userReducer,
    productsReducer,
  }),
  {},
  applyMiddleware(logger(), thunk, promise()),
);
