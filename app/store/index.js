/**
 * Sample React Native App
 * @flow
 */

import { createStore, applyMiddleware, combineReducers, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import * as reducers from '../reducers'


const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });
const reducer = combineReducers(reducers);

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware, // for logging
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});
export default store;
