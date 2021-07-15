/* eslint-disable no-unused-vars */
import { taskArr, show } from './crud.js';

let start = 0;
let current = 0;

function drag() {
  const getlistid = document.querySelectorAll('li');
  getlistid.forEach((i) => {
    i.addEventListener('dragstart', (e) => {
      start = parseInt(i.id, 10);
    });
    i.addEventListener('dragenter', (e) => {
      current = parseInt(i.id, 10);
      i.classList.add('bg-success');
    });
    i.addEventListener('dragleave', (e) => {
      i.classList.remove('bg-success');
      return 1;
    });
    i.addEventListener('dragend', (e) => {
      i.classList.remove('bg-primary');
      if (start !== current) {
        taskArr[start].index = current;
        taskArr[current].index = start;
        show(taskArr);
        drag();
        return 1;
      }
      return -1;
    });
  });
}

function clear() {
  const button = document.querySelector('.btn');
  button.addEventListener('click', (e) => {
    const check = document.querySelectorAll('#check');
    check.forEach((i) => {
      if (i.checked) {
        taskArr.splice(i, 1);
        show();
      }
    });
  });
}
export { drag, clear };