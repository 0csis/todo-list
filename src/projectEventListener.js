import { removeMainChildren } from './removeMainChildren';

function projectEventListener(projectsList) {
  const projects = document.querySelectorAll('.projectDetail');

  projects.forEach((project) => {
    project.addEventListener('click', () => {
      removeMainChildren();
    });
  });
}

export { projectEventListener };
