import { newDefaultButtonListener } from './newDefaultButtonListener';
import { orderToDos } from './orderToDos';
import { ToDoCreator } from './toDoCreator';
import { addDefaultToDo } from './addDefaultToDo';
import { formToAddToDo } from './formToAddToDo';
import { newProjectButtonListener } from './newProjectButtonListener';
import { formToAddProject } from './formToAddProject';

const toDos = [];
const projects = [];
const project = [];

newDefaultButtonListener(toDos);
newProjectButtonListener(projects, toDos);
