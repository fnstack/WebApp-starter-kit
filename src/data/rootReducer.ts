import { routerReducer } from 'react-router-redux';
import { combineReducers, ReducersMapObject } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as oidcReducer } from 'redux-oidc';

import { ApplicationState } from 'data';

/**
 * The root reducer of the application
 */
const reducerMap: ReducersMapObject = {
  // Todo: Add other reducer here
  form: formReducer,
  oidc: oidcReducer,
  router: routerReducer
};

export const rootReducer = combineReducers<ApplicationState>(reducerMap);
