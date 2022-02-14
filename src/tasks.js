import { format } from "date-fns";

const tasks = (() => {
  
  function createTask(title, details, dueDate, starred, tags) {
    let completed = false;
    let modifiedDate = new Date();
    const getModifiedDateString = () => format(modifiedDate, 'Pp');
    return {
      title,
      details,
      dueDate,
      modifiedDate,
      starred,
      tags,
      completed,
      getModifiedDateString
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
  }
})();

export default tasks;