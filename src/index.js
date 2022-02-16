import './style.css';
import favicon from './img/favicon.ico';

import tasks from './tasks';
import staticHandlers from './staticHandlers';
import dynamicHandlers from './dynamicHandlers';
import navHandlers from './navHandlers';

// window.domHandlers = domHandlers;
// window.staticHandlers = staticHandlers;
window.tasks = tasks;

tasks.addNewTask(
    'Sample Task',
    'This is a sample task item description.',
    '2022-02-14', 
    false);
tasks.addNewTask(
    '1',
    'This is a sample task item description.',
    '2022-02-15', 
    false);
tasks.addNewTask(
    '2',
    'This is a sample task item description.',
    '2022-02-16', 
    false);
tasks.addNewTask(
    '3',
    'This is a sample task item description.',
    '2022-02-17', 
    false);
tasks.addNewTask(
    '4',
    'This is a sample task item description.',
    '2022-02-18', 
    false);
tasks.addNewTask(
    '5',
    'This is a sample task item description.',
    '2022-02-19', 
    false);
tasks.addNewTask(
    '6',
    'This is a sample task item description.',
    '2022-02-20', 
    false);
tasks.addNewTask(
    '7',
    'This is a sample task item description.',
    '2022-02-21', 
    false);
tasks.addNewTask(
    '8',
    'This is a sample task item description.',
    '2022-02-22', 
    false);
tasks.addNewTask(
    '9',
    'This is a sample task item description.',
    '2022-02-23', 
    false);

dynamicHandlers.redrawTasks(navHandlers.tasksToDisplay);

// DO IT. Just DO it. Don't let your dreams be dreams. Yesterday, you said tomorrow. So JUST DO IT. MAKE YOUR DREAMS COME TRUE. JUST... DO IT. Some people dream of success, while you're gonna wake up and work HARD at it. NOTHING IS IMPOSSIBLE. You should get to the point where anyone else would quit, and YOU'RE NOT GONNA STOP THERE. NO, what are you waiting for? ...DO IT. JUST... DO IT. YES YOU CAN. Just DO IT. If you're tired of starting over... STOP. GIVING. UP.

import {format} from "date-fns";
window.format = format;