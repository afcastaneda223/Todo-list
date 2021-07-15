let taskArr = [];
const taskContainerUl = document.getElementById('list');


function store(array){
  localStorage.setItem('localObject', JSON.stringify(array));
}
function create(x){
  taskArr.push(x);
}

function show() {
  // this.taskArr = taskArr;
  taskContainerUl.innerHTML = '';
  taskArr.sort(function(a, b){return a.index - b.index});
  taskArr.forEach((item) =>{
    let li = document.createElement('li');
    li.setAttribute( "class", "list-group-item d-flex justify-content-between zone" );
    li.setAttribute( "id", item.index );
    li.setAttribute('draggable', true)
    let input = document.createElement('input');
    input.setAttribute("class", "form-check-input")
    input.setAttribute("type", "checkbox")
    input.setAttribute("id", "check")
    let p = document.createElement('p')
    p.setAttribute("class", "m-0 p-0")
    p.innerText = item.description
    let span = document.createElement('span')
    let i = document.createElement('i')
    i.setAttribute("class", "fas fa-ellipsis-v")
    i.setAttribute("id", "box")
    span.appendChild(i)
    li.appendChild(input)
    li.appendChild(p)
    li.appendChild(span)
    taskContainerUl.appendChild(li)
  })
  store(taskArr)
}

export { taskArr, create, show, store};

