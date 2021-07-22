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

export { edit };
