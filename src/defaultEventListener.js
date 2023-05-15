import { removeMainChildren } from './removeMainChildren';
import { showToDos } from './showToDos';

function defaultEventListener(projectsList, toDoList) {
  const defaultToDo = document.querySelector('.defaultTitle');
  const main = document.querySelector('.main');

  defaultToDo.addEventListener('click', () => {
    location.reload();
  });
}

export { defaultEventListener };
