import 'babel-polyfill';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore, runSaga } from './data/Store';
import 'simple-line-icons/css/simple-line-icons.css';
import './sass/app.scss';
import 'cropperjs/dist/cropper.css';
import 'toastr/build/toastr.min.css';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { App, Page404 } from './app';
import { OidcProvider } from 'redux-oidc';
import { userManager, CallbackPage } from './security';
// import { interceptor } from './shared';

const history = createBrowserHistory();

const { store, persistor } = configureStore();

ReactDOM.render(
  <Provider store={store} key="provider">
    <PersistGate loading={null} persistor={persistor}>
      <OidcProvider store={store} userManager={userManager}>
        <ConnectedRouter history={history}>
          <BrowserRouter>
            <Switch>
              <Route path="/callback" component={CallbackPage} />

              <Route path="/" component={App} />

              <Route component={Page404} />
            </Switch>
          </BrowserRouter>
        </ConnectedRouter>
      </OidcProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

// Todo : Enable interceptor when security is ready in the back end
// interceptor();
runSaga();
