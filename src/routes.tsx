import * as React from 'react';
import {Route, IndexRoute} from 'react-router';

import {Layout, NotFoundPage} from './shell';

export default(
  <Route path="/" component={Layout}>
    <IndexRoute component={NotFoundPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
