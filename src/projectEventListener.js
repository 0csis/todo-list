import { removeMainChildren } from './removeMainChildren';

function projectEventListener(projectsList) {
  const projects = document.querySelectorAll('.project');

  projects.forEach((project) => {
    project.addEventListener('click', () => {
      removeMainChildren();
    });
  });
}

export { projectEventListener };
