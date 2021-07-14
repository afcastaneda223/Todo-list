const taskArr = [];
const taskContainerUl = document.getElementById('list');


function create(x){
    taskArr.push(x)
    }


function show() {
  taskArr.forEach((item) =>{
    let li = document.createElement('li');
    li.setAttribute( "class", "list-group-item d-flex justify-content-between" );
    li.setAttribute( "id", "${taskArr[e].index}" );
    let input = document.createElement('imput');
    input.setAttribute("class", "form-check-input")
    input.setAttribute("type", "form-check-input")
    input.setAttribute("id", "FieldsetCheck")
    let p = document.createElement('p')
    p.setAttribute("class", "m-0 p-0")
    p.innerText = item.description
    let span = document.createElement('span')
    let i = document.createElement('i')
    i.setAttribute("class", "fas fa-ellipsis-v")
    span.appendChild(i)
    li.appendChild(input)
    li.appendChild(p)
    li.appendChild(span)
    taskContainerUl.appendChild(li)
  })
}


export { taskArr, create, show, taskContainerUl};