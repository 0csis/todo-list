import { orderProjects } from './orderProjects';

function showProjectsList(projectsList) {
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
    for (let j = 0; j < Object.keys(projectsList[i]).length; j++) {
      const value = Object.values(projectsList[i])[j];
      const projectDetail = document.createElement('div');
      projectDetail.classList.add('projectDetail');
      projectDetail.textContent = `${value}`;
      project.appendChild(projectDetail);
    }
    projects.appendChild(project);
  }
}

export { showProjectsList };
