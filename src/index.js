import { newDefaultButtonListener } from './newDefaultButtonListener';
import { orderToDos } from './orderToDos';
import { ToDoCreator } from './toDoCreator';
import { addDefaultToDo } from './addDefaultToDo';
import { formToAddToDo } from './formToAddToDo';
import { newProjectButtonListener } from './newProjectButtonListener';
import { formToAddProject } from './formToAddProject';
import { retrieveToDos } from './retrieveToDos';
import { retrieveProjects } from './retrieveProjects';
import { showToDos } from './showToDos';
import { showProjectsList } from './showProjectsList';
import { defaultEventListener } from './defaultEventListener';
import { newProjectToDoButtonListener } from './newProjectToDoButtonListener';
import { projectEventListener } from './projectEventListener';

let toDos = [];
let projects = [];
toDos = retrieveToDos(toDos);
projects = retrieveProjects(projects);
showToDos(projects, toDos);
showProjectsList(projects, toDos);

defaultEventListener(projects, toDos);

newDefaultButtonListener(projects, toDos);
newProjectButtonListener(projects, toDos);
newProjectToDoButtonListener(projects);
projectEventListener(projects);
