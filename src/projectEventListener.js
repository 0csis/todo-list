import { removeMainChildren } from './removeMainChildren';
import { saveProjects } from './saveProjects';
import { showToDos } from './showToDos';

function projectEventListener(projectsList) {
  const projects = document.querySelectorAll('.projectDetail');
  const main = document.querySelector('.main');

  projects.forEach((project) => {
    project.addEventListener('click', () => {
      removeMainChildren();

      const parent = project.parentElement;
      for (let i = 0; i < projectsList.length; i++) {
        if (parent.classList.contains(`${i}`)) {
          showToDos(projectsList[i].project);
        }
      }
      saveProjects(projectsList);
    });
  });
}

export { projectEventListener };
