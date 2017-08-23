import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware, compose} from 'redux';
import {hashHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';
import {persistStore, autoRehydrate} from 'redux-persist';

import {logger} from '../base';
import {rootReducer} from '../data';

const env = process.env.NODE_ENV;

const environment: any = window || this;

const sagaMiddleware = createSagaMiddleware(/* {sagaMonitor} */);

let middlewares = [sagaMiddleware, routerMiddleware(hashHistory)];

if (env === 'development')  {middlewares = [...middlewares, logger]; }

  // const devTools = window.devToolsExtension ?
  // compose(applyMiddleware(sagaMiddleware), window.devToolsExtension())     :
  // applyMiddleware(sagaMiddleware);

export const configureStore = () => {

  const store = createStore(rootReducer, compose(applyMiddleware(...middlewares),
    autoRehydrate(), env === 'development' && environment.devToolsExtension ?
     environment.devToolsExtension() : (f) => f));

  try {
    persistStore(store);
  } catch (e) {
    console.error(e);
  }
  return store;
};

export const runSaga = () => {
  // Todo: Run different saga here
  // sagaMiddleware.run(userSaga);
};
