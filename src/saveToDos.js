function saveToDos(toDosList) {
  localStorage.setItem('toDosList', JSON.stringify(toDosList));
}

export { saveToDos };
