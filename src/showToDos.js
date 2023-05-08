import { orderToDos } from './orderToDos';
import Icon from './lead-pencil.svg';
import { editToDo } from './editToDo';

function showToDos(toDoList) {
  const main = document.querySelector('.main');

  orderToDos(toDoList);
  const divs = [];
  for (let i = 0; i < toDoList.length; i++) {
    const div = document.createElement('div');
    div.classList.add('toDo');
    div.classList.add(`${i}`);
    divs.push(div);
    for (let j = 0; j < Object.keys(toDoList[i]).length; j++) {
      const row = document.createElement('div');
      row.classList.add('row');
      const name = Object.keys(toDoList[i])[j];
      const value = Object.values(toDoList[i])[j];

      const property = document.createElement('div');
      property.classList.add('property');
      property.textContent = `${name}:`;
      row.appendChild(property);

      const propertyValue = document.createElement('div');
      propertyValue.classList.add('propertyValue');
      propertyValue.textContent = `${value}`;
      row.appendChild(propertyValue);

      const editButton = document.createElement('button');
      editButton.classList.add('editButton');
      const editIcon = new Image();
      editIcon.src = Icon;
      editButton.appendChild(editIcon);
      row.appendChild(editButton);

      div.appendChild(row);
    }
    main.appendChild(div);
  }

  editToDo(toDoList);
}

export { showToDos };
