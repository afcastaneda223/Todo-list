const taskArr = [];

class Task {
  constructor(description) {
    this.description = description;
    this.completed = false;
    this.index = taskArr.length;
  }
}

function create(x) {
  const newTask = new Task(x);
  taskArr.push(newTask);
  return taskArr;
}

function removeTask(x) {
  taskArr.splice(x, 1);
  taskArr.forEach((a, b) => {
    a.index = b;
  });
  return taskArr;
}

export { create, removeTask };
