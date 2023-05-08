import { ToDoCreator } from './toDoCreator';
import { addDefaultToDo } from './addDefaultToDo';
import { formToAddToDo } from './formToAddToDo';
import { removeMainChildren } from './removeMainChildren';

function newDefaultButtonListener(toDosList) {
  const newDefaultButton = document.querySelector('.newDefault');
  const container = document.querySelector('.container');

  newDefaultButton.addEventListener('click', () => {
    // hide the main screen
    container.style.display = 'none';
    removeMainChildren();

    // display form to get the new to-do information
    formToAddToDo(toDosList);
  });
}

export { newDefaultButtonListener };
