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
    i.addEventListener('dragover', (e) => {
      current = parseInt(i.id, 10);
      console.log('START' + start)
      console.log('CURRENT' + current)
      i.classList.add('bg-success');
    });
    i.addEventListener('dragleave', (e) => {
      i.classList.remove('bg-success');
      return 1;
    });
    i.addEventListener('dragend', (e) => {
      i.classList.remove('bg-primary');
      if (start !== current) {
        console.log('yes')
        taskArr[start].index = current;
        taskArr[current].index = start;
        show();
      }
      });
  });
}

function clear() {
  const check = document.querySelectorAll('#check');
  for (let i = taskArr.length-1; i >= 0; i--) {
    if (check[i].checked) {
        taskArr.splice(i, 1)
        location.reload()
    }
  }
  
  for (let i = 0; i < taskArr.length; i++) {
    taskArr[i].index = i; 
  }
  show()
  drag()
};

const button = document.querySelector('.btn');
button.addEventListener('click',clear)

export { drag, clear };