import { showProjectsList } from './showProjectsList';

function removeProject(projectList, toDoList) {
  const removeButtons = document.querySelectorAll('.removeProjectButton');

  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener('click', () => {
      const parent = removeButton.parentElement;
      parent.parentElement.removeChild(parent);

      // find the index of the element in the projectList
      // in order to be able to remove the project
      // there too
      for (let indexProject = 0; indexProject < projectList.length; indexProject++) {
        if (parent.classList.contains(`${indexProject}`)) {
          projectList.splice(indexProject, 1);
          showProjectsList(projectList, toDoList);
          return;
        }
      }
    });
  });
}

export { removeProject };
