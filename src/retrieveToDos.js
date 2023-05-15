function retrieveToDos() {
  let toDosList = JSON.parse(localStorage.getItem('toDosList'));
  if (toDosList === null) {
    toDosList = [];
  }
  return toDosList;
}

export { retrieveToDos };
