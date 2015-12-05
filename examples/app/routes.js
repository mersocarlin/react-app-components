import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';
import createHistory from 'history/lib/createHashHistory';


import App from './containers/app';
import Samples from './containers/samples';


let history = createHistory({
  queryKey: false
});


export default (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Samples} />
    </Route>
  </Router>
);
