import { addProject } from './addProject';
import { ProjectCreator } from './projectCreator';
import { showProjectsList } from './showProjectsList';

function formToAddProject(projectsList, toDoList) {
  const projectsSidebar = document.querySelector('.projectsSidebar');
  const newProjectForm = document.createElement('form');
  newProjectForm.classList.add('newProjectForm');
  const label = document.createElement('label');
  label.classList.add('projectLabel');
  label.setAttribute('for', 'project');
  label.textContent = "Project's name";
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'project');
  label.appendChild(input);
  newProjectForm.appendChild(label);

  const div = document.createElement('div');
  div.classList.add('projectDiv');
  const label2 = document.createElement('label');
  label2.classList.add('projectLabel');
  label2.setAttribute('for', 'dueDate');
  label2.textContent = 'Due date';
  const input2 = document.createElement('input');
  input2.setAttribute('type', 'date');
  input2.setAttribute('id', 'dueDate');
  input2.setAttribute('required', 'true');
  label2.appendChild(input2);
  div.appendChild(label2);
  newProjectForm.appendChild(div);

  projectsSidebar.insertBefore(newProjectForm, projectsSidebar.children[1].nextSibling);

  newProjectForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = document.querySelector('#project').value;
    const dueDate = document.querySelector('#dueDate').value;

    addProject(new ProjectCreator(title, dueDate), projectsList);

    projectsSidebar.removeChild(newProjectForm);

    // enable new project button again
    const newProjectButton = document.querySelector('.newProject');
    newProjectButton.disabled = false;
    showProjectsList(projectsList, toDoList);
  });
}

export { formToAddProject };
