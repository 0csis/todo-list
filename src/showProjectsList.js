import { orderProjects } from './orderProjects';
import { projectEventListener } from './projectEventListener';
import { defaultEventListener } from './defaultEventListener';
import { newProjectToDoButtonListener } from './newProjectToDoButtonListener';
import Icon from './lead-pencil.svg';
import Remove from './note-remove.svg';

function showProjectsList(projectsList, toDoList) {
  const projects = document.querySelector('.projects');

  if (projects.hasChildNodes()) {
    while (projects.hasChildNodes()) {
      const { firstChild } = projects;
      projects.removeChild(firstChild);
    }
  }

  orderProjects(projectsList);

  const divs = [];
  for (let i = 0; i < projectsList.length; i++) {
    const project = document.createElement('div');
    project.classList.add('project');
    project.classList.add(`${i}`);
    divs.push(project);
    for (let j = 0; j < Object.keys(projectsList[i]).length - 1; j++) {
      const value = Object.values(projectsList[i])[j];
      const projectDetail = document.createElement('div');
      projectDetail.classList.add('projectDetail');
      projectDetail.textContent = `${value}`;
      project.appendChild(projectDetail);
    }
    const addToDoInProject = document.createElement('button');
    addToDoInProject.classList.add('addToDoInProject');
    addToDoInProject.textContent = 'Add to-do';
    project.appendChild(addToDoInProject);

    projects.appendChild(project);
  }
  projectEventListener(projectsList);
  defaultEventListener(toDoList);
  newProjectToDoButtonListener(projectsList);
}

export { showProjectsList };
