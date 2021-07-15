import { taskArr, create, show, taskContainerUl } from './crud.js';

getlistid.forEach(i =>{
    i.addEventListener('dragstart', e =>{
      console.log('dragstart')
    })
    i.addEventListener('dragend', e =>{
      console.log('dragend')
    })
    i.addEventListener('drag', e =>{
      console.log('drag')
    })
  })
  
  const getlistul = document.querySelector('ul')
  getlistul.addEventListener('dragenter', e =>{
    console.log('dragenter')
  });
  getlistul.addEventListener('dragleave', e =>{
    console.log('dragleave')
  });
  getlistul.addEventListener('dragover', e =>{
    e.preventDefault();
    console.log('dragover')
  });
  getlistul.addEventListener('drop', e =>{
    console.log('drop')
    getlistul.append('hola')
  });


export { getlistid};