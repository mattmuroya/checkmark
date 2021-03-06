import './style.css';
import favicon from './img/favicon.ico';

import tasks from './tasks';
import staticHandlers from './staticHandlers';
import dynamicHandlers from './dynamicHandlers';
import navHandlers from './navHandlers';
import storage from './storage';

window.tasks = tasks;
window.storage = storage;

storage.retrieveLocalStorage();

dynamicHandlers.redrawTasks(navHandlers.tasksToDisplay);

// DO IT. Just DO it. Don't let your dreams be dreams. Yesterday, you said tomorrow. So JUST DO IT. MAKE YOUR DREAMS COME TRUE. JUST... DO IT. Some people dream of success, while you're gonna wake up and work HARD at it. NOTHING IS IMPOSSIBLE. You should get to the point where anyone else would quit, and YOU'RE NOT GONNA STOP THERE. NO, what are you waiting for? ...DO IT. JUST... DO IT. YES YOU CAN. Just DO IT. If you're tired of starting over... STOP. GIVING. UP