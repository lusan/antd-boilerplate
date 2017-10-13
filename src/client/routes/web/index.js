import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { View } from 'react-native';

import { routes } from './routes';

const Routes = props => (
  <Switch>
    <View>
      {routes.map((route, index) => (
        // You can render a <Route> in as many places
        // as you want in your app. It will render along
        // with any other <Route>s that also match the URL.
        // So, a sidebar or breadcrumbs or anything else
        // that requires you to render multiple things
        // in multiple places at the same URL is nothing
        // more than multiple <Route>s.
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.header}
        />
      ))}
      {routes.map((route, index) => (
        // Render more <Route>s with the same paths as
        // above, but different components this time.
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ))}
      {routes.map((route, index) => (
        // Render more <Route>s with the same paths as
        // above, but different components this time.
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.footer}
        />
      ))}
    </View>
  </Switch>
);

export default Routes;
