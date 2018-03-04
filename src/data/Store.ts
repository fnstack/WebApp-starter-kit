import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { rootReducer, rootSaga } from '../data';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { logger } from '../shared';
import storage from 'redux-persist/lib/storage';
import { loadUser } from 'redux-oidc';
import { userManager } from '../security';

const env = process.env.NODE_ENV;

const environment: any = window || this;

const sagaMiddleware = createSagaMiddleware();

const history = createBrowserHistory();

let middlewares = [sagaMiddleware, routerMiddleware(history)];

if (env === 'development') {
  middlewares = [...middlewares, logger];
}

/**
 * Create and initialize the redux store
 *
 * @returns The redux store
 */
export const configureStore = () => {
  const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['router']
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(
    persistedReducer,
    compose(
      applyMiddleware(...middlewares),
      // prettier-ignore
      env === 'development' && environment.devToolsExtension
        ? environment.devToolsExtension()
        : (f) => f
    )
  );

  const persistor = persistStore(store);

  loadUser(persistor, userManager);

  return { store, persistor };
};

export const runSaga = () => {
  sagaMiddleware.run(rootSaga);
};
