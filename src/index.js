/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { taskArr, create, show} from './crud.js';

if (localStorage.getItem('localObject') !== null) {
  taskArr = (JSON.parse(localStorage.getItem('localObject')))
} else {
  taskArr = [];
}

class Task {
  constructor(description = ' ', completed = false, index = (taskArr.length)) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}
//demo content to fill load
if (localStorage.getItem('localObject') === null) {
const a = new Task('task a1');
create(a)
const b = new Task('task b2');
create(b)
const c = new Task('task c3');
create(c)
} 

show()

const getlistid = document.querySelectorAll('li')
var start = 0;
let current = 0;

getlistid.forEach(i =>{
  i.addEventListener('dragstart', e =>{
    i.classList.add('bg-primary')
    start = parseInt(i.id,10)
    });
    i.addEventListener('dragenter', e =>{
      current = parseInt(i.id,10)
      });
    i.addEventListener('dragend', e =>{
      i.classList.remove('bg-primary')
      console.log(taskArr)
      if (start != current) {
        taskArr[start].index = current
        taskArr[current].index = start
        show(taskArr)
      }
      else{
        return -1
      }
    });
  })







// const getlistul = document.querySelector('ul')
// getlistul.addEventListener('dragover', e =>{
//   e.preventDefault();
//   const dragable = document.querySelector('.dragging')
//   console.log('dragover')
// });
// getlistul.addEventListener('dragenter', e =>{
//   console.log('dragenter')
// });
// getlistul.addEventListener('dragleave', e =>{
//   console.log('dragleave')
// });
// getlistul.addEventListener('drop', e =>{
//   console.log('drop')
//   getlistul.append('hola')
// });

