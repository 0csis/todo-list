import { removeMainChildren } from './removeMainChildren';
import { showToDos } from './showToDos';

function editToDo(toDoList) {
  const editButtons = document.querySelectorAll('.editButton');

  editButtons.forEach((editButton) => {
    editButton.addEventListener('click', () => {
      const parent = editButton.parentElement;
      const sibling = editButton.previousElementSibling;
      const property = sibling.previousElementSibling;
      const row = editButton.parentElement;
      parent.removeChild(editButton);
      const div = row.parentElement;
      const input = document.createElement('input');
      switch (property.textContent) {
        case 'Title:': case 'Description:':
          input.type = 'text';
          break;
        case 'Due date:':
          input.type = 'date';
          break;
        case 'Priority:':
          input.type = 'range';
          input.setAttribute('min', '1');
          input.setAttribute('max', '3');
          break;
      }
      row.replaceChild(input, sibling);
      input.addEventListener('change', () => {
        parent.appendChild(editButton);
        sibling.textContent = input.value;
        row.replaceChild(sibling, input);

        // find the index of the element in toDoList
        // in order to be able to modify the value
        // there too
        let indexDiv;
        for (let i = 0; i < toDoList.length; i++) {
          if (div.classList.contains(`${i}`)) {
            indexDiv = i;
            switch (property.textContent) {
              case 'Title:':
                toDoList[i].Title = input.value;
                break;
              case 'Description:':
                toDoList[i].Description = input.value;
                break;
              case 'Due date:':
                toDoList[i]['Due date'] = input.value;
                removeMainChildren();
                showToDos(toDoList);
                break;
              case 'Priority:':
                toDoList[i].Priority = input.value;
                break;
            }
          }
        }
      });
    });
  });
}

export { editToDo };
