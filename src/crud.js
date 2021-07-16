/* eslint-disable prefer-const */
/* eslint-disable import/no-mutable-exports */
import { Task } from './index.js';
let taskArr = [];

function store(array) {
  localStorage.setItem('localObject', JSON.stringify(array));
}
function create(x) {
  const newTask = new Task (x)
  taskArr.push(newTask);
}
function edit(x,y){
  taskArr[x].description = y
}

function show() {
  const taskContainerUl = document.getElementById('list');
  // this.taskArr = taskArr;
  taskContainerUl.innerHTML = '';
  taskArr.sort((a, b) => a.index - b.index);
  taskArr.forEach((item) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'list-group-item d-flex justify-content-between zone');
    li.setAttribute('id', item.index);
    li.setAttribute('draggable', true);
    const input = document.createElement('input');
    input.setAttribute('class', 'form-check-input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('id', 'check');
    const p = document.createElement('p');
    p.setAttribute('class', 'm-0 p-0');
    p.setAttribute('id','edit');
    p.setAttribute('contenteditable', true);
    p.innerText = item.description;
    const span = document.createElement('span');
    const i = document.createElement('i');
    i.setAttribute('class', 'fas fa-ellipsis-v');
    i.setAttribute('id', 'box');
    span.appendChild(i);
    li.appendChild(input);
    li.appendChild(p);
    li.appendChild(span);
    taskContainerUl.appendChild(li);
  });
  store(taskArr);
}

export {
  taskArr, create, show, store, edit
};
