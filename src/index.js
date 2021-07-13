/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const taskArr = [];
const taskContainerUl = document.getElementById('list');

class Task {
  constructor(description = ' ', completed = false, index = (taskArr.length + 1)) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const a = new Task('task a');
taskArr.push(a);
const b = new Task('task b');
taskArr.push(b);
const c = new Task('task c');
taskArr.push(c);
const d = new Task('task d');
taskArr.push(d);

function showArr() {
  taskContainerUl.innerHTML = ''; // reset the content to avoid acumulation
  for (let e = 0; e < taskArr.length; e += 1) {
    taskContainerUl.innerHTML += `
    <li class="list-group-item d-flex justify-content-between" id="${taskArr[e].index}">
    <input class="form-check-input" type="checkbox" id="FieldsetCheck">
    <p class="m-0 p-0">"${taskArr[e].description}"</p>
    <span><i class="fas fa-ellipsis-v"></i></span>
</li>`;
  }
}

showArr(taskArr);
