/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { taskArr, create, show } from './crud.js';
import { drag, clear } from './sort.js';

if (localStorage.getItem('localObject') !== null) {
  taskArr = JSON.parse(localStorage.getItem('localObject'));
} else {
  taskArr = [];
}

class Task {
  constructor(description = ' ', completed = false, index = (taskArr.length)) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}
// demo content to fill load
if (localStorage.getItem('localObject') === null) {
  const a = new Task('task 1');
  create(a);
  const b = new Task('task 2');
  create(b);
  const c = new Task('task 3');
  create(c);
}

show();
drag();
