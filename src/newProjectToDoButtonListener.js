import { formToAddProjectsToDo } from './formToAddProjectsToDo';
import { removeMainChildren } from './removeMainChildren';

function newProjectToDoButtonListener(projectsList) {
  const addToDoInProject = document.querySelectorAll('.addToDoInProject');

  addToDoInProject.forEach((addToDoButton) => {
    addToDoButton.addEventListener('click', () => {
      removeMainChildren();

      const parent = addToDoButton.parentElement;
      for (let i = 0; i < projectsList.length; i++) {
        if (parent.classList.contains(`${i}`)) {
          formToAddProjectsToDo(projectsList[i].project);
        }
      }
    });
  });
}

export { newProjectToDoButtonListener };
