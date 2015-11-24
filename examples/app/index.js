import React from 'react';
import { Router } from 'react-router';
import { render } from 'react-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory';


import routes from './routes';


/* stylesheet */
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-datetimepicker/css/bootstrap-datetimepicker.css';
import 'react-select/dist/react-select.css';
import '../../src/styles/main.scss';
import './styles/app.scss';


(() => {

  let history = createBrowserHistory();

  document.addEventListener('DOMContentLoaded', () => {
    render(
      <Router history={history}>{routes}</Router>,
      document.getElementById("main"));
  });
})();
