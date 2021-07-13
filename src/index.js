import _ from 'lodash';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function component() {
    const element = document.createElement('div');
  element.className += 'text-danger'
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());