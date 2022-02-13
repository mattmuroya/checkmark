import './style.css';
import favicon from './img/favicon.ico'
import domHandlers from './domHandlers';
import tasks from './tasks';

const testTask = tasks.createTask('task title', 'task desc', '1/1/23', true, ['kintaro', 'kubo']);

console.log(testTask);
console.log(testTask.getModifiedDateString());