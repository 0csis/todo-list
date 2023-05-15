import { removeMainChildren } from './removeMainChildren';
import { showToDos } from './showToDos';

function defaultEventListener(toDoList) {
  const defaultToDo = document.querySelector('.defaultTitle');
  const main = document.querySelector('.main');

  defaultToDo.addEventListener('click', () => {
    // if (!main.hasChildNodes()) {
    // showToDos(toDoList);
    // }
    removeMainChildren();
    showToDos(toDoList);
  });
}

export { defaultEventListener };