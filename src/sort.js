import { taskArr, show } from './crud.js';

var start = 0;
let current = 0;

function drag(){
    const getlistid = document.querySelectorAll('li')
    getlistid.forEach(i =>{
        i.addEventListener('dragstart', e =>{
            i.classList.add('bg-primary')
            start = parseInt(i.id,10)
        });
        i.addEventListener('dragenter', e =>{
            current = parseInt(i.id,10)
            i.classList.add('bg-success')
        });
        i.addEventListener('dragleave', e =>{
            i.classList.remove('bg-success')
        });
        i.addEventListener('dragend', e =>{
            i.classList.remove('bg-primary')
          console.log(taskArr)
          if (start != current) {
              taskArr[start].index = current
              taskArr[current].index = start
              show(taskArr)
              drag()
        }
        else{
            return -1
        }
    });
})
}

export { drag };