import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { citiesReducer } from './reducers/cities.reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  citiesReducer,
  composeEnhancers(applyMiddleware(thunk)),
);
