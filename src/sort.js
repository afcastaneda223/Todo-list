/* eslint-disable no-unused-vars */
import { taskArr, show, create, edit} from './crud.js';

let start = 0;
let current = 0;


function editListen(){
  const getEdit = document.querySelectorAll('p');
  getEdit.forEach((e,i) => {
    e.addEventListener('keypress', (j) => {
      if(j.key === 'Enter'){
        const x = e.innerText
        edit(i, x);
        show();
        drag();
        editListen();
      }
    });
  });
}

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
        editListen();
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
        editListen();
      }
    });
  });
}

function delOne() {
  const gettrash = document.querySelectorAll('#trash');
  gettrash.forEach((e,i) => {
    e.addEventListener('click', () => {
        taskArr.splice(i, 1);
        taskArr.forEach((x,y) => {
          x.index = y
        });
        show();
        editListen();
        drag();
      
    });
  });
}

const ti = document.querySelector('#textinput')
  ti.addEventListener('keydown', (i) => {
    if(i.key === 'Enter'){
      create(ti.value);
      show();
      drag();
  }})






export { drag, clear, editListen, delOne };