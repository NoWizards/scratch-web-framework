

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
addTodoButton.addEventListener('click', ()=>{
    addTodo();
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
    const li = document.createElement('li');
    const input = document.createElement('input');
    input.type = 'text';
    input.value = todo;
    input.style.flexGrow= '1';


    li.append(input);
    const actionBtns = document.createElement('div');

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.className = 'action-todo-btn';
    saveButton.addEventListener('click', ()=>{
        const idx = todos.indexOf(todo);
        updateTodo(idx, input.value);
    })
    actionBtns.append(saveButton);

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.className = 'action-todo-btn';
    cancelButton.addEventListener('click', ()=>{
        const idx = todos.indexOf(todo);
        todosList.replaceChild(
            renderTodoInReadMode(todo),
            todosList.childNodes[idx]
        )
    })
    actionBtns.append(cancelButton);

    li.append(actionBtns);
    return li;
}

function addTodo(){
    const desc = addTodoInput.value;
    todos.push(desc);
    const todo = renderTodoInReadMode(desc);
    todosList.append(todo);

    addTodoInput.value = '';
    addTodoButton.disabled = true;
}

function updateTodo(idx, desc){
    //TODO
    todos[idx] = desc;
    todosList.replaceChild(
        renderTodoInReadMode(desc),
        todosList.childNodes[idx]
    )

}

function removeTodo(idx){
    todos.splice(idx, 1);
    todosList.childNodes[idx].remove();
}