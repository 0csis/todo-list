function removeToDo(toDoList) {
  const removeButtons = document.querySelectorAll('.removeButton');

  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener('click', () => {
      const parent = removeButton.parentElement;
      parent.parentElement.removeChild(parent);

      // find the index of the element i toDoList
      // in order to be able to remove the to-do
      // there too
      for (let indexToDo = 0; indexToDo < toDoList.length; indexToDo++) {
        if (parent.classList.contains(`${indexToDo}`)) {
          toDoList.splice(indexToDo, 1);
          return;
        }
      }
    });
  });
}

export { removeToDo };
