/* eslint-disable no-use-before-define */
import {
  taskArr, show, create, edit, removeTask, store, removeChecked
} from './crud.js';


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
        checked();
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
      if (start !== current) {
        taskArr[start].index = current;
        taskArr[current].index = start;
        show();
        drag();
        editListen();
        delOne();
        checked()
      }
    });
  });
}

function checked() {
  const getCheck = document.querySelectorAll('.checkbox');
  getCheck.forEach((e, i) => {
    e.addEventListener('click', (x) => {
      if (e.checked) {
        taskArr[i].completed = true
        store(taskArr)
        checked()
      }
      else{
        taskArr[i].completed = false
        store(taskArr)
        checked()
      }
    });
    
    if (taskArr[i].completed){
      e.setAttribute('checked',true);
      e.parentNode.classList.add('bg-danger');
      e.nextElementSibling.classList.add('text-decoration-line-through');
    }
    else{
      e.removeAttribute('checked')
      e.parentNode.classList.remove('bg-danger');
      e.nextElementSibling.classList.remove('text-decoration-line-through');
    }
  });
}

function clearBtn(){
  const getBtn = document.querySelector('.btn')
  getBtn.addEventListener('click', ()=>{
    removeChecked();
    show();
    drag();
    editListen();
    delOne();
    checked()
  })

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
      checked()
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
    checked();
  }
});

export {
  drag, checked, editListen, delOne, clearBtn,
};