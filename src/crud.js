/* eslint-disable prefer-const */
/* eslint-disable import/no-mutable-exports */
let taskArr = [];
class Task {
  constructor(description = ' ', completed = false, index = (taskArr.length)) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

function store(array) {
  localStorage.setItem('localObject', JSON.stringify(array));
}
function create(x) {
  const newTask = new Task(x);
  taskArr.push(newTask);
}
function edit(x, y) {
  taskArr[x].description = y;
}

function removeTask(x) {
  taskArr.splice(x, 1);
  taskArr.forEach((a, b) => {
    a.index = b;
  });
}

function removeChecked() {
  taskArr = taskArr.filter((task) => task.completed === false);
  taskArr.forEach((a, b) => {
    a.index = b;
  });
}

function changeTrue(x) {
  taskArr[x].completed = true;
}

function changeFalse(x) {
  taskArr[x].completed = false;
}

function changeIndex(a, b) {
  if (a !== b) {
    taskArr[a].index = b;
    taskArr[b].index = a;
  }
}

function show() {
  const taskContainerUl = document.getElementById('list');
  taskContainerUl.innerHTML = '';
  taskArr.sort((a, b) => a.index - b.index);
  taskArr.forEach((item) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'list-group-item d-flex justify-content-between zone');
    li.setAttribute('id', item.index);
    li.setAttribute('draggable', true);
    const input = document.createElement('input');
    input.setAttribute('class', 'form-check-input checkbox');
    input.setAttribute('type', 'checkbox');
    const p = document.createElement('p');
    p.setAttribute('class', 'm-0 p-0');
    p.setAttribute('id', 'edit');
    p.setAttribute('contenteditable', true);
    p.innerText = item.description;
    const span2 = document.createElement('span');
    const i2 = document.createElement('i');
    i2.setAttribute('class', 'as fa-trash-alt');
    span2.appendChild(i2);
    const span = document.createElement('span');
    const i = document.createElement('i');
    i.setAttribute('class', 'fas fa-ellipsis-v');
    const ia = document.createElement('i');
    ia.setAttribute('class', 'fas fa-trash-alt me-3');
    ia.setAttribute('id', 'trash');
    span.appendChild(ia);
    span.appendChild(i);
    li.appendChild(input);
    li.appendChild(p);
    li.appendChild(span);
    taskContainerUl.appendChild(li);
  });
  store(taskArr);
}
export {
  taskArr, create, show, store, edit, removeTask,
  removeChecked, changeTrue, changeFalse, changeIndex,
};