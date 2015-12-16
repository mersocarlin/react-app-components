import { render } from 'react-dom';


import routes from './routes';


/* stylesheet */
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-datetimepicker/css/bootstrap-datetimepicker.css';
import 'react-select/dist/react-select.css';
import '../../src/styles/main.scss';
import './styles/app.scss';


(() => {
  document.addEventListener('DOMContentLoaded', () => {
    render(routes, document.getElementById('main'));
  });
})();
