const taskArr = [
  {
    description: 'walk',
    index: 0,
    completed: false,
  },
  {
    description: 'read',
    index: 1,
    completed: false,
  },
  {
    description: 'run',
    index: 2,
    completed: false,
  },
];

function edit(x, y) {
  taskArr[x].description = y;
  return taskArr[x];
}

function changeTrue(x) {
  taskArr[x].completed = true;
  return taskArr[x];
}

function changeFalse(x) {
  taskArr[x].completed = false;
  return taskArr[x];
}

export { edit, changeTrue, changeFalse };
