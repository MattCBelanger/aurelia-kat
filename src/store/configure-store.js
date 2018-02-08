import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { katsReducer } from './reducers';
const loggerMiddleware = createLogger();

function configureStore() {
  return createStore(
    katsReducer, // or combine some reducers
    compose(
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      ),
      window.devToolsExtension ? window.devToolsExtension() : undefined
    )
  )
}


export const reduxStore = configureStore();