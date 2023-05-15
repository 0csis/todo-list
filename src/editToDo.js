import { removeMainChildren } from './removeMainChildren';
import { saveProjects } from './saveProjects';
import { saveToDos } from './saveToDos';
import { showToDos } from './showToDos';
import { showProjectToDos } from './showProjectToDos';

function editToDo(projectsList, toDoList) {
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
          input.setAttribute('required', 'true');
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
                if (div.classList.contains('projectToDo')) {
                  showProjectToDos(projectsList, toDoList);
                  break;
              } else if (div.classList.contains('toDo')) {
                  showToDos(projectsList, toDoList);
                  break;
                }
              case 'Priority:':
                toDoList[i].Priority = input.value;
                break;
            }
            if (div.classList.contains('projectToDo')) {
              saveProjects(projectsList);
            } else if (div.classList.contains('toDo')) {
              saveToDos(toDoList);
            }
          }
        }
      });
    });
  });
}

export { editToDo };
