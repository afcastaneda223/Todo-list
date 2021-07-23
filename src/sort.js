/* eslint-disable no-use-before-define */
import {
  taskArr, show, create, edit, removeTask, removeChecked, changeTrue, changeFalse, changeIndex,
} from './crud.js';

function editListen() {
  const getEdit = document.querySelectorAll('p');
  getEdit.forEach((e, i) => {
    e.addEventListener('keypress', (j) => {
      if (j.key === 'Enter') {
        j.preventDefault();
        const x = e.innerText;
        edit(i, x);
        call();
      }
    });
  });
}

function drag() {
  let start = 0;
  let current = 0;
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
      changeIndex(start, current);
      call();
    });
  });
}

function checked() {
  const getCheck = document.querySelectorAll('.checkbox');
  getCheck.forEach((e, i) => {
    e.addEventListener('click', () => {
      if (e.checked) {
        changeTrue(i);
        call();
      } else {
        changeFalse(i);
        call();
      }
    });

    if (taskArr[i].completed) {
      e.setAttribute('checked', true);
      e.parentNode.classList.add('text-danger');
      e.nextElementSibling.classList.add('text-decoration-line-through');
    } else {
      e.removeAttribute('checked');
      e.parentNode.classList.remove('text-danger');
      e.nextElementSibling.classList.remove('text-decoration-line-through');
    }
  });
}

function clearBtn() {
  const getBtn = document.querySelector('.btn');
  getBtn.addEventListener('click', () => {
    removeChecked();
    call();
  });
}

function delOne() {
  const gettrash = document.querySelectorAll('#trash');
  gettrash.forEach((e, i) => {
    e.addEventListener('click', () => {
      removeTask(i);
      call();
    });
  });
}

const ti = document.querySelector('#textinput');
ti.addEventListener('keydown', (i) => {
  if (i.key === 'Enter' && ti.value != '') {
    create(ti.value);
    call();
  }
});

function call() {
  show();
  drag();
  editListen();
  delOne();
  checked();
}

export {
  drag, checked, editListen, delOne, clearBtn,
};