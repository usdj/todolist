import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import createSageMiddleware from 'redux-saga';
import todoSagas from './sagas';

const sagaMiddleware = createSageMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(
  reducer,
  enhancer
);
sagaMiddleware.run(todoSagas);

export default store;