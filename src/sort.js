/* eslint-disable no-use-before-define */
import {
  taskArr, show, create, edit, removeTask,
} from './crud.js';

let start = 0;
let current = 0;

function editListen() {
  const getEdit = document.querySelectorAll('p');
  getEdit.forEach((e, i) => {
    e.addEventListener('keypress', (j) => {
      if (j.key === 'Enter') {
        const x = e.innerText;
        edit(i, x);
        show();
        drag();
        editListen();
        delOne();
      }
    });
  });
}

function drag() {
  const getlistid = document.querySelectorAll('li');
  getlistid.forEach((e, i) => {
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
        editListen();
        delOne();
      }
    });
  });
}

function clear() {
  const button = document.querySelector('.btn');
  button.addEventListener('click', () => {
    const check = document.querySelectorAll('#check');
    check.forEach((i) => {
      if (i.checked) {
        taskArr.splice(i, 1);
        taskArr.forEach((x, y) => {
          x.index = y;
        });
        show();
        drag();
        editListen();
        delOne();
      }
    });
  });
}

function delOne() {
  const gettrash = document.querySelectorAll('#trash');
  gettrash.forEach((e, i) => {
    e.addEventListener('click', () => {
      removeTask(i);
      show();
      drag();
      editListen();
      delOne();
    });
  });
}

const ti = document.querySelector('#textinput');
ti.addEventListener('keydown', (i) => {
  if (i.key === 'Enter') {
    create(ti.value);
    show();
    drag();
    editListen();
    delOne();
  }
});

export {
  drag, clear, editListen, delOne,
};