let taskArr = [
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

function changeIndex(a, b) {
  if (a !== b) {
    const tempA = a;
    taskArr[a].index = b;
    taskArr[b].index = tempA;
  }
  return taskArr;
}

function removeChecked() {
  taskArr = taskArr.filter((task) => task.completed === false);
  taskArr.forEach((a, b) => {
    a.index = b;
  });
  return taskArr;
}

export {
  edit, changeTrue, changeFalse, changeIndex, removeChecked,
};
