import './style.css';
import favicon from './img/favicon.ico'
import domHandlers from './domHandlers';
import tasks from './tasks';

window.tasks = tasks;

tasks.addNewTask('learn js', 'go through odin to learn js', '1/1/23', false, []);

console.log(tasks.taskList);