const addbutton = document.querySelector('.addbutton');
const todoInput = document.querySelector('input');
const todoList = document.getElementById('todoList');

addbutton.addEventListener('click', () => {
    if (todoInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${todoInput.value}</span>
            <button class="editButton">Edit</button>
            <button class="deleteButton">Delete</button>
        `;
        todoList.appendChild(li);
        todoInput.value = '';
    }
});

todoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('editButton')) {
        console.log(e.target.parentNode);
        const todoText = e.target.parentNode.querySelector('span');
        const updatedText = prompt('Edit todo:', todoText.textContent);

        if (updatedText !== null && updatedText.trim() !== '') {
            todoText.textContent = updatedText;
        }
    }
    else if(e.target.classList.contains('deleteButton')){
        todoList.remove(e.target);
    }
});