import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './App';
import NotFound from './NotFound';

const Routes = props => (
  <main>
    <Switch>
      <Route path="/" component={App} />
      <Route component={NotFound} />
    </Switch>
  </main>
);

export default Routes;
