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

function doneToDo(e) {
    const li = e.target.parentElement;
    li.classList.toggle('done');
    const idx = toDos.findIndex((item) => item.id === parseInt(li.id));
    toDos[idx].done = !toDos[idx].done
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    const delButton = document.createElement('button');
    delButton.innerText = 'x';
    delButton.addEventListener('click', deleteToDo);
    li.appendChild(span);
    li.appendChild(delButton);
    li.classList.add('list');
    span.innerText = `- ${newTodo.text}`;
    span.addEventListener('click', doneToDo);
    span.style.cursor = 'pointer';
    toDoList.appendChild(li);
    if(newTodo.done) {
        li.classList.add('done');
    }
}

function onToDoSubmit(e) {
    e.preventDefault();
    const value = toDoInput.value;
    toDoInput.value = '';
    const newTodoObj = {
        text: value,
        id: Date.now(),
        done: false,
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