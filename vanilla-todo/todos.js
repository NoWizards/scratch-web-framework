

const todos = ['Walk the dog', 'Water the plants', 'Sand the chairs'];

const addTodoInput = document.querySelector('#todo-input');
const addTodoButton = document.querySelector('#add-todo-btn');
const todosList = document.querySelector('#todos-list');

//initialize view
for(const todo of todos){
    let newTodo = renderTodoInReadMode(todo);
    if(newTodo) todosList.append(newTodo)
}

addTodoInput.addEventListener('input', ()=>{
    addTodoButton.disabled = addTodoInput.value.length < 3;
})

addTodoInput.addEventListener('keydown', ({key})=>{
    key === 'Enter' && addTodoInput.value.length >=3 ? addTodo() : null;
})


//functions 
function renderTodoInReadMode(todo){
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = todo;
    span.addEventListener('dblclick',()=>{
        const idx = todos.indexOf(todo);

        todosList.replaceChild(
            renderTodoInEditMode(todo),
            todosList.childNodes[idx]
        )
    })
    li.append(span);

    const button  = document.createElement('button');
    button.textContent = 'Done';
    button.className = 'action-todo-btn';
    button.addEventListener('click', ()=>{
        const idx  = todos.indexOf(todo);
        removeTodo(idx);
    })
    li.append(button);

    return li;
} 

function renderTodoInEditMode(todo){
    //TODO
}

function addTodo(){
    //TODO
}

function removeTodo(idx){
    todos.splice(idx, 1);
    todosList.childNodes[idx].remove();
}