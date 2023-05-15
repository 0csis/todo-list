import { removeMainChildren } from './removeMainChildren';
import { showToDos } from './showToDos';

function defaultEventListener(projectsList, toDoList) {
  const defaultToDo = document.querySelector('.defaultTitle');
  const main = document.querySelector('.main');

  defaultToDo.addEventListener('click', () => {
    // if (!main.hasChildNodes()) {
    // showToDos(toDoList);
    // }
    removeMainChildren();
    showToDos(projectsList, toDoList);
  });
}

export { defaultEventListener };
