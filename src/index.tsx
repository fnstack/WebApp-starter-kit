import 'babel-polyfill';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {configureStore, runSaga} from './data/Store';
import 'isomorphic-fetch';
import routes from './routes';
import './sass/app.scss';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
import {IntlProvider, addLocaleData} from 'react-intl';
import * as fr from 'react-intl/locale-data/fr';

injectTapEventPlugin();

// Configure fr culture
addLocaleData([...fr]);

const store = configureStore();
// @ts-ignore: Unreachable code error
const history = syncHistoryWithStore(hashHistory, store)as any;

ReactDOM.render(
  <Provider store={store} key="provider">
  <IntlProvider locale="fr">
    <Router history={history} routes={routes}/>
  </IntlProvider>
</Provider>, document.getElementById('root') as HTMLElement);

runSaga();
