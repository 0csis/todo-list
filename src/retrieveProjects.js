function retrieveProjects() {
  let projectsList = JSON.parse(localStorage.getItem('projectsList'));

  if (projectsList === null) {
    projectsList = [];
  }
  return projectsList;
}

export { retrieveProjects };
