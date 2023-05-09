import { formToAddProject } from './formToAddProject';

function newProjectButtonListener(projectsList) {
  const newProjectButton = document.querySelector('.newProject');

  newProjectButton.addEventListener('click', () => {
    newProjectButton.disabled = true;
    formToAddProject(projectsList);
  });
}

export { newProjectButtonListener };
