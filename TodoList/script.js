const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUl = document.getElementById('todos');

form.addEventListener('submit', e => {
  e.preventDefault();

  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement('li');

    if (todo && todo.complete) {
      todoEl.classList.add('completed');
    }

    todoEl.textContent = todoText;

    todoEl.addEventListener('click', e => {
      todoEl.classList.toggle('completed');
    });

    todoEl.addEventListener('contextmenu', e => {
      e.preventDefault();
      todoEl.remove();
    });

    todosUl.appendChild(todoEl);
    input.value = '';
  }
}
