import { addProjectToDo } from './addProjectToDo';
import { ToDoCreator } from './toDoCreator';
import { saveProjects } from './saveProjects';
import { showProjectToDos } from './showProjectToDos';

function formToAddProjectsToDo(projectsList, project) {
  // Create a form to add new to-do info
  const main = document.querySelector('.main');

  const form = document.createElement('form');
  form.classList.add('projectForm');

  const div = document.createElement('div');
  div.classList.add('projectFormControl');
  const label = document.createElement('label');
  label.classList.add('projectFormLabel');
  label.setAttribute('for', 'title');
  label.textContent = 'Title';
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'title');
  label.appendChild(input);
  div.appendChild(label);
  form.appendChild(div);

  const div2 = document.createElement('div');
  div2.classList.add('projectFormControl');
  const label2 = document.createElement('label');
  label2.classList.add('projectFormLabel');
  label2.setAttribute('for', 'description');
  label2.textContent = 'Description';
  const input2 = document.createElement('input');
  input2.setAttribute('type', 'text');
  input2.setAttribute('id', 'description');
  label2.appendChild(input2);
  div2.appendChild(label2);
  form.appendChild(div2);

  const div3 = document.createElement('div');
  div3.classList.add('projectFormControl');
  const label3 = document.createElement('label');
  label3.classList.add('projectFormLabel');
  label3.setAttribute('for', 'dueDate');
  label3.textContent = 'Due date';
  const input3 = document.createElement('input');
  input3.setAttribute('type', 'date');
  input3.setAttribute('id', 'dueDate');
  input3.setAttribute('required', 'true');
  label3.appendChild(input3);
  div3.appendChild(label3);
  form.appendChild(div3);

  const div4 = document.createElement('div');
  div4.classList.add('projectFormControl');
  const label4 = document.createElement('label');
  label4.classList.add('projectFormLabel');
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
  div5.classList.add('projectFormControl');
  const button = document.createElement('button');
  button.classList.add('add');
  button.textContent = 'Add';
  div5.appendChild(button);
  form.appendChild(div5);

  main.appendChild(form);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const dueDate = document.querySelector('#dueDate').value;
    const priority = document.querySelector('#priority').value;

    addProjectToDo(new ToDoCreator(title, description, dueDate, priority), project);

    // Remove the form and make the main screen appear again
    main.removeChild(form);
    showProjectToDos(projectsList, project);
  });
}

export { formToAddProjectsToDo };
