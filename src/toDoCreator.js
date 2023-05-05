function ToDoCreator(title, description, dueDate, priority) {
  this.Title = title;
  this.Description = description;
  this['Due date'] = dueDate;
  this.Priority = priority;
}

export { ToDoCreator };
