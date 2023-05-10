function newProjectToDoButtonListener() {
  const addToDoInProject = document.querySelectorAll('.addToDoInProject');

  addToDoInProject.forEach((addToDoButton) => {
    addToDoButton.addEventListener('click', () => {
      console.log('a');
    });
  });
}

export { newProjectToDoButtonListener };
