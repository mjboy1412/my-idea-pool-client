import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTool } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducer';

const store = createStore(
  rootReducer,
  {},
  composeWithDevTool(
    applyMiddleware(
      logger,
      thunkMiddleware,
    ),
  ),
);

export default store;
