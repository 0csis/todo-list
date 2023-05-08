import { addDefaultToDo } from './addDefaultToDo';
import { ToDoCreator } from './toDoCreator';
import { showToDos } from './showToDos';

function formToAddToDo(toDosList) {
//  Create a form to add a new to-do info
  const formContainer = document.querySelector('body');
  formContainer.classList.add('formContainer');

  const form = document.createElement('form');
  form.classList.add('defaultForm');

  const div = document.createElement('div');
  div.classList.add('defaultForm-control');
  const label = document.createElement('label');
  label.setAttribute('for', 'title');
  label.textContent = 'Title';
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'title');
  label.appendChild(input);
  div.appendChild(label);
  form.appendChild(div);

  const div2 = document.createElement('div');
  div2.classList.add('defaultForm-control');
  const label2 = document.createElement('label');
  label2.setAttribute('for', 'description');
  label2.textContent = 'Description';
  const input2 = document.createElement('input');
  input2.setAttribute('type', 'text');
  input2.setAttribute('id', 'description');
  label2.appendChild(input2);
  div2.appendChild(label2);
  form.appendChild(div2);

  const div3 = document.createElement('div');
  div3.classList.add('defaultForm-control');
  const label3 = document.createElement('label');
  label3.setAttribute('for', 'dueDate');
  label3.textContent = 'Due date';
  const input3 = document.createElement('input');
  input3.setAttribute('type', 'date');
  input3.setAttribute('id', 'dueDate');
  label3.appendChild(input3);
  div3.appendChild(label3);
  form.appendChild(div3);

  const div4 = document.createElement('div');
  div4.classList.add('defaultForm-control');
  const label4 = document.createElement('label');
  label4.setAttribute('for', 'priority');
  label4.textContent = 'Priority';
  const input4 = document.createElement('input');
  input4.setAttribute('type', 'range');
  input4.setAttribute('id', 'priority');
  input4.setAttribute('min', '1');
  input4.setAttribute('max', '3');
  label4.appendChild(input4);
  div4.appendChild(label4);
  form.appendChild(div4);

  const div5 = document.createElement('div');
  div5.classList.add('defaultForm-control');
  const button = document.createElement('button');
  button.classList.add('add');
  button.textContent = '+';
  div5.appendChild(button);
  form.appendChild(div5);

  formContainer.appendChild(form);

  // Select the main screen to be able to make it appear again after finishing the form
  const container = document.querySelector('.container');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const dueDate = document.querySelector('#dueDate').value;
    const priority = document.querySelector('#priority').value;

    addDefaultToDo(new ToDoCreator(title, description, dueDate, priority), toDosList);

    // Remove the form and make the main screen appear again
    formContainer.removeChild(form);
    showToDos(toDosList);
    container.style.display = 'grid';
  });
}

export { formToAddToDo };
