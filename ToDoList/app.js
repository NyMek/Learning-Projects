const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


todoButton.addEventListener('click', addTodo);






function addTodo(event) {
    //prevent form from submiting
    event.preventDefault();


    //todo div 
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //create li

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');

    todoDiv.appendChild(newTodo);

    //check matk
    const completedButton = document.createElement('button');
    completedButton.innerHTML ='<i class="fas fa-check"> </i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

        //check trash
        const trashButton = document.createElement('button');
        trashButton.innerHTML ='<i class="fas fa-trash"> </i>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);

        //append to list

        todoList.appendChild(todoDiv);

        todoInput.value = '';
}