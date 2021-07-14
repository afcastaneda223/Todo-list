/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { taskArr, create, show, taskContainerUl } from './crud.js';



class Task {
  constructor(description = ' ', completed = false, index = (taskArr.length + 1)) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const a = new Task('task a');
create(a)
const b = new Task('task b');
create(b)
const c = new Task('task c');
create(c)


function showArr() {
  for (let e = 0; e < taskArr.length; e += 1) {
    taskContainerUl.innerHTML += `
    <li class="list-group-item d-flex justify-content-between" id="${taskArr[e].index}">
    <input class="form-check-input" type="checkbox" id="FieldsetCheck">
    <p class="m-0 p-0">"${taskArr[e].description}"</p>
    <span><i class="fas fa-ellipsis-v"></i></span>
</li>`;
  }
}



console.log(taskArr)



show()