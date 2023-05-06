import { ToDoCreator } from './toDoCreator';
import { addDefaultToDo } from './addDefaultToDo';
import { formToAddToDo } from './formToAddToDo';

function newDefaultButtonListener(toDosList) {
  const newDefaultButton = document.querySelector('.newDefault');
  const container = document.querySelector('.container');

  newDefaultButton.addEventListener('click', () => {
    // hide the main screen
    container.style.display = 'none';
    formToAddToDo(toDosList);
  });
}

export { newDefaultButtonListener };
