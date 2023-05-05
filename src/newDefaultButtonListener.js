import { ToDoCreator } from './toDoCreator';
import { addDefaultToDo } from './addDefaultToDo';

function newDefaultButtonListener(toDosList) {
  const newDefaultButton = document.querySelector('.newDefault');

  newDefaultButton.addEventListener('click', () => {
  // Create a form to add a new to-do info
    /*    const formContainer = document.querySelector('body');
    formContainer.classList.add('formContainer');

    const form = document.createElement('form');
    form.setAttribute("onsubmit", "ToDoCreator")
    form.classList.add('defaultForm');

    const div = document.createElement('div');
    div.classList.add('defaultform-control');
    const label = document.createElement('label');
    label.setAttribute("for", "title");
    */
    addDefaultToDo(new ToDoCreator('test6', 'also a test', '01-01-2001', 5), toDosList);
  });
};

export { newDefaultButtonListener };
