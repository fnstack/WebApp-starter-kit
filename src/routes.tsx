import * as React from 'react';
import * as Loadable from 'react-loadable';
import { Switch, Route } from 'react-router-dom';
import { Loader } from './modules/shared';

// @ts-ignore No relevant error
const LoadableApp = Loadable({
  loader: () => import('./modules/app/app'),
  loading: () => <Loader fullScreen spinning />
});

const Routes = () => {
  return (
    <Switch>
      <Route
        path="/callback"
        render={routeProps => (
          /* tslint:disable-next-line:jsx-no-lambda */
          <Callback onSuccess={() => routeProps.history.push('/')} userManager={userManager}>
            <Loader fullScreen spinning />
          </Callback>
        )}
      />
      <Route path="/" component={LoadableApp} />
    </Switch>
  );
};

export { Routes };
