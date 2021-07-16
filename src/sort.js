/* eslint-disable no-unused-vars */
import { taskArr, show } from './crud.js';

let start = 0;
let current = 0;

function drag() {
  const getlistid = document.querySelectorAll('li');
  getlistid.forEach((e,i) => {
    e.addEventListener('dragstart', () => {
      start = i;
    });
    e.addEventListener('dragenter', () => {
      current = i;
      e.classList.add('bg-success');
    });
    e.addEventListener('dragleave', () => {
      e.classList.remove('bg-success');
    });
    e.addEventListener('dragend', () => {
      e.classList.remove('bg-primary');
      if (start !== current) {
        taskArr[start].index = current;
        taskArr[current].index = start;
        show();
        drag();
      }
    });
  });
}

function clear() {
  const button = document.querySelector('.btn');
  button.addEventListener('click', () => {
    const check = document.querySelectorAll('#check');
    check.forEach((e,i) => {
      if (e.checked) {
        taskArr.splice(i, 1);
        show();
        drag();
      }
    });
  });
}



export { drag, clear };