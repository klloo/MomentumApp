const toDoForm = document.getElementById('todo-form');
const toDoList = document.getElementById('todo-list');
const toDoInput = document.querySelector('#todo-form input');

let toDos = [];
const TODOS_KEY = 'todos';
function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}
function deleteToDo(e) {
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter((item) => item.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    const button = document.createElement('button');
    button.innerText = 'x';
    button.addEventListener('click', deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    span.innerText = newTodo.text;
    toDoList.appendChild(li);
}

function onToDoSubmit(e) {
    e.preventDefault();
    const value = toDoInput.value;
    toDoInput.value = '';
    const newTodoObj = {
        text: value,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener('submit',onToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
  }