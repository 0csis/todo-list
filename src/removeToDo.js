import { saveToDos } from './saveToDos';
import { saveProjects } from './saveProjects';
import { showProjectToDos } from './showProjectToDos';

function removeToDo(projectsList, toDoList) {
  const removeButtons = document.querySelectorAll('.removeButton');

  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener('click', () => {
      const parent = removeButton.parentElement;
      parent.parentElement.removeChild(parent);

      // find the index of the element i in toDoList
      // in order to be able to remove the to-do
      // there too
      for (let indexToDo = 0; indexToDo < toDoList.length; indexToDo++) {
        if (parent.classList.contains(`${indexToDo}`) && parent.classList.contains('projectToDo')) {
          console.log('project');
          toDoList.splice(indexToDo, 1);
          saveProjects(projectsList);
          return;
        } if (parent.classList.contains(`${indexToDo}`) && parent.classList.contains('toDo')) {
          console.log('todo');
          toDoList.splice(indexToDo, 1);
          saveToDos(toDoList);
          return;
        }
      }
    });
  });
}

export { removeToDo };
