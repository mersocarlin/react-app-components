import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';


import App from './containers/app';
import Samples from './containers/samples';


export default (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Samples} />
    </Route>
  </Router>
);
