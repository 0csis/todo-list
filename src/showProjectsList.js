import { orderProjects } from './orderProjects';
import { projectEventListener } from './projectEventListener';
import { defaultEventListener } from './defaultEventListener';
import { newProjectToDoButtonListener } from './newProjectToDoButtonListener';
import { removeProject } from './removeProject';
import { saveProjects } from './saveProjects';
import Remove from './note-remove-outline.svg';

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
    const removeButton = document.createElement('button');
    removeButton.classList.add('removeButton');
    removeButton.classList.add('removeProjectButton');
    const removeIcon = new Image();
    removeIcon.src = Remove;
    removeButton.appendChild(removeIcon);
    project.appendChild(removeButton);

    const addToDoInProject = document.createElement('button');
    addToDoInProject.classList.add('addToDoInProject');
    addToDoInProject.textContent = 'Add to-do';
    project.appendChild(addToDoInProject);

    projects.appendChild(project);
  }
  projectEventListener(projectsList);
  defaultEventListener(toDoList);
  newProjectToDoButtonListener(projectsList);
  removeProject(projectsList, toDoList);
  saveProjects(projectsList);
}

export { showProjectsList };
