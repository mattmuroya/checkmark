import { format } from "date-fns";

const tasks = (() => {
  
  function createTask(title, details, dueDate, starred, tags) {
    let completed = false;
    let modifiedDate = new Date();
    const getDueDateString = () => {
      if (dueDate === '') {
        console.log('non');
        return 'None';
      }
      else {
        console.log(dueDate);
        return format(dueDate, 'P');
      }
    };
    const getModifiedDateString = () => format(modifiedDate, 'Pp');
    return {
      title,
      details,
      dueDate,
      modifiedDate,
      starred,
      tags,
      completed,
      getDueDateString,
      getModifiedDateString,
    }
  }
  
  const taskList = [];

  function addNewTask(title, details, dueDate, starred, tags) {
    taskList.unshift(createTask(title, details, dueDate, starred, tags));
  }

  function deleteTask(index) {
    taskList.splice(index, 1);
  }

  function toggleStarred(index) {
    taskList[index].starred = !taskList[index].starred;
  }


  // module items to return
  return {
    taskList,
    addNewTask,
    deleteTask,
    toggleStarred,
  }
})();

export default tasks;