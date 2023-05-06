import { newDefaultButtonListener } from './newDefaultButtonListener';
import { orderToDos } from './orderToDos';
import { ToDoCreator } from './toDoCreator';
import { addDefaultToDo } from './addDefaultToDo';
import { formToAddToDo } from './formToAddToDo';

const toDos = [{
  title: 'test1', description: 'it is a test', dueDate: '03-02-2024', priority: 1,
}, {
  title: 'test2', description: 'it is a test2', dueDate: '12-04-2023', priority: 3,
}, {
  title: 'test3', description: 'it is a test3', dueDate: '09-05-2023', priority: 2,
}, {
  title: 'test4', description: 'it is a test4', dueDate: '11-01-2023', priority: 2,
}];

newDefaultButtonListener(toDos);
