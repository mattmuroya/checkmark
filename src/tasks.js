import { format } from "date-fns";

const tasks = (() => {

  const taskList = [];

  function createTask(title, description, dueDate, starred, tags) {

    let completed = false;
    let modifiedDate = new Date();

    const getModifiedDateString = () => format(modifiedDate, 'Pp');

    return {
      title,
      description,
      dueDate,
      modifiedDate,
      starred,
      completed,
      tags,
      getModifiedDateString
    }
  }

  return {
    taskList,
    createTask,
  }

})();

export default tasks;