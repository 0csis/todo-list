import { ToDoCreator } from './toDoCreator';
import { addDefaultToDo } from './addDefaultToDo';
import { formToAddToDo } from './formToAddToDo';
import { removeMainChildren } from './removeMainChildren';

function newDefaultButtonListener(projectsList, toDosList) {
  const newDefaultButton = document.querySelector('.newDefault');
  // const container = document.querySelector('.container');

  newDefaultButton.addEventListener('click', () => {
    removeMainChildren();

    // display form to get the new to-do information
    formToAddToDo(projectsList, toDosList);
  });
}

export { newDefaultButtonListener };
