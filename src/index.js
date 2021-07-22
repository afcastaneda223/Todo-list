/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  taskArr, show,
} from './crud.js';
import {
  drag, editListen, delOne, checked, clearBtn,
} from './sort.js';

if (localStorage.getItem('localObject') !== null) {
  taskArr = JSON.parse(localStorage.getItem('localObject'));
} else {
  taskArr = [];
}
window.addEventListener('load', () => {
  show();
  drag();
  checked();
  editListen();
  delOne();
  clearBtn();
});
