import { format } from "date-fns";

const tasks = (() => {
  
  function createTask(title, details, dueDate, starred, tags) {

    let taskTitle = title,
        taskDetails = details,
        taskDueDate = dueDate,
        taskStarred = starred,
        taskTags = tags;

    let completed = false;
    let taskModifiedDate = new Date();

    return {
      get title() {
        return taskTitle;
      },
      get details() {
        return taskDetails;
      },
      get dueDateString() {
        if (taskDueDate === '') return 'None';
        return format(taskDueDate, 'P');
      },
      get modifiedDateString() {
        return format(taskModifiedDate, 'Pp');
      },
      get isStarred() {
        return taskStarred; // returns boolean
      },
      toggleStarred() {
        taskStarred = !taskStarred;
      }
    }
  }
  
  const taskList = [];

  function addNewTask(title, details, dueDate, starred, tags) {
    taskList.unshift(createTask(title, details, dueDate, starred, tags));
  }

  function deleteTask(index) {
    taskList.splice(index, 1);
  }

  // module items to return
  return {
    taskList,
    addNewTask,
    deleteTask,
  }
})();

export default tasks;