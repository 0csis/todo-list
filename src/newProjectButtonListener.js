import { formToAddProject } from './formToAddProject';

function newProjectButtonListener(projectsList, toDoList) {
  const newProjectButton = document.querySelector('.newProject');

  newProjectButton.addEventListener('click', () => {
    newProjectButton.disabled = true;
    formToAddProject(projectsList, toDoList);
  });
}

export { newProjectButtonListener };
