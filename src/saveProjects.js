function saveProjects(projectsList) {
  localStorage.setItem('projectsList', JSON.stringify(projectsList));
}

export { saveProjects };